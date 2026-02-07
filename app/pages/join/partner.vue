<script setup lang="ts">
import { partnerPageData } from "~/data/pages";
import { partnerBenefits, partnerActivities } from "~/data/join";

const pageData = partnerPageData;

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
            <div class="text-center mb-16">
                <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">
                    {{ pageData.introSection.label }}
                </p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-4">
                    <BaseHighlightedTitle :content="pageData.introSection.title" />
                </h2>
                <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto text-balance">
                    {{ pageData.introSection.description }}
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 mb-16">
                <div
                    v-for="benefit in partnerBenefits"
                    :key="benefit.title"
                    class="bg-sensus-gray-50 rounded-2xl p-6 border border-sensus-gray-200 hover:shadow-lg transition-shadow"
                >
                    <div class="w-12 h-12 rounded-xl bg-sensus-blue flex items-center justify-center mb-4">
                        <svg
                            v-if="benefit.icon === 'academic'"
                            class="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                        </svg>
                        <svg
                            v-if="benefit.icon === 'network'"
                            class="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <svg v-if="benefit.icon === 'eye'" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                        <svg
                            v-if="benefit.icon === 'lightbulb'"
                            class="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-sensus-gray-900 mb-2">
                        {{ benefit.title }}
                    </h3>
                    <p class="text-sensus-gray-600">
                        {{ benefit.description }}
                    </p>
                </div>
            </div>

            <div class="bg-sensus-blue text-white rounded-2xl p-8 md:p-12 mb-16">
                <h3 class="text-2xl font-bold mb-6 text-center">
                    {{ pageData.activitiesSection.title }}
                </h3>
                <ul class="space-y-4 max-w-2xl mx-auto">
                    <li v-for="(activity, index) in partnerActivities" :key="index" class="flex items-start gap-3">
                        <svg class="w-6 h-6 text-sensus-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="text-white/90">{{ activity }}</span>
                    </li>
                </ul>
            </div>

            <BaseSectionCta
                :title="pageData.cta.title"
                :description="pageData.cta.description"
                :to="pageData.cta.to"
                :button-text="pageData.cta.buttonText"
            />
        </div>
    </div>
</template>
