<script setup lang="ts">
interface Props {
    title: string;
    description: string;
    to: string;
    buttonText: string;
    buttonIcon?: string;
}

defineProps<Props>();
</script>

<template>
    <div class="bg-sensus-gray-50 rounded-3xl p-8 md:p-12 text-center border border-sensus-gray-100">
        <div class="max-w-2xl mx-auto">
            <h3 class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">
                {{ title }}
            </h3>
            <p class="text-sensus-gray-600 text-lg mb-8 leading-relaxed">
                {{ description }}
            </p>
            <NuxtLink :to="to" class="btn-primary inline-flex items-center gap-2">
                <svg v-if="buttonIcon === 'arrow'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <svg v-else-if="buttonIcon === 'email'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
                {{ buttonText }}
                <svg v-if="!buttonIcon" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>
