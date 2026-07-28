<script setup lang="ts">
import type { HighlightedText, StrapiBlocks, LinkItem, StrapiMedia } from "~/types/strapi";

interface Props {
    tagline?: string | null;
    title?: HighlightedText | null;
    body?: StrapiBlocks | null;
    callout?: string | null;
    link?: LinkItem | null;
    image?: StrapiMedia | null;
    reverse?: boolean | null;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const imageUrl = computed(() => strapiMedia(props.image));
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-5xl mx-auto px-6">
            <div class="bg-sensus-gray-50 rounded-2xl border border-sensus-gray-200 overflow-hidden">
                <div class="flex flex-col md:flex-row" :class="{ 'md:flex-row-reverse': reverse }">
                    <div v-if="imageUrl" class="md:w-2/5 h-48 md:h-auto min-h-[250px]">
                        <img :src="imageUrl" :alt="image?.alternativeText || ''" class="w-full h-full object-cover" />
                    </div>

                    <div class="p-6 md:p-8" :class="imageUrl ? 'md:w-3/5' : 'w-full'">
                        <p v-if="tagline" class="text-sensus-red font-semibold text-sm uppercase tracking-wider mb-2">
                            {{ tagline }}
                        </p>
                        <h2 v-if="title" class="text-2xl font-bold text-sensus-gray-900 mb-4">
                            <BaseHighlightedTitle :content="title" />
                        </h2>

                        <div v-if="body?.length" class="text-sensus-gray-600">
                            <BaseBlocksRenderer :content="body" />
                        </div>

                        <div v-if="callout" class="mt-6 bg-white p-4 rounded-xl border-l-4 border-sensus-teal">
                            <p class="font-bold text-sensus-gray-900 uppercase tracking-wider text-sm">
                                {{ callout }}
                            </p>
                        </div>

                        <div v-if="link" class="mt-6">
                            <NuxtLink
                                :to="strapiLink(link.url)"
                                class="inline-flex items-center gap-2 text-sensus-red font-semibold hover:gap-4 transition-all"
                            >
                                {{ link.label }}
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
