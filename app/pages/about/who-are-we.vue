<script setup lang="ts">
import { whoAreWePageData } from "~/data/pages";
import { whoAreWeSections, awards, innovationDaysActivities, aftermovieData } from "~/data/about";

const pageData = whoAreWePageData;

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

        <div class="max-w-5xl mx-auto px-6 py-20 md:py-32">
            <div class="space-y-16">
                <div
                    v-for="(section, index) in whoAreWeSections"
                    :key="section.id"
                    class="bg-sensus-gray-50 rounded-2xl border border-sensus-gray-200 overflow-hidden"
                >
                    <div class="flex flex-col md:flex-row" :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
                        <div class="md:w-2/5 h-48 md:h-auto min-h-[250px]">
                            <img :src="section.image" :alt="section.title" class="w-full h-full object-cover" />
                        </div>

                        <div class="md:w-3/5 p-6 md:p-8">
                            <p class="text-sensus-red font-semibold text-sm uppercase tracking-wider mb-2">
                                {{ section.tagline }}
                            </p>
                            <h2 class="text-2xl font-bold text-sensus-gray-900 mb-4">
                                {{ section.title }}
                            </h2>

                            <div class="space-y-4 text-sensus-gray-600">
                                <p
                                    v-for="(para, pIndex) in section.content"
                                    :key="pIndex"
                                    :class="{
                                        'font-semibold text-sensus-gray-900':
                                            pIndex === section.content.length - 1 && section.id === 'about',
                                    }"
                                >
                                    {{ para }}
                                </p>
                            </div>

                            <div v-if="section.callout" class="mt-6 bg-white p-4 rounded-xl border-l-4 border-sensus-teal">
                                <p class="font-bold text-sensus-gray-900 uppercase tracking-wider text-sm">
                                    {{ section.callout }}
                                </p>
                            </div>

                            <div v-if="section.link" class="mt-6">
                                <NuxtLink
                                    :to="section.link.to"
                                    class="inline-flex items-center gap-2 text-sensus-red font-semibold hover:gap-4 transition-all"
                                >
                                    {{ section.link.text }}
                                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-20">
                <div class="text-center mb-8">
                    <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">
                        {{ pageData.awardsSection.label }}
                    </p>
                    <h2 class="heading-section text-3xl md:text-4xl text-sensus-gray-900 mb-4">
                        <BaseHighlightedTitle :content="pageData.awardsSection.title" />
                    </h2>
                    <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto">
                        {{ pageData.awardsSection.description }}
                    </p>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                    <div v-for="award in awards" :key="award.name" class="bg-sensus-gray-50 p-6 rounded-xl border border-sensus-gray-200">
                        <h3 class="font-bold text-sensus-gray-900 mb-2">{{ award.name }} Award</h3>
                        <p class="text-sensus-gray-600 text-sm">
                            {{ award.description }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-20">
                <div class="text-center mb-8">
                    <h2 class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">
                        <BaseHighlightedTitle :content="pageData.regulationsSection.title" />
                    </h2>
                    <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto">
                        {{ pageData.regulationsSection.description }}
                    </p>
                </div>
                <div class="flex flex-wrap justify-center gap-4">
                    <a
                        v-for="link in pageData.regulationsSection.links"
                        :key="link.text"
                        :href="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-secondary inline-flex items-center gap-2"
                    >
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                v-if="link.text.includes('Rules')"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                            <path
                                v-else
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        {{ link.text }}
                    </a>
                </div>
            </div>

            <div class="mt-20 bg-sensus-gray-50 rounded-2xl border border-sensus-gray-200 p-8 md:p-12">
                <div class="text-center mb-8">
                    <p class="text-sensus-red font-semibold text-sm uppercase tracking-wider mb-2">
                        {{ pageData.innovationDaysSection.label }}
                    </p>
                    <h2 class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">
                        <BaseHighlightedTitle :content="pageData.innovationDaysSection.title" />
                    </h2>
                    <p class="text-sensus-gray-600 max-w-2xl mx-auto">
                        {{ pageData.innovationDaysSection.description }}
                    </p>
                </div>

                <ul class="max-w-2xl mx-auto space-y-3 mb-8">
                    <li v-for="(activity, index) in innovationDaysActivities" :key="index" class="flex items-start gap-3">
                        <span class="w-2 h-2 rounded-full bg-sensus-red mt-2.5 shrink-0" />
                        <span class="text-sensus-gray-700">{{ activity }}</span>
                    </li>
                </ul>

                <p class="text-sensus-gray-600 text-center max-w-2xl mx-auto">
                    {{ pageData.innovationDaysSection.footer }}
                </p>
            </div>

            <div class="mt-20">
                <div class="text-center mb-8">
                    <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">
                        {{ pageData.aftermovieSection.label }}
                    </p>
                    <h2 class="heading-section text-3xl md:text-4xl text-sensus-gray-900 mb-4">
                        <BaseHighlightedTitle :content="pageData.aftermovieSection.title" />
                    </h2>
                    <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto">
                        {{ pageData.aftermovieSection.description }}
                    </p>
                </div>

                <BaseVideoThumbnail
                    :video-url="aftermovieData.videoUrl"
                    :thumbnail-url="aftermovieData.thumbnail"
                    alt="SensUs Aftermovie"
                />
            </div>

            <div class="mt-16">
                <BaseSectionCta :title="pageData.cta.title" :to="pageData.cta.to" :button-text="pageData.cta.buttonText" />
            </div>
        </div>
    </div>
</template>
