<script setup lang="ts">
import type { AwardResult, Team } from "~/types/strapi";

interface Props {
    results?: AwardResult[] | null;
    year?: number | null;
}

const props = defineProps<Props>();

const CATEGORIES = [
    { slug: "innovation", name: "Innovation Award" },
    { slug: "translation-potential", name: "Translation Potential Award" },
    { slug: "analytical-performance", name: "Analytical Performance Award" },
    { slug: "public-inspiration", name: "Public Inspiration Award" },
] as const;

const PLACEMENTS = [
    { key: "first", label: "1st" },
    { key: "second", label: "2nd" },
    { key: "third", label: "3rd" },
] as const;

type PlacementKey = (typeof PLACEMENTS)[number]["key"];

const byCategory = computed(() => {
    const map: Record<string, AwardResult> = {};
    for (const result of props.results || []) {
        if (result.category) map[result.category] = result;
    }
    return map;
});

const columns = computed(() => CATEGORIES.filter((category) => byCategory.value[category.slug]));

const rows = computed(() =>
    PLACEMENTS.filter((placement) => columns.value.some((column) => byCategory.value[column.slug]?.[placement.key])),
);

const teamAt = (slug: string, key: PlacementKey): Team | null => byCategory.value[slug]?.[key] ?? null;
</script>

<template>
    <div v-if="columns.length">
        <div class="hidden md:block overflow-x-auto rounded-3xl border border-sensus-gray-200">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-sensus-gray-50">
                        <th class="p-4 text-xs font-semibold uppercase tracking-widest text-sensus-gray-400" />
                        <th
                            v-for="column in columns"
                            :key="column.slug"
                            class="p-4 text-sm font-bold text-sensus-gray-900"
                        >
                            {{ column.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="placement in rows" :key="placement.key" class="border-t border-sensus-gray-200">
                        <th
                            class="p-4 text-sm font-bold uppercase tracking-wider"
                            :class="placement.key === 'first' ? 'text-sensus-red' : 'text-sensus-gray-400'"
                        >
                            {{ placement.label }}
                        </th>
                        <td
                            v-for="column in columns"
                            :key="column.slug"
                            class="p-4"
                            :class="placement.key === 'first' ? 'font-bold text-sensus-red' : 'text-sensus-gray-600'"
                        >
                            <template v-if="teamAt(column.slug, placement.key)">
                                <a
                                    v-if="strapiMedia(teamAt(column.slug, placement.key)?.trd)"
                                    :href="strapiMedia(teamAt(column.slug, placement.key)?.trd)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center gap-1.5 hover:underline"
                                >
                                    {{ teamAt(column.slug, placement.key)?.name }}
                                    <svg class="w-3.5 h-3.5 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </a>
                                <span v-else>{{ teamAt(column.slug, placement.key)?.name }}</span>
                            </template>
                            <span v-else class="text-sensus-gray-300">—</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="column in columns" :key="column.slug" class="glass rounded-3xl p-5">
                <h4 class="text-sm font-bold text-sensus-gray-900 mb-3">{{ column.name }}</h4>
                <ul class="space-y-2">
                    <template v-for="placement in rows" :key="placement.key">
                        <li v-if="teamAt(column.slug, placement.key)" class="flex items-center gap-3 text-sm">
                            <span
                                class="font-bold uppercase tracking-wider w-8 shrink-0"
                                :class="placement.key === 'first' ? 'text-sensus-red' : 'text-sensus-gray-400'"
                            >
                                {{ placement.label }}
                            </span>
                            <a
                                v-if="strapiMedia(teamAt(column.slug, placement.key)?.trd)"
                                :href="strapiMedia(teamAt(column.slug, placement.key)?.trd)"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1.5 hover:underline"
                                :class="placement.key === 'first' ? 'font-bold text-sensus-red' : 'text-sensus-gray-600'"
                            >
                                {{ teamAt(column.slug, placement.key)?.name }}
                                <svg class="w-3.5 h-3.5 shrink-0 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </a>
                            <span
                                v-else
                                :class="placement.key === 'first' ? 'font-bold text-sensus-red' : 'text-sensus-gray-600'"
                            >
                                {{ teamAt(column.slug, placement.key)?.name }}
                            </span>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
