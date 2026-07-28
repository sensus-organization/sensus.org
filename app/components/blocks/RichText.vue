<script setup lang="ts">
import type { StrapiBlocks } from "~/types/strapi";

interface Props {
    body?: StrapiBlocks | null;
    variant?: "default" | "callout";
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();
</script>

<template>
    <section v-if="body?.length" class="py-12 md:py-16">
        <div class="max-w-4xl mx-auto px-6">
            <div :class="variant === 'callout' ? 'bg-sensus-gray-50 p-8 rounded-2xl border-l-4 border-sensus-red' : ''">
                <BaseBlocksRenderer :content="body" />
            </div>
        </div>
    </section>
</template>
