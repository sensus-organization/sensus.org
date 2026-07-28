<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import type { NewsArticle } from "~/types/strapi";

const BATCH = 12;

const { data: news } = await useStrapiFind<NewsArticle>("news-articles", {
    populate: NEWS_LIST_POPULATE,
    sort: "date:desc",
    pagination: { pageSize: 200 },
});

const articles = computed(() => news.value || []);

const visibleCount = ref(BATCH);
const visibleArticles = computed(() => articles.value.slice(0, visibleCount.value));
const hasMore = computed(() => visibleCount.value < articles.value.length);

const sentinel = ref<HTMLElement | null>(null);

useIntersectionObserver(sentinel, ([entry]) => {
    if (entry?.isIntersecting) visibleCount.value += BATCH;
});

useSeoMeta({
    title: "News & updates",
    description: "News, announcements and updates from the SensUs student competition on biosensors for health.",
});
</script>

<template>
    <div class="pt-32 pb-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <BaseSectionHeader label="Get informed" :title="{ text: 'News & updates', highlight: 'updates' }" />

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <NuxtLink
                    v-for="article in visibleArticles"
                    :key="article.id"
                    :to="`/news/${article.slug}`"
                    class="group bg-white rounded-2xl border border-sensus-gray-200 shadow-sm overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                    <div class="relative sm:w-3/5 shrink-0 aspect-[16/9] sm:aspect-auto sm:min-h-[220px] overflow-hidden bg-sensus-gray-100">
                        <img
                            v-if="strapiMedia(article.cardImage)"
                            :src="strapiMedia(article.cardImage)"
                            :alt="article.cardImage?.alternativeText || article.cardTitle || article.title"
                            loading="lazy"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <span
                            v-if="formatDate(article.date)"
                            class="absolute top-0 right-0 bg-sensus-red text-white text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-bl-2xl"
                        >
                            {{ formatDate(article.date) }}
                        </span>
                    </div>

                    <div class="sm:w-2/5 p-5 md:p-6 flex flex-col">
                        <h2 class="font-bold text-lg text-sensus-gray-900 leading-snug mb-2 group-hover:text-sensus-red transition-colors">
                            {{ article.cardTitle || article.title }}
                        </h2>
                        <p v-if="article.excerpt" class="hidden sm:block text-sm text-sensus-gray-600 leading-relaxed line-clamp-3 mb-4">
                            {{ article.excerpt }}
                        </p>
                        <span class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sensus-red transition-all group-hover:gap-4">
                            Read more
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </NuxtLink>
            </div>

            <div v-if="hasMore" ref="sentinel" class="h-16" aria-hidden="true" />

            <p v-if="!articles.length" class="text-center text-sensus-gray-500">No news articles yet.</p>
        </div>
    </div>
</template>
