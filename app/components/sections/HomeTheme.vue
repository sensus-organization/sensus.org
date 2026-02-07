<script setup lang="ts">
import { themeData } from "~/data/home";
</script>

<template>
    <section id="theme-2026" class="pt-16 md:pt-20 pb-24 md:pb-32 bg-sensus-blue relative overflow-hidden">
        <div
            class="absolute inset-0 opacity-10 pointer-events-none"
            style="
                background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--white-20.svg&quot;) repeat;
                background-position: bottom;
            "
        />

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div class="relative order-2 lg:order-1">
                    <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            :src="themeData.videoThumbnail"
                            :alt="`${themeData.year} Theme - ${themeData.disease}`"
                            class="w-full aspect-video object-cover"
                        />

                        <a
                            :href="themeData.videoUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                        >
                            <div
                                class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                            >
                                <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="order-1 lg:order-2">
                    <p class="text-white/70 font-semibold text-sm uppercase tracking-widest mb-3">{{ themeData.year }} Competition</p>
                    <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                        Monitoring
                        <span class="text-sensus-teal">Levodopa</span>
                    </h2>

                    <p class="text-white/70 mb-6 leading-relaxed">
                        {{ themeData.description }}
                    </p>
                    <p class="text-white/70 mb-8 leading-relaxed">
                        {{ themeData.challenge }}
                    </p>

                    <div class="flex flex-col sm:flex-row gap-3">
                        <a href="https://wiki.sensus.org" target="_blank" rel="noopener noreferrer" class="btn-glass-primary">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                            <span>Read more on Wiki</span>
                        </a>
                        <NuxtLink to="/about/timeline" class="btn-glass">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>View Our Journey</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
