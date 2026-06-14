<script setup lang="ts">
import { symposiumPageData } from "~/data/pages";

const pageData = symposiumPageData;

useHead({
    title: pageData.meta.title,
    meta: [
        {
            name: "description",
            content: pageData.meta.description,
        },
    ],
});
</script>

<template>
    <div class="bg-white">
        <BasePageHero
            :badge="pageData.hero.badge"
            :title="pageData.hero.title"
            :subtitle="pageData.hero.subtitle"
            :image="pageData.hero.image"
        />

        <div class="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div class="text-center mb-16">
                <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">
                    {{ pageData.intro.label }}
                </p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-4">
                    <BaseHighlightedTitle :content="pageData.intro.title" />
                </h2>
                <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto text-balance">
                    {{ pageData.intro.description }}
                </p>
            </div>

            <div class="mb-16 rounded-2xl overflow-hidden border border-sensus-gray-200 shadow-lg">
                <img
                    :src="pageData.poster.image"
                    :alt="pageData.poster.alt"
                    class="w-full"
                >
            </div>

            <BaseBlocksRenderer :content="pageData.content" />

            <div class="mt-16 bg-sensus-gray-50 rounded-3xl p-8 md:p-12 text-center border border-sensus-gray-100">
                <div class="max-w-2xl mx-auto">
                    <h3 class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">
                        {{ pageData.cta.title }}
                    </h3>
                    <p class="text-sensus-gray-600 text-lg mb-8 leading-relaxed">
                        {{ pageData.cta.description }}
                    </p>
                    <div class="flex justify-center">
                        <a
                            :href="pageData.cta.formUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-primary inline-flex items-center justify-center gap-2"
                        >
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                />
                            </svg>
                            Register Now
                        </a>
                    </div>

                    <div class="border-t border-sensus-gray-200 mt-10 pt-8">
                        <p class="text-sensus-gray-600 mb-6 leading-relaxed">
                            {{ pageData.archive.description }}
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                v-for="edition in pageData.archive.editions"
                                :key="edition.url"
                                :href="edition.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {{ edition.label }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
