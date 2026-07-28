<script setup lang="ts">
import type { Edition, Global, HighlightedText } from "~/types/strapi";

interface Props {
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();

const global = useState<Global | null>("global", () => null);

const { data: editionsRaw } = await useStrapiFind<Edition>("editions", {
    populate: EDITION_POPULATE,
    sort: "year:desc",
    pagination: { pageSize: 100 },
});

const editions = computed(() => {
    const all = [...(editionsRaw.value || [])].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
    const currentYear = global.value?.currentYear;
    if (currentYear != null) return all.filter((edition) => (edition.year ?? 0) < currentYear);
    if (!all.length) return all;
    const maxYear = Math.max(...all.map((edition) => edition.year ?? 0));
    return all.filter((edition) => (edition.year ?? 0) !== maxYear);
});
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6">
            <div v-if="label || title || description" class="text-center mb-16">
                <p v-if="label" class="text-sensus-red font-medium text-sm uppercase tracking-widest mb-3">
                    {{ label }}
                </p>
                <h2 v-if="title" class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-6">
                    <BaseHighlightedTitle :content="title" />
                </h2>
                <p v-if="description" class="text-lg text-sensus-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {{ description }}
                </p>
            </div>

            <div class="space-y-12">
                <div
                    v-for="(edition, index) in editions"
                    :key="edition.id"
                    :class="index > 0 ? 'pt-12 border-t border-sensus-gray-200' : ''"
                >
                    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                        <div>
                            <h3 class="heading-section text-2xl md:text-3xl text-sensus-gray-900">
                                <BaseHighlightedTitle
                                    :content="{ text: `${edition.year} ${edition.title || ''}`.trim(), highlight: String(edition.year) }"
                                />
                            </h3>
                            <p v-if="edition.biomarker" class="mt-1 text-sensus-gray-500">
                                Biomarker: {{ edition.biomarker }}
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-3 mb-8">
                        <NuxtLink :to="`/archive/${edition.year}`" class="btn-glass-primary rounded-full text-sm">
                            View edition
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </NuxtLink>
                    </div>

                    <BaseResultsTable :results="edition.results" :year="edition.year" />
                </div>
            </div>
        </div>
    </section>
</template>
