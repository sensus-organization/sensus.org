<script setup lang="ts">
import type { HighlightedText } from "~/data/types";

interface Props {
    label?: string;
    title: HighlightedText | string;
    description?: string;
}

defineProps<Props>();
</script>

<template>
    <div class="text-center mb-16">
        <p v-if="label" class="text-sensus-red font-medium text-sm uppercase tracking-widest mb-3">
            {{ label }}
        </p>
        <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-6">
            <BaseHighlightedTitle :content="title" />
        </h2>
        <p v-if="description" class="text-lg text-sensus-gray-600 max-w-4xl mx-auto leading-relaxed">
            {{ description }}
        </p>
    </div>
</template>
