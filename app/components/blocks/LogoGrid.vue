<script setup lang="ts">
import type { Partner } from "~/types/strapi";

interface Props {
    title?: string | null;
    columns?: number | null;
    partners?: Partner[] | null;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const mappedPartners = computed(() =>
    (props.partners || []).map((partner) => ({
        name: partner.name,
        logo: strapiMedia(partner.logo),
        url: partner.url || "#",
    })),
);
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6">
            <div v-if="title" class="text-center mb-12">
                <h2 class="heading-section text-3xl md:text-4xl text-sensus-gray-900">
                    {{ title }}
                </h2>
            </div>
            <BaseLogoGrid :items="mappedPartners" :columns="columns || 4" />
        </div>
    </section>
</template>
