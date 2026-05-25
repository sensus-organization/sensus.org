<script setup lang="ts">
import { archivePageData } from "~/data/pages";

const pageData = archivePageData;

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
            <div class="text-center">
                <div class="w-24 h-24 rounded-full bg-sensus-gray-100 flex items-center justify-center mx-auto mb-8">
                    <svg class="w-12 h-12 text-sensus-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                    </svg>
                </div>

                <p class="text-sensus-teal font-semibold text-sm uppercase tracking-widest mb-3">
                    {{ pageData.comingSoon.label }}
                </p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-6">
                    <BaseHighlightedTitle :content="pageData.comingSoon.title" />
                </h2>
                <p class="text-sensus-gray-600 text-lg max-w-xl mx-auto mb-8">
                    {{ pageData.comingSoon.description }}
                </p>

                <p class="text-sensus-gray-600 text-base max-w-xl mx-auto mb-10">
                    {{ pageData.comingSoon.legacyNotice.text }}
                    <a
                        :href="pageData.comingSoon.legacyNotice.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sensus-teal font-semibold hover:underline"
                    >
                        {{ pageData.comingSoon.legacyNotice.linkText }}</a
                    >.
                </p>

                <div class="flex items-center justify-center gap-2 mb-12">
                    <div class="w-2 h-2 rounded-full bg-sensus-red animate-pulse" />
                    <div class="w-2 h-2 rounded-full bg-sensus-teal animate-pulse" style="animation-delay: 0.2s" />
                    <div class="w-2 h-2 rounded-full bg-sensus-blue animate-pulse" style="animation-delay: 0.4s" />
                </div>

                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <NuxtLink
                        v-for="button in pageData.comingSoon.buttons"
                        :key="button.to"
                        :to="button.to"
                        :class="button.text.includes('Current') ? 'btn-primary' : 'btn-secondary'"
                        class="inline-flex items-center gap-2"
                    >
                        {{ button.text }}
                        <svg v-if="button.text.includes('Current')" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
