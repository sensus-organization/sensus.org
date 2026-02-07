<script setup lang="ts">
import { highSchoolsData } from "~/data/home";
</script>

<template>
    <section class="py-24 md:py-32 bg-sensus-gray-50 relative overflow-hidden">
        <div
            class="absolute inset-0 opacity-30 pointer-events-none"
            style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--black-5.svg&quot;) repeat"
        />

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div class="relative">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-2">
                            <img
                                :src="highSchoolsData.images[0]"
                                alt="High school students in lab"
                                class="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        <div>
                            <img
                                :src="highSchoolsData.images[1]"
                                alt="Students learning"
                                class="w-full h-32 md:h-40 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        <div>
                            <img
                                :src="highSchoolsData.images[2]"
                                alt="Science education"
                                class="w-full h-32 md:h-40 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>

                    <div class="absolute -top-4 -left-4 bg-sensus-red text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                        STEM Education
                    </div>
                </div>

                <div>
                    <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-4">
                        {{ highSchoolsData.title }}
                    </h2>
                    <p class="text-sensus-blue font-semibold text-lg mb-6">
                        {{ highSchoolsData.subtitle }}
                    </p>
                    <p class="text-sensus-gray-600 mb-8 leading-relaxed">
                        {{ highSchoolsData.description }}
                    </p>

                    <ul class="space-y-3 mb-8">
                        <li v-for="benefit in highSchoolsData.benefits" :key="benefit" class="flex items-start gap-4 list-none">
                            <span class="w-2 h-2 rounded-full bg-sensus-red mt-2.5 shrink-0 block" />
                            <span class="text-sensus-gray-700">{{ benefit }}</span>
                        </li>
                    </ul>

                    <NuxtLink to="/competition/high-schools" class="btn-glass-light">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                        Learn About High Schools Program
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
