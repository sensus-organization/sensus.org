<script setup lang="ts">
import { timelineEvents } from "~/data/timeline";

function getColorClasses(color: string) {
    const colors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
        red: {
            bg: "bg-sensus-red/10",
            border: "border-sensus-red",
            text: "text-sensus-red",
            dot: "bg-sensus-red",
        },
        blue: {
            bg: "bg-sensus-blue/10",
            border: "border-sensus-blue",
            text: "text-sensus-blue",
            dot: "bg-sensus-blue",
        },
        teal: {
            bg: "bg-sensus-teal/10",
            border: "border-sensus-teal",
            text: "text-sensus-teal",
            dot: "bg-sensus-teal",
        },
        orange: {
            bg: "bg-sensus-orange/10",
            border: "border-sensus-orange",
            text: "text-sensus-orange",
            dot: "bg-sensus-orange",
        },
        green: {
            bg: "bg-sensus-green/10",
            border: "border-sensus-green",
            text: "text-sensus-green",
            dot: "bg-sensus-green",
        },
    };
    return colors[color] || colors.red;
}
</script>

<template>
    <section ref="timelineRef" class="py-20 md:py-32 bg-sensus-gray-50 relative overflow-hidden">
        <div
            class="absolute inset-0 opacity-20 pointer-events-none"
            style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--black-5.svg&quot;) repeat"
        />

        <div class="relative z-10 max-w-6xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">Timeline</p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-4">
                    A Decade of <span class="text-sensus-red">Innovation</span>
                </h2>
                <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto">
                    Tracking our journey from the first competition in 2016 to our current focus on Parkinson's disease monitoring
                </p>
            </div>

            <div class="relative">
                <div class="hidden md:block absolute top-0 bottom-0 w-0.5 bg-sensus-gray-300" style="left: 107px" />

                <div class="space-y-6 md:space-y-8">
                    <div v-for="(event, index) in timelineEvents" :key="`${event.year}-${index}`" class="timeline-item relative">
                        <div class="hidden md:grid items-start" style="grid-template-columns: 80px 24px 1fr; gap: 16px">
                            <div
                                class="text-right pt-1"
                                :class="event.current ? 'text-sensus-red font-bold text-xl' : 'text-sensus-gray-700 font-bold text-lg'"
                            >
                                {{ event.year }}
                            </div>

                            <div class="relative flex justify-center pt-0.5">
                                <div
                                    v-if="event.current"
                                    class="absolute w-8 h-8 rounded-full animate-ping"
                                    :class="getColorClasses(event.color).dot"
                                    style="opacity: 0.4; margin-top: -4px"
                                />

                                <div
                                    class="w-4 h-4 rounded-full border-2 border-white shadow-md relative z-10"
                                    :class="getColorClasses(event.color).dot"
                                />
                            </div>

                            <div class="flex-1">
                                <div
                                    class="card-elevated p-6 md:p-8 border-l-4 relative"
                                    :class="[
                                        getColorClasses(event.color).border,
                                        event.current ? 'ring-2 ring-sensus-red/20' : '',
                                        event.milestone ? 'bg-gradient-to-br from-white to-sensus-gray-50' : '',
                                    ]"
                                >
                                    <div
                                        v-if="event.current"
                                        class="absolute -top-3 -right-3 bg-sensus-red text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                                    >
                                        Current
                                    </div>

                                    <div
                                        v-if="event.milestone"
                                        class="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full text-xs font-semibold"
                                        :class="[getColorClasses(event.color).bg, getColorClasses(event.color).text]"
                                    >
                                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                        Milestone
                                    </div>

                                    <h3 class="text-xl md:text-2xl font-bold text-sensus-gray-900 mb-3">
                                        {{ event.title }}
                                    </h3>

                                    <div
                                        v-if="event.biomarker"
                                        class="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg text-sm font-semibold"
                                        :class="[getColorClasses(event.color).bg, getColorClasses(event.color).text]"
                                    >
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                            />
                                        </svg>
                                        Biomarker: {{ event.biomarker }}
                                    </div>

                                    <p class="text-sensus-gray-600 leading-relaxed">
                                        {{ event.description }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="md:hidden">
                            <div
                                class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6 border-l-4 relative"
                                :class="[
                                    getColorClasses(event.color).border,
                                    event.current ? 'ring-2 ring-sensus-red/20' : '',
                                    event.milestone ? 'bg-gradient-to-br from-white to-sensus-gray-50' : '',
                                ]"
                            >
                                <div class="flex items-center justify-between mb-4">
                                    <div
                                        class="font-bold"
                                        :class="event.current ? 'text-sensus-red text-2xl' : 'text-sensus-gray-700 text-xl'"
                                    >
                                        {{ event.year }}
                                    </div>

                                    <div class="flex items-center gap-2">
                                        <div
                                            v-if="event.milestone"
                                            class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                                            :class="[getColorClasses(event.color).bg, getColorClasses(event.color).text]"
                                        >
                                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                            Milestone
                                        </div>

                                        <div
                                            v-if="event.current"
                                            class="bg-sensus-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
                                        >
                                            Current
                                        </div>
                                    </div>
                                </div>

                                <h3 class="text-lg font-bold text-sensus-gray-900 mb-3">
                                    {{ event.title }}
                                </h3>

                                <div
                                    v-if="event.biomarker"
                                    class="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg text-sm font-semibold"
                                    :class="[getColorClasses(event.color).bg, getColorClasses(event.color).text]"
                                >
                                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        />
                                    </svg>
                                    Biomarker: {{ event.biomarker }}
                                </div>

                                <p class="text-sensus-gray-600 leading-relaxed text-sm">
                                    {{ event.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-16">
                <div
                    class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sensus-blue via-sensus-blue to-sensus-teal p-8 md:p-12 shadow-xl"
                >
                    <div
                        class="absolute inset-0 opacity-10 pointer-events-none"
                        style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--black-5.svg&quot;) repeat"
                    />

                    <div class="relative z-10 text-center">
                        <h3 class="text-2xl md:text-3xl font-bold mb-4 text-white">Be Part of Our Journey</h3>
                        <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Join the next generation of innovators pushing the boundaries of biosensor technology
                        </p>
                        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <NuxtLink
                                to="/competition/theme-2026"
                                class="inline-flex items-center gap-2 bg-sensus-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-sensus-red/90 transition-all shadow-lg"
                            >
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Explore Theme 2026
                            </NuxtLink>
                            <NuxtLink
                                to="/competition/teams"
                                class="inline-flex items-center gap-2 bg-white text-sensus-blue px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all shadow-lg"
                            >
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                View Teams
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
