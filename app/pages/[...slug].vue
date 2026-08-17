<script setup lang="ts">
import type { Component } from "vue";
import type { Page, PageSection } from "~/types/strapi";
import {
    BlocksSectionHeader,
    BlocksRichText,
    BlocksFeature,
    BlocksCta,
    BlocksVideo,
    BlocksEmbed,
    BlocksImage,
    BlocksSchedule,
    BlocksLinkList,
    BlocksCardList,
    BlocksPersonGrid,
    BlocksOrganization,
    BlocksLogoGrid,
    BlocksTeamGrid,
    BlocksWorldMap,
    BlocksTimeline,
    BlocksArchiveHub,
} from "#components";

const route = useRoute();
const slug = computed(() => {
    const value = route.params.slug;
    return Array.isArray(value) ? value.join("/") : value || "";
});

const { data: page } = await useAsyncData(`page:${slug.value}`, () =>
    strapiFetch<Page[]>("pages", {
        filters: { slug: { $eq: slug.value } },
        populate: PAGE_POPULATE,
        pagination: { pageSize: 1 },
    }),
);

const pageData = computed(() => page.value?.[0] ?? null);

if (!pageData.value) {
    throw createError({ statusCode: 404, statusMessage: "Page Not Found", fatal: true });
}

useSeoMeta({
    title: () => metaText(pageData.value?.seo?.metaTitle || pageData.value?.title),
    description: () => metaText(pageData.value?.seo?.metaDescription),
});

const heroImage = computed(() => strapiMedia(pageData.value?.hero?.image));

const blockMap: Record<string, Component> = {
    "blocks.section-header": BlocksSectionHeader,
    "blocks.rich-text": BlocksRichText,
    "blocks.feature": BlocksFeature,
    "blocks.cta": BlocksCta,
    "blocks.video": BlocksVideo,
    "blocks.embed": BlocksEmbed,
    "blocks.image": BlocksImage,
    "blocks.schedule": BlocksSchedule,
    "blocks.link-list": BlocksLinkList,
    "blocks.card-list": BlocksCardList,
    "blocks.person-grid": BlocksPersonGrid,
    "blocks.organization": BlocksOrganization,
    "blocks.logo-grid": BlocksLogoGrid,
    "blocks.team-grid": BlocksTeamGrid,
    "blocks.world-map": BlocksWorldMap,
    "blocks.timeline": BlocksTimeline,
    "blocks.archive-hub": BlocksArchiveHub,
};

const blockFor = (name: string) => (Object.hasOwn(blockMap, name) ? blockMap[name] : undefined);

const sectionGroups = computed(() => {
    const groups: PageSection[][] = [];
    let previous: PageSection | undefined;
    for (const section of pageData.value?.sections || []) {
        if (!groups.length || previous?.__component !== "blocks.section-header") groups.push([]);
        groups[groups.length - 1]!.push(section);
        previous = section;
    }
    return groups;
});
</script>

<template>
    <div class="bg-white">
        <BasePageHero
            v-if="pageData?.hero"
            :badge="pageData.hero.badge || undefined"
            :title="pageData.hero.title || pageData.title"
            :subtitle="pageData.hero.subtitle || undefined"
            :image="heroImage"
        />
        <div v-else class="pt-32" />

        <div
            v-for="(group, groupIndex) in sectionGroups"
            :key="`group-${group[0]?.__component}-${group[0]?.id}`"
            :class="groupIndex % 2 === 1 ? 'bg-sensus-tint' : 'bg-white'"
        >
            <template v-for="section in group" :key="`${section.__component}-${section.id}`">
                <component :is="blockFor(section.__component)" v-if="blockFor(section.__component)" v-bind="section" />
            </template>
        </div>
    </div>
</template>
