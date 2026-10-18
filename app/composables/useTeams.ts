import type { Global, Team } from "~/types/strapi";

export function useCurrentTeams() {
    const global = useState<Global | null>("global", () => null);

    return useAsyncData<Team[]>("teams:current", async () => {
        const year = global.value?.currentYear;
        if (!year) return [];

        const data = await strapiFetch<Team[]>("teams", {
            filters: { year: { $eq: year } },
            populate: "*",
            pagination: { pageSize: 100 },
        });

        return data ?? [];
    });
}
