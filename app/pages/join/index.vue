<script setup lang="ts">
import { joinIndexPageData } from "~/data/pages";
import { joinOptions } from "~/data/join";

const pageData = joinIndexPageData;

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

        <div class="max-w-6xl mx-auto px-6 py-20 md:py-32">
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

            <div class="grid md:grid-cols-3 gap-8">
                <NuxtLink
                    v-for="option in joinOptions"
                    :key="option.title"
                    :to="option.to"
                    class="group bg-white rounded-2xl border border-sensus-gray-200 shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                    <div class="relative h-48 overflow-hidden">
                        <img
                            :src="option.image"
                            :alt="option.title"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div
                            class="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                            :class="{
                                'bg-sensus-red': option.color === 'sensus-red',
                                'bg-sensus-teal': option.color === 'sensus-teal',
                                'bg-sensus-blue': option.color === 'sensus-blue',
                            }"
                        >
                            <svg
                                v-if="option.icon === 'trophy'"
                                class="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                />
                            </svg>
                            <svg
                                v-if="option.icon === 'users'"
                                class="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <svg
                                v-if="option.icon === 'handshake'"
                                class="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div class="p-6">
                        <p
                            class="text-sm font-semibold uppercase tracking-wider mb-1"
                            :class="{
                                'text-sensus-red': option.color === 'sensus-red',
                                'text-sensus-teal': option.color === 'sensus-teal',
                                'text-sensus-blue': option.color === 'sensus-blue',
                            }"
                        >
                            {{ option.subtitle }}
                        </p>
                        <h3 class="text-xl font-bold text-sensus-gray-900 mb-3">
                            {{ option.title }}
                        </h3>
                        <p class="text-sensus-gray-600 text-sm mb-4">
                            {{ option.description }}
                        </p>

                        <div
                            class="flex items-center gap-2 font-semibold transition-all group-hover:gap-4"
                            :class="{
                                'text-sensus-red': option.color === 'sensus-red',
                                'text-sensus-teal': option.color === 'sensus-teal',
                                'text-sensus-blue': option.color === 'sensus-blue',
                            }"
                        >
                            Learn more
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <div class="mt-20 text-center">
                <p class="text-sensus-gray-600 mb-4">
                    {{ pageData.footer.question }}
                </p>
                <NuxtLink
                    :to="pageData.footer.to"
                    class="inline-flex items-center gap-2 text-sensus-red font-semibold hover:gap-4 transition-all"
                >
                    {{ pageData.footer.linkText }}
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
