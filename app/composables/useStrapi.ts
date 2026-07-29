import { isScriptProtocol, parseURL } from "ufo";
import type { StrapiMedia } from "~/types/strapi";

type QueryPrimitive = string | number | boolean;
type QueryValue = QueryPrimitive | null | undefined | QueryObject | QueryValue[];
interface QueryObject {
    [key: string]: QueryValue;
}

function toQuery(obj: QueryObject, prefix = ""): string {
    const parts: string[] = [];

    for (const key of Object.keys(obj)) {
        const value = obj[key];
        if (value === undefined || value === null) continue;

        const path = prefix ? `${prefix}[${key}]` : key;

        if (Array.isArray(value)) {
            value.forEach((entry, index) => {
                const itemPath = `${path}[${index}]`;
                if (entry !== null && typeof entry === "object") {
                    const nested = toQuery(entry as QueryObject, itemPath);
                    if (nested) parts.push(nested);
                } else if (entry !== undefined && entry !== null) {
                    parts.push(`${encodeURIComponent(itemPath)}=${encodeURIComponent(String(entry))}`);
                }
            });
        } else if (typeof value === "object") {
            const nested = toQuery(value as QueryObject, path);
            if (nested) parts.push(nested);
        } else {
            parts.push(`${encodeURIComponent(path)}=${encodeURIComponent(String(value))}`);
        }
    }

    return parts.join("&");
}

function strapiBaseUrl(): string {
    return useRuntimeConfig().public.strapiUrl as string;
}

function safeUrl(url?: string | null): string {
    if (!url) return "";
    const trimmed = url.trim();
    const stripped = [...trimmed].filter((char) => (char.codePointAt(0) ?? 0) > 0x20).join("");
    const protocol = parseURL(stripped).protocol || "";
    return isScriptProtocol(protocol) ? "" : trimmed;
}

export function metaText(value?: string | null): string | undefined {
    if (!value) return undefined;
    const stripped = value.replace(/[<>]/g, "");
    return stripped || undefined;
}

export function strapiMedia(media?: StrapiMedia | string | null): string {
    if (!media) return "";
    const url = safeUrl(typeof media === "string" ? media : media.url);
    if (!url) return "";
    if (/^https?:\/\//.test(url)) return url;
    return `${strapiBaseUrl()}${url}`;
}

export function strapiLink(url?: string | null): string {
    const safe = safeUrl(url);
    if (!safe) return "";
    return safe.startsWith("/uploads/") ? `${strapiBaseUrl()}${safe}` : safe;
}

export function formatDate(value?: string | null): string {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export function strapiUrl(path: string, query: QueryObject = {}): string {
    const qs = toQuery(query);
    return `${strapiBaseUrl()}/api/${path}${qs ? `?${qs}` : ""}`;
}

export async function strapiFetch<T = unknown>(path: string, query: QueryObject = {}): Promise<T | null> {
    try {
        const res = await $fetch<{ data: T }>(strapiUrl(path, query));
        return (res?.data ?? null) as T | null;
    } catch (error) {
        if (import.meta.prerender) throw error;
        return null;
    }
}

export function useStrapiFind<T = unknown>(path: string, query: QueryObject = {}) {
    return useAsyncData<T[]>(`strapi:${strapiUrl(path, query)}`, async () => {
        const data = await strapiFetch<T[]>(path, query);
        return data ?? [];
    });
}

export const PAGE_POPULATE: QueryObject = {
    seo: true,
    hero: { populate: { title: true, image: true } },
    sections: {
        on: {
            "blocks.section-header": { populate: { title: true } },
            "blocks.rich-text": { populate: "*" },
            "blocks.feature": { populate: { title: true, link: true, image: true } },
            "blocks.cta": { populate: "*" },
            "blocks.video": { populate: { thumbnail: true } },
            "blocks.image": { populate: { image: true } },
            "blocks.schedule": { populate: { items: true } },
            "blocks.link-list": { populate: { links: true } },
            "blocks.card-list": { populate: { cards: { populate: { image: true } } } },
            "blocks.person-grid": { populate: { title: true, people: { populate: { photo: true } } } },
            "blocks.organization": { populate: { title: true } },
            "blocks.logo-grid": { populate: { partners: { populate: { logo: true } } } },
            "blocks.team-grid": { populate: { title: true } },
            "blocks.world-map": { populate: "*" },
            "blocks.timeline": { populate: { title: true } },
            "blocks.archive-hub": { populate: { title: true } },
        },
    },
};

export const EDITION_POPULATE: QueryObject = {
    links: true,
    results: {
        populate: {
            first: { populate: { trd: true } },
            second: { populate: { trd: true } },
            third: { populate: { trd: true } },
        },
    },
};

export const MEMBERSHIP_POPULATE: QueryObject = {
    person: { populate: { photo: true } },
    department: { fields: ["name", "order"] },
};

export const GLOBAL_POPULATE: QueryObject = {
    navigation: { populate: { children: true } },
    socialLinks: true,
    addresses: true,
    legalLinks: true,
    seo: true,
};

export const HOME_POPULATE: QueryObject = {
    hero: { populate: { buttons: true, poster: true } },
    about: { populate: { title: true, images: true } },
    mission: { populate: { title: true, cards: { populate: { image: true } } } },
    teamsSection: { populate: { title: true, stats: true } },
    theme: { populate: { thumbnail: true } },
    symposium: { populate: { thumbnail: true } },
    highSchools: { populate: { images: true } },
    partners: { populate: { logo: true } },
    seo: true,
};

export const NEWS_POPULATE: QueryObject = {
    heroImage: true,
    cardImage: true,
    sections: { populate: { image: true } },
};

export const NEWS_LIST_POPULATE: QueryObject = {
    cardImage: true,
};

export const CONTACT_POPULATE: QueryObject = {
    seo: true,
    header: { populate: { title: true } },
    visitingAddress: true,
    shippingAddress: true,
    bankDetails: true,
    legal: true,
};
