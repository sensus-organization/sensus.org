<script setup lang="ts">
import { highSchoolsPageData } from "~/data/pages";

const pageData = highSchoolsPageData;

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

            <div class="prose prose-lg prose-sensus max-w-none text-sensus-gray-700 leading-relaxed">
                <template v-for="(section, index) in pageData.sections" :key="index">
                    <h3 class="text-2xl font-bold text-sensus-gray-900 mb-4" :class="{ 'mt-12': index > 0 }">
                        {{ section.title }}
                    </h3>
                    <p v-for="(para, pIndex) in section.paragraphs" :key="pIndex" class="mb-8">
                        {{ para }}
                    </p>
                </template>

                <h3 class="text-2xl font-bold text-sensus-gray-900 mb-4 mt-12">
                    {{ pageData.guidelinesSection.title }}
                </h3>
                <ul class="list-disc pl-6 mb-8 space-y-2">
                    <li v-for="(rule, index) in pageData.guidelinesSection.rules" :key="index">
                        {{ rule }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
