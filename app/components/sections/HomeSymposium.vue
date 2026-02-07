<script setup lang="ts">
import { symposiumData } from "~/data/home";
</script>

<template>
    <section class="py-24 md:py-32 bg-gradient-to-br from-sensus-gray-50 via-white to-sensus-gray-50 relative overflow-hidden">
        <div
            class="absolute inset-0 opacity-20 pointer-events-none"
            style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--black-5.svg&quot;) repeat"
        />

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-4">
                        {{ symposiumData.title }}
                    </h2>
                    <p class="text-sensus-blue font-semibold text-lg mb-6">
                        {{ symposiumData.subtitle }}
                    </p>
                    <p class="text-sensus-gray-600 mb-8 leading-relaxed">
                        {{ symposiumData.description }}
                    </p>

                    <ul class="space-y-3 mb-8">
                        <li v-for="highlight in symposiumData.highlights" :key="highlight" class="flex items-start gap-4 list-none">
                            <span class="w-2 h-2 rounded-full bg-sensus-red mt-2.5 shrink-0 block" />
                            <span class="text-sensus-gray-700">{{ highlight }}</span>
                        </li>
                    </ul>

                    <a :href="symposiumData.websiteUrl" target="_blank" rel="noopener noreferrer" class="btn-glass-light">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                        Visit Symposium Website
                    </a>
                </div>

                <div class="relative">
                    <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img :src="symposiumData.thumbnail" :alt="symposiumData.title" class="w-full aspect-video object-cover" />

                        <a
                            :href="symposiumData.videoUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                        >
                            <div
                                class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                            >
                                <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </a>
                    </div>

                    <div class="absolute -bottom-4 -right-4 bg-sensus-red text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                        Watch Recording
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
