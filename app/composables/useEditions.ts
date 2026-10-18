import type { Edition, Global, Organization } from "~/types/strapi";
import type { QueryObject } from "~/composables/useStrapi";

// Results count once at least one award has a category and a placed team.
export function hasResults(edition?: Edition | null) {
    return !!edition?.results?.some((result) => result.category && (result.first || result.second || result.third));
}

export function useCurrentEdition(populate: QueryObject = {}) {
    const global = useState<Global | null>("global", () => null);
    const query = {
        filters: { year: { $eq: global.value?.currentYear } },
        populate,
        pagination: { pageSize: 1 },
    };

    return useAsyncData<Edition | null>(`current-edition:${strapiUrl("editions", query)}`, async () => {
        if (!global.value?.currentYear) return null;
        const data = await strapiFetch<Edition[]>("editions", query);
        return data?.[0] ?? null;
    });
}

// The newest published organization that has members, so next year's team can go live while the rest
// of the site still shows the current year (and an empty one doesn't blank the page).
export function useLatestOrganization() {
    const query = {
        filters: { departments: { members: { name: { $notNull: true } } } },
        populate: ORGANIZATION_POPULATE,
        sort: ["year:desc"],
        pagination: { pageSize: 1 },
    };

    return useAsyncData<Organization | null>(`latest-organization:${strapiUrl("organizations", query)}`, async () => {
        const data = await strapiFetch<Organization[]>("organizations", query);
        return data?.[0] ?? null;
    });
}
