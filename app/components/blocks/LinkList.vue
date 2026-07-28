<script setup lang="ts">
import type { LinkItem } from "~/types/strapi";

interface Props {
    title?: string | null;
    description?: string | null;
    links?: LinkItem[] | null;
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();

const isExternal = (url?: string | null) => /^(https?:|mailto:|\/assets\/)/.test(url || "");
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h2 v-if="title" class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">
                {{ title }}
            </h2>
            <p v-if="description" class="text-sensus-gray-600 max-w-2xl mx-auto mb-8 whitespace-pre-line">
                {{ description }}
            </p>

            <div v-if="links?.length" class="flex flex-wrap justify-center gap-4">
                <template v-for="link in links" :key="link.url">
                    <a
                        v-if="isExternal(strapiLink(link.url))"
                        :href="strapiLink(link.url)"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-secondary inline-flex items-center gap-2"
                    >
                        {{ link.label }}
                    </a>
                    <NuxtLink v-else :to="strapiLink(link.url)" class="btn-secondary inline-flex items-center gap-2">
                        {{ link.label }}
                    </NuxtLink>
                </template>
            </div>
        </div>
    </section>
</template>
