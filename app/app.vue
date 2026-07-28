<script setup lang="ts">
import type { Global } from "~/types/strapi";

const global = useState<Global | null>("global", () => null);

const { data } = await useAsyncData("global", () => strapiFetch<Global>("global", { populate: GLOBAL_POPULATE }));
global.value = data.value;

useHead({
    titleTemplate: (title) => (title ? title : metaText(global.value?.seo?.metaTitle) || "SensUs"),
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
