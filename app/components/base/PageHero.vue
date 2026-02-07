<script setup lang="ts">
import type { HighlightedText } from "~/data/types";

interface Props {
    badge?: string;
    title: HighlightedText | string;
    subtitle?: string;
    image?: string;
}

defineProps<Props>();
</script>

<template>
    <section class="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
            <img :src="image" :alt="title" class="w-full h-full object-cover" />
        </div>

        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h1 class="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                <BaseHighlightedTitle :content="title" highlight-class="text-sensus-teal" />
            </h1>

            <p v-if="subtitle" class="text-white/90 text-lg md:text-xl max-w-3xl mx-auto text-balance font-medium leading-relaxed">
                {{ subtitle }}
            </p>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse-subtle">
            <div class="flex flex-col items-center gap-2 text-white/60">
                <span class="text-xs uppercase tracking-widest font-medium">Explore</span>
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    </section>
</template>
