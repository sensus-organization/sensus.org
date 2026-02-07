<script setup lang="ts">
import { contactPageData } from "~/data/pages";

const pageContent = contactPageData;

useHead({
    title: pageContent.header.title,
    meta: [
        {
            name: "description",
            content: pageContent.header.subtitle,
        },
    ],
});
</script>

<template>
    <div class="pt-32 pb-24 min-h-screen bg-sensus-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-12">
                <h1 class="heading-display text-4xl md:text-5xl text-sensus-gray-900 mb-4">
                    {{ pageContent.header.title }}
                </h1>
                <p class="text-xl text-sensus-gray-600 max-w-2xl">
                    {{ pageContent.header.subtitle }}
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col justify-center h-full"
                >
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-sensus-red/10 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-sensus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-sensus-gray-900">
                            {{ pageContent.general.title }}
                        </h2>
                    </div>

                    <div class="flex-1 flex flex-col justify-center">
                        <p class="text-sensus-gray-600 mb-2 text-sm">For all inquiries:</p>
                        <a
                            :href="`mailto:${pageContent.general.email}`"
                            class="text-lg md:text-xl font-bold text-sensus-red hover:underline decoration-2 underline-offset-4 break-all"
                        >
                            {{ pageContent.general.email }}
                        </a>
                    </div>
                </div>

                <div
                    class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col justify-center h-full"
                >
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-sensus-red/10 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-sensus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-sensus-gray-900">Legal Information</h2>
                    </div>

                    <div class="flex-1 flex flex-col justify-center">
                        <p class="font-semibold text-sensus-gray-900 mb-3">Stichting SensUs Organization</p>
                        <div class="space-y-2">
                            <div v-for="item in pageContent.general.legal" :key="item.label" class="flex items-center gap-3 text-sm">
                                <span class="text-sensus-gray-500 uppercase text-xs font-bold tracking-wider w-10">{{ item.label }}</span>
                                <span class="font-mono text-sensus-gray-900 bg-sensus-gray-50 px-2 py-1 rounded">{{ item.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 h-full"
                >
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-sensus-red/10 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-sensus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-sensus-gray-900">Visiting Address</h2>
                    </div>

                    <address class="not-italic text-sensus-gray-600 leading-relaxed text-sm mb-4">
                        <p v-for="(line, index) in pageContent.addresses.visiting.lines" :key="index">
                            {{ line }}
                        </p>
                    </address>

                    <a
                        href="https://maps.app.goo.gl/Wovgdm8xNzw6v8Ty8"
                        target="_blank"
                        class="inline-flex items-center gap-1.5 text-sm font-bold text-sensus-red hover:text-sensus-blue transition-colors"
                    >
                        Get Directions
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>

                <div
                    class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 h-full"
                >
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-sensus-red/10 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-sensus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-sensus-gray-900">Mailing Address</h2>
                    </div>

                    <address class="not-italic text-sensus-gray-600 leading-relaxed text-sm">
                        <p v-for="(line, index) in pageContent.addresses.shipping.lines" :key="index">
                            {{ line }}
                        </p>
                    </address>
                </div>

                <div
                    class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col h-full"
                >
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-sensus-red/10 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-sensus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-sensus-gray-900">Support Our Mission</h2>
                    </div>

                    <p class="text-sensus-gray-600 mb-6 text-sm leading-relaxed flex-1">
                        We invite you to support SensUs in our mission to advance biosensing technology for better healthcare. All donations
                        will go towards organizing of the competition, supporting innovative student projects, and raising awareness about
                        the critical role of biosensors in the lives of people. Every contribution, no matter the size, makes a significant
                        impact on our efforts to foster creativity and collaboration among participating students. Thank you for your
                        support!
                    </p>

                    <a
                        href="https://donorbox.org/donation-to-sensus"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block w-full bg-sensus-red text-white text-center py-3 rounded-xl text-sm font-bold hover:bg-sensus-red/90 transition-colors shadow-sm"
                    >
                        Donate Now via Donorbox
                    </a>
                </div>

                <div
                    class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col h-full"
                >
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-sensus-red/10 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-sensus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-sensus-gray-900">
                            {{ pageContent.bank.title }}
                        </h2>
                    </div>

                    <p class="text-sensus-gray-600 mb-6 text-sm">
                        {{ pageContent.bank.description }}
                    </p>

                    <div class="bg-sensus-gray-50 rounded-xl p-5 border border-sensus-gray-100 mt-auto">
                        <div class="space-y-3">
                            <div v-for="item in pageContent.bank.details" :key="item.label">
                                <p class="text-xs font-semibold text-sensus-gray-500 uppercase tracking-wider mb-1">
                                    {{ item.label }}
                                </p>
                                <p class="text-sensus-gray-900 font-medium font-mono text-sm break-all">
                                    {{ item.value }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 pt-8 border-t border-sensus-gray-200">
                <p class="text-center text-sm text-sensus-gray-500">
                    Developed by
                    <a
                        href="https://www.linkedin.com/in/kacper-golik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sensus-red hover:underline font-medium"
                        >Kacper Golik</a
                    >, desgined by
                    <a
                        href="https://www.linkedin.com/in/kacper-golik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sensus-red hover:underline font-medium"
                        >Jawad Al Mosawi</a
                    >
                    and
                    <a
                        href="https://www.linkedin.com/in/kacper-golik/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sensus-red hover:underline font-medium"
                        >Yanhang Luo</a
                    >
                </p>
            </div>
        </div>
    </div>
</template>
