<script setup lang="ts">
import type { HighlightedText } from "~/types/strapi";

interface Props {
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();
</script>

<template>
    <section class="pt-12 md:pt-16 pb-0">
        <div class="max-w-4xl mx-auto px-6">
            <BaseSectionHeader v-if="title" :label="label" :title="title" :description="description" />
        </div>
    </section>
</template>
