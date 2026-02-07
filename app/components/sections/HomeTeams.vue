<script setup lang="ts">
import { teamsStats, teamsSectionData } from "~/data/home";
</script>

<template>
    <section class="pt-24 md:pt-32 pb-16 md:pb-20 bg-sensus-blue relative overflow-hidden">
        <div
            class="absolute inset-0 opacity-10 pointer-events-none"
            style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--white-20.svg&quot;) repeat; background-position: top"
        />

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <p class="text-white/70 font-semibold text-sm uppercase tracking-widest mb-3">
                        {{ teamsSectionData.label }}
                    </p>
                    <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                        <BaseHighlightedTitle :content="teamsSectionData.title" highlight-class="text-sensus-teal" />
                    </h2>
                    <p class="text-white/80 text-lg mb-8 leading-relaxed">
                        {{ teamsSectionData.description }}
                    </p>

                    <div class="grid grid-cols-3 gap-6 mb-10">
                        <div v-for="stat in teamsStats" :key="stat.label" class="text-center">
                            <p class="text-3xl md:text-4xl font-bold text-white mb-1">
                                {{ stat.value }}
                            </p>
                            <p class="text-white/60 text-sm font-medium">
                                {{ stat.label }}
                            </p>
                        </div>
                    </div>

                    <NuxtLink to="/competition/teams" class="btn-glass inline-flex">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span>View Participating Teams</span>
                    </NuxtLink>
                </div>

                <div class="relative">
                    <ClientOnly>
                        <SectionsTeamsWorldMap />
                        <template #fallback>
                            <div
                                class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-[400px] flex items-center justify-center"
                            >
                                <div class="text-center text-white/60">
                                    <svg
                                        class="w-12 h-12 mx-auto mb-4 animate-spin opacity-50"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                    <p class="text-sm">Loading map...</p>
                                </div>
                            </div>
                        </template>
                    </ClientOnly>

                    <div
                        class="absolute -top-4 -right-4 bg-sensus-red text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg z-10"
                    >
                        2026 Teams
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
