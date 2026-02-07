<script setup lang="ts">
import { teamsPageData } from "~/data/pages";

const pageData = teamsPageData;

useHead({
    title: pageData.meta.title,
    meta: [
        {
            name: "description",
            content: pageData.meta.description,
        },
    ],
});
</script>

<template>
    <div>
        <BasePageHero
            :badge="pageData.hero.badge"
            :title="pageData.hero.title"
            :subtitle="pageData.hero.subtitle"
            :image="pageData.hero.image"
        />
        <SectionsTeamsGrid />
    </div>
</template>
