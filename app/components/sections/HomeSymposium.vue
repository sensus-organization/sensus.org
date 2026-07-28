<script setup lang="ts">
import type { HomeSymposium } from "~/types/strapi";

interface Props {
    symposium?: HomeSymposium | null;
}

const props = defineProps<Props>();

const highlights = computed(() => (props.symposium?.highlights || "").split("\n").filter(Boolean));

const thumbnailUrl = computed(() => {
    const media = strapiMedia(props.symposium?.thumbnail);
    if (media) return media;
    const id = (props.symposium?.videoUrl || "").match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
    return id ? `https://img.youtube.com/vi/${id}/0.jpg` : "";
});
</script>

<template>
    <section
        class="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-sensus-gray-50 via-white to-sensus-gray-50 relative overflow-hidden"
    >
        <div
            class="absolute inset-0 opacity-20 pointer-events-none"
            style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--black-5.svg&quot;) repeat"
        />

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-4">
                        {{ symposium?.title }}
                    </h2>
                    <p class="text-sensus-blue font-semibold text-lg mb-6">
                        {{ symposium?.subtitle }}
                    </p>
                    <p class="text-sensus-gray-600 mb-8 leading-relaxed">
                        {{ symposium?.description }}
                    </p>

                    <ul class="space-y-3 mb-8">
                        <li v-for="highlight in highlights" :key="highlight" class="flex items-start gap-4 list-none">
                            <span class="w-2 h-2 rounded-full bg-sensus-red mt-2.5 shrink-0 block" />
                            <span class="text-sensus-gray-700">{{ highlight }}</span>
                        </li>
                    </ul>

                    <a :href="strapiLink(symposium?.websiteUrl) || undefined" target="_blank" rel="noopener noreferrer" class="btn-glass-light">
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
                        <img :src="thumbnailUrl" :alt="symposium?.title || 'Symposium'" class="w-full aspect-video object-cover" />

                        <a
                            :href="strapiLink(symposium?.videoUrl) || undefined"
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
