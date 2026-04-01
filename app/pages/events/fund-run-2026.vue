<script setup lang="ts">
import { fundRunPageData } from "~/data/pages";

const pageData = fundRunPageData;

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

            <BaseBlocksRenderer :content="pageData.content" />

            <div class="mt-16 rounded-2xl overflow-hidden border border-sensus-gray-200">
                <img
                    src="https://cdn.sensus.org/assets/events/map.webp"
                    alt="Fund Run route map — 3 km through TU/e campus"
                    class="w-full"
                >
            </div>

            <div v-if="pageData.schedule" class="mt-20">
                <div class="text-center mb-8">
                    <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">Program</p>
                    <h2 class="heading-section text-3xl md:text-4xl text-sensus-gray-900">Event Schedule</h2>
                </div>

                <div class="space-y-0">
                    <div
                        v-for="(item, index) in pageData.schedule"
                        :key="index"
                        class="flex gap-6 py-5"
                        :class="[
                            index > 0 ? 'border-t border-sensus-gray-200' : '',
                            item.highlight ? 'bg-sensus-gray-50 rounded-xl px-6 -mx-6' : '',
                        ]"
                    >
                        <div class="shrink-0 w-32 md:w-40">
                            <span class="text-sensus-red font-bold text-lg">{{ item.time }}</span>
                        </div>
                        <p :class="item.highlight ? 'font-bold text-sensus-gray-900' : 'text-sensus-gray-700'">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>

            <div v-if="pageData.participationFees" class="mt-20">
                <div class="bg-sensus-gray-50 rounded-2xl border border-sensus-gray-200 p-8 md:p-12">
                    <div class="text-center mb-8">
                        <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">Registration</p>
                        <h2 class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">Tickets</h2>
                        <p class="text-sensus-gray-600 max-w-2xl mx-auto">
                            {{ pageData.participationFees.label }}
                        </p>
                    </div>

                    <div class="flex justify-center gap-4 md:gap-6 mb-8">
                        <a
                            v-for="option in pageData.participationFees.options"
                            :key="option.amount"
                            :href="option.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bg-white rounded-xl border border-sensus-gray-200 px-8 py-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-sensus-red/40 transition-all cursor-pointer"
                        >
                            <span class="text-2xl md:text-3xl font-bold text-sensus-gray-900">{{ option.amount }}</span>
                        </a>
                    </div>

                    <p class="text-sensus-gray-600 text-center text-sm">{{ pageData.participationFees.note }}</p>

                    <div v-if="pageData.donationUrl" class="mt-8 text-center">
                        <a
                            :href="pageData.donationUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-primary inline-flex items-center gap-2"
                        >
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                            Donate Extra
                        </a>
                    </div>
                </div>
            </div>

            <div v-if="pageData.contactEmail" class="mt-16 text-center">
                <p class="text-sensus-gray-600">
                    For any questions, please contact us at
                    <a :href="`mailto:${pageData.contactEmail}`" class="text-sensus-red font-semibold hover:underline">
                        {{ pageData.contactEmail }}
                    </a>
                </p>
            </div>

        </div>
    </div>
</template>
