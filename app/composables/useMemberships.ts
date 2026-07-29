import type { Membership, Person } from "~/types/strapi";

export interface MembershipGroup {
    name: string | null;
    order: number;
    people: Person[];
}

function membershipQuery(year: number) {
    return {
        filters: { edition: { year: { $eq: year } } },
        populate: MEMBERSHIP_POPULATE,
        sort: ["order:asc"],
        pagination: { pageSize: 300 },
    };
}

export function groupMemberships(memberships: Membership[]): MembershipGroup[] {
    const groups = new Map<string, MembershipGroup>();

    for (const membership of memberships) {
        const person = membership.person;
        if (!person) continue;

        const name = membership.department?.name ?? null;
        const key = name ?? "";
        let group = groups.get(key);
        if (!group) {
            group = { name, order: membership.department?.order ?? -1, people: [] };
            groups.set(key, group);
        }
        group.people.push({ ...person, role: membership.role ?? null });
    }

    return [...groups.values()].sort((a, b) => a.order - b.order);
}

export function useMembershipsByYear(year: MaybeRefOrGetter<number | null | undefined>) {
    return useAsyncData<MembershipGroup[]>(
        () => `memberships:${toValue(year) ?? "none"}`,
        async () => {
            const resolved = toValue(year);
            if (!resolved) return [];
            const data = await strapiFetch<Membership[]>("memberships", membershipQuery(resolved));
            return groupMemberships(data ?? []);
        },
        { watch: [() => toValue(year)] }
    );
}

export function useLatestOrganization() {
    const nuxtApp = useNuxtApp();

    return useAsyncData<{ year: number | null; groups: MembershipGroup[] }>("memberships:latest", async () => {
        const newest = await strapiFetch<Membership[]>("memberships", {
            populate: { edition: { fields: ["year"] } },
            sort: ["edition.year:desc"],
            pagination: { pageSize: 1 },
        });

        const year = newest?.[0]?.edition?.year ?? null;
        if (!year) return { year: null, groups: [] };

        const data = await nuxtApp.runWithContext(() =>
            strapiFetch<Membership[]>("memberships", membershipQuery(year))
        );
        return { year, groups: groupMemberships(data ?? []) };
    });
}
