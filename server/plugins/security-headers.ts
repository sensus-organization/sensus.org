import { createHash } from "node:crypto";

const INLINE_SCRIPT = /<script(?![^>]*\ssrc=)([^>]*)>([\s\S]*?)<\/script>/gi;
const EXECUTABLE_TYPE = /type\s*=\s*["']?([^"'\s>]+)/i;
const JS_TYPES = new Set(["text/javascript", "application/javascript", "module", "importmap"]);

function originOf(url?: string): string {
    try {
        return new URL(url ?? "").origin;
    } catch {
        return "";
    }
}

function scriptHashes(chunks: string[]): string[] {
    const hashes = new Set<string>();
    for (const chunk of chunks) {
        for (const [, attrs, body] of chunk.matchAll(INLINE_SCRIPT)) {
            const type = attrs?.match(EXECUTABLE_TYPE)?.[1]?.toLowerCase();
            if (type && !JS_TYPES.has(type)) continue;
            if (!body) continue;
            hashes.add(`'sha256-${createHash("sha256").update(body, "utf8").digest("base64")}'`);
        }
    }
    return [...hashes];
}

const PAYLOAD_PATH = /\/_payload\.json(\?|$)/;

export default defineNitroPlugin((nitroApp) => {
    if (import.meta.dev) return;

    nitroApp.hooks.hook("beforeResponse", (event) => {
        if (PAYLOAD_PATH.test(event.path)) {
            setResponseHeader(event, "cache-control", "no-store");
        }
    });

    nitroApp.hooks.hook("render:html", (html, { event }) => {
        const strapiOrigin = originOf(useRuntimeConfig(event).public.strapiUrl as string);
        const media = ["https://cdn.sensus.org", strapiOrigin].filter(Boolean);

        const policy = [
            "default-src 'self'",
            "base-uri 'self'",
            "object-src 'none'",
            "form-action 'self'",
            "frame-src https://www.canva.com",
            "manifest-src 'self'",
            `script-src 'self' ${scriptHashes([...html.head, ...html.bodyPrepend, ...html.bodyAppend]).join(" ")}`,
            "style-src 'self' 'unsafe-inline'",
            "font-src 'self' data:",
            `img-src 'self' data: blob: https://img.youtube.com https://tile.openstreetmap.org https://*.tile.openstreetmap.org ${media.join(" ")}`,
            `media-src 'self' ${media.join(" ")}`,
            `connect-src 'self' ${media.join(" ")}`,
        ].join("; ");

        const cspMeta = `<meta http-equiv="Content-Security-Policy" content="${policy}">`;
        const charsetIndex = html.head.findIndex((chunk) => /<meta[^>]*charset/i.test(chunk));
        if (charsetIndex < 0) html.head.unshift(cspMeta);
        else html.head[charsetIndex] = html.head[charsetIndex]!.replace(/<meta[^>]*charset[^>]*>/i, (charset) => charset + cspMeta);
    });
});
