<script setup lang="ts">
import { heroData } from "~/data/home";

const videoUrl = heroData.videoUrl;
const videoPoster = heroData.videoPoster;
const heroButtons = heroData.buttons;
</script>

<template>
    <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <video :src="videoUrl" :poster="videoPoster" autoplay loop muted playsinline class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 class="heading-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6">
                {{ heroData.title.before }}<br />
                <span class="text-sensus-red">{{ heroData.title.highlighted }}</span>
            </h1>

            <p class="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance font-medium">
                {{ heroData.subtitle }}
            </p>

            <div class="flex flex-col items-center gap-3">
                <template v-for="btn in heroButtons" :key="btn.label">
                    <NuxtLink v-if="btn.variant === 'primary' && btn.to" :to="btn.to" class="btn-glass-primary">
                        <svg v-if="btn.icon === 'flask'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                        </svg>
                        {{ btn.label }}
                    </NuxtLink>

                    <a
                        v-else-if="btn.variant === 'glass' && btn.href"
                        :href="btn.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-glass"
                    >
                        <svg v-if="btn.icon === 'play'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg v-if="btn.icon === 'users'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        {{ btn.label }}
                    </a>

                    <NuxtLink v-else-if="btn.variant === 'glass' && btn.to" :to="btn.to" class="btn-glass">
                        <svg v-if="btn.icon === 'users'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        {{ btn.label }}
                    </NuxtLink>
                </template>
            </div>
        </div>

        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse-subtle">
            <div class="flex flex-col items-center gap-2 text-white/60">
                <span class="text-xs uppercase tracking-widest font-medium">Scroll</span>
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    </section>
</template>
