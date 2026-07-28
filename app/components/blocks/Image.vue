<script setup lang="ts">
import type { StrapiMedia } from "~/types/strapi";

interface Props {
    image?: StrapiMedia | null;
    caption?: string | null;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const imageUrl = computed(() => strapiMedia(props.image));
</script>

<template>
    <section v-if="imageUrl" class="py-12 md:py-16">
        <div class="max-w-4xl mx-auto px-6">
            <div class="rounded-2xl overflow-hidden border border-sensus-gray-200 shadow-lg">
                <img :src="imageUrl" :alt="image?.alternativeText || caption || ''" class="w-full" />
            </div>
            <p v-if="caption" class="text-center text-sensus-gray-600 mt-4 text-sm">
                {{ caption }}
            </p>
        </div>
    </section>
</template>
