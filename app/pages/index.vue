<script setup lang="ts">
import type { Home } from "~/types/strapi";

const { data: home } = await useAsyncData("home", () => strapiFetch<Home>("home", { populate: HOME_POPULATE }));
const { data: edition } = await useCurrentEdition({ thumbnail: true });

useSeoMeta({
    title: () => metaText(home.value?.seo?.metaTitle),
    description: () => metaText(home.value?.seo?.metaDescription),
});
</script>

<template>
    <div>
        <SectionsHomeHero v-if="home?.hero" :hero="home.hero" />
        <SectionsHomeAbout v-if="home?.about" :about="home.about" />
        <SectionsHomeMission v-if="home?.mission" :mission="home.mission" />
        <SectionsHomeTeams v-if="home?.teamsSection" :teams-section="home.teamsSection" />
        <SectionsHomeTheme v-if="edition?.description || edition?.videoUrl" :edition="edition" />
        <SectionsHomeSymposium v-if="home?.symposium" :symposium="home.symposium" />
        <SectionsHomeHighSchools v-if="home?.highSchools" :high-schools="home.highSchools" />
        <SectionsHomePartners v-if="home?.partners?.length" :partners="home.partners" />
    </div>
</template>
