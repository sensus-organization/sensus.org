import type { Global, Team } from "~/types/strapi";

export function useCurrentTeams() {
    const global = useState<Global | null>("global", () => null);
    const nuxtApp = useNuxtApp();

    return useAsyncData<Team[]>("teams:current", async () => {
        let year = global.value?.currentYear ?? null;

        if (!year) {
            const newest = await strapiFetch<Team[]>("teams", {
                fields: ["year"],
                sort: ["year:desc"],
                pagination: { pageSize: 1 },
            });
            year = newest?.[0]?.year ?? null;
        }

        if (!year) return [];

        const data = await nuxtApp.runWithContext(() =>
            strapiFetch<Team[]>("teams", {
                filters: { year: { $eq: year } },
                populate: "*",
                pagination: { pageSize: 100 },
            }),
        );

        return data ?? [];
    });
}
