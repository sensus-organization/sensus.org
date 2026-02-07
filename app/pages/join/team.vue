<script setup lang="ts">
import { teamPageData } from "~/data/pages";
import { teamRoadmap } from "~/data/join";

const pageData = teamPageData;

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
                    {{ pageData.introSection.label }}
                </p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-4">
                    <BaseHighlightedTitle :content="pageData.introSection.title" />
                </h2>
                <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto text-balance">
                    {{ pageData.introSection.description }}
                </p>
            </div>

            <div class="space-y-8 mb-16">
                <div v-for="step in teamRoadmap" :key="step.number" class="relative pl-16">
                    <div
                        class="absolute left-0 top-0 w-10 h-10 rounded-full bg-sensus-red text-white font-bold flex items-center justify-center text-lg"
                    >
                        {{ step.number }}
                    </div>

                    <div v-if="step.number < 4" class="absolute left-5 top-12 w-0.5 h-full bg-sensus-gray-200 -translate-x-1/2" />

                    <div class="bg-sensus-gray-50 rounded-2xl p-6 border border-sensus-gray-200">
                        <h3 class="text-xl font-bold text-sensus-gray-900 mb-3">
                            {{ step.title }}
                        </h3>
                        <p class="text-sensus-gray-600 mb-4">
                            {{ step.description }}
                        </p>

                        <ul v-if="step.requirements" class="list-disc pl-6 space-y-2 text-sensus-gray-600 mb-4">
                            <li v-for="(req, index) in step.requirements" :key="index">
                                {{ req }}
                            </li>
                        </ul>

                        <p v-if="step.highlight" class="text-sensus-red font-semibold">
                            {{ step.highlight }}
                        </p>
                    </div>
                </div>
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
