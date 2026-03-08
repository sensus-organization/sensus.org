<script setup lang="ts">
useHead({
    title: "Regulations",
    meta: [
        {
            name: "description",
            content: "SensUs competition regulations and privacy policy documents.",
        },
    ],
});
</script>

<template>
    <div class="pt-32 pb-24 bg-sensus-gray-50 flex-1">
        <div class="max-w-7xl mx-auto px-6">
            <div class="mb-12">
                <h1 class="heading-display text-4xl md:text-5xl text-sensus-gray-900 mb-4">
                    Regulations
                </h1>
                <p class="text-xl text-sensus-gray-600 max-w-2xl">
                    Review our competition regulations and privacy policy.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                    href="/assets/docs/regulations.pdf"
                    target="_blank"
                    class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col h-full group"
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
                        <h2 class="text-xl font-bold text-sensus-gray-900">Competition Regulations</h2>
                    </div>

                    <p class="text-sensus-gray-600 text-sm leading-relaxed mb-6 flex-1">
                        The official rules and regulations governing the SensUs competition, including team requirements, submission guidelines, and judging criteria.
                    </p>

                    <div class="inline-flex items-center gap-1.5 text-sm font-bold text-sensus-red group-hover:text-sensus-blue transition-colors">
                        View Regulations PDF
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </div>
                </a>

                <a
                    href="/assets/docs/privacy.pdf"
                    target="_blank"
                    class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 md:p-10 flex flex-col h-full group"
                >
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 rounded-xl bg-sensus-red/10 flex items-center justify-center shrink-0">
                            <svg class="w-5 h-5 text-sensus-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-sensus-gray-900">Privacy Policy</h2>
                    </div>

                    <p class="text-sensus-gray-600 text-sm leading-relaxed mb-6 flex-1">
                        Our privacy policy outlines how SensUs collects, uses, and protects your personal information in accordance with applicable data protection regulations.
                    </p>

                    <div class="inline-flex items-center gap-1.5 text-sm font-bold text-sensus-red group-hover:text-sensus-blue transition-colors">
                        View Privacy Policy PDF
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
