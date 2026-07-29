import { createHash, timingSafeEqual } from "node:crypto";

const sha256 = (value: string) => createHash("sha256").update(value).digest();

const secretMatches = (given: string, expected: string) =>
    given.length > 0 && timingSafeEqual(sha256(given), sha256(expected));

export default defineEventHandler(async (event) => {
    const expected = useRuntimeConfig(event).revalidateSecret;

    if (!expected) {
        throw createError({ statusCode: 503, statusMessage: "Revalidation not configured" });
    }

    if (!secretMatches(getRequestHeader(event, "x-revalidate-secret") ?? "", expected)) {
        throw createError({ statusCode: 403, statusMessage: "Forbidden" });
    }

    const storage = useStorage("cache");
    const keys = await storage.getKeys();
    await Promise.all(keys.map((key) => storage.removeItem(key)));

    setResponseHeader(event, "cache-control", "no-store");
    return { purged: keys.length };
});
