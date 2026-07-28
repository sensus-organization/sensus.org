<script setup lang="ts">
import type { StrapiMedia } from "~/types/strapi";

interface Props {
    videoUrl: string;
    thumbnail?: StrapiMedia | null;
    caption?: string | null;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const thumbUrl = computed(() => strapiMedia(props.thumbnail));
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-4xl mx-auto px-6">
            <BaseVideoThumbnail :video-url="videoUrl" :thumbnail-url="thumbUrl || undefined" :alt="caption || 'Video'" />
            <p v-if="caption" class="text-center text-sensus-gray-600 mt-4">
                {{ caption }}
            </p>
        </div>
    </section>
</template>
