<script setup lang="ts">
import type { NewsArticle } from "~/types/strapi";

const route = useRoute();
const slug = computed(() => (Array.isArray(route.params.slug) ? route.params.slug.join("/") : route.params.slug || ""));

const { data: news } = await useAsyncData(`news:${slug.value}`, () =>
    strapiFetch<NewsArticle[]>("news-articles", {
        filters: { slug: { $eq: slug.value } },
        populate: NEWS_POPULATE,
        pagination: { pageSize: 1 },
    }),
);

const article = computed(() => news.value?.[0] ?? null);

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: "Article Not Found", fatal: true });
}

const heroUrl = computed(() => strapiMedia(article.value?.heroImage));
const sections = computed(() => article.value?.sections || []);

useSeoMeta({
    title: () => metaText(article.value?.title),
    description: () => metaText(article.value?.excerpt),
    ogTitle: () => metaText(article.value?.title),
    ogDescription: () => metaText(article.value?.excerpt),
    ogImage: () => metaText(heroUrl.value),
});
</script>

<template>
    <article v-if="article" class="bg-white">
        <section class="relative overflow-hidden" :class="heroUrl ? 'bg-sensus-gray-900' : 'bg-gradient-to-br from-sensus-blue to-sensus-teal'">
            <div class="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/5]">
                <img
                    v-if="heroUrl"
                    :src="heroUrl"
                    :alt="article.heroImage?.alternativeText || article.title"
                    class="w-full h-full object-cover"
                />
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40" />

            <div class="absolute inset-0 flex items-end">
                <div class="w-full max-w-4xl mx-auto px-6 pt-28 pb-8 md:pb-12">
                    <h1 class="heading-display text-3xl md:text-5xl text-white text-balance">
                        {{ article.title }}
                    </h1>
                </div>
            </div>
        </section>

        <div class="max-w-4xl mx-auto px-6 pt-10">
            <span
                v-if="formatDate(article.date)"
                class="inline-block bg-sensus-red text-white text-[12px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg"
            >
                {{ formatDate(article.date) }}
            </span>
            <p v-if="article.excerpt && article.excerpt !== article.title" class="mt-6 text-xl text-sensus-gray-600 leading-relaxed">
                {{ article.excerpt }}
            </p>
        </div>

        <section v-if="article.body?.length" class="pt-10 pb-4">
            <div class="max-w-4xl mx-auto px-6">
                <BaseBlocksRenderer :content="article.body" />
            </div>
        </section>

        <section v-for="(section, index) in sections" :key="section.id ?? index" class="py-6 md:py-8">
            <div class="max-w-4xl mx-auto px-6">
                <div :class="section.highlight ? 'rounded-3xl bg-sensus-red/5 border border-sensus-red/15 p-6 md:p-10' : ''">
                    <h2 v-if="section.title" class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-6">
                        {{ section.title }}
                    </h2>

                    <div v-if="section.layout === 'text-and-image'" class="grid md:grid-cols-2 gap-8 items-center">
                        <BaseBlocksRenderer v-if="section.body?.length" :content="section.body" />
                        <figure
                            v-if="strapiMedia(section.image)"
                            class="rounded-2xl overflow-hidden border border-sensus-gray-200 shadow-lg"
                        >
                            <img
                                :src="strapiMedia(section.image)"
                                :alt="section.image?.alternativeText || section.title || ''"
                                class="w-full"
                            />
                        </figure>
                    </div>

                    <template v-else>
                        <figure
                            v-if="section.layout === 'image' && strapiMedia(section.image)"
                            class="rounded-2xl overflow-hidden border border-sensus-gray-200 shadow-lg mb-6 last:mb-0"
                        >
                            <img
                                :src="strapiMedia(section.image)"
                                :alt="section.image?.alternativeText || section.title || ''"
                                class="w-full"
                            />
                        </figure>

                        <BaseVideoThumbnail
                            v-else-if="section.layout === 'video' && section.videoUrl"
                            :video-url="section.videoUrl"
                            :thumbnail-url="strapiMedia(section.image) || undefined"
                            :alt="section.title || 'Video'"
                            class="mb-6 last:mb-0"
                        />

                        <BaseBlocksRenderer v-if="section.body?.length" :content="section.body" />
                    </template>
                </div>
            </div>
        </section>

        <div class="max-w-4xl mx-auto px-6 pt-8 pb-24">
            <NuxtLink to="/news" class="btn-glass-light rounded-full text-sm">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to news
            </NuxtLink>
        </div>
    </article>
</template>
