<script setup lang="ts">
interface Props {
    title: string;
    description: string;
    to: string;
    buttonText: string;
}

const props = defineProps<Props>();

const safeTo = computed(() => strapiLink(props.to));
const target = computed(() => (/^https?:/.test(safeTo.value) ? "_blank" : undefined));
</script>

<template>
    <div class="bg-sensus-gray-50 rounded-3xl p-8 md:p-12 text-center border border-sensus-gray-100">
        <div class="max-w-2xl mx-auto">
            <h3 class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">
                {{ title }}
            </h3>
            <p v-if="description" class="text-sensus-gray-600 text-lg mb-8 leading-relaxed">
                {{ description }}
            </p>
            <NuxtLink :to="safeTo" :target="target" :rel="target ? 'noopener noreferrer' : undefined" class="btn-primary inline-flex items-center gap-2">
                {{ buttonText }}
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>
