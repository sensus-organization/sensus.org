<script setup lang="ts">
import { partnersPageData } from "~/data/pages";
import { partnersHeader, partners, affiliatesHeader, affiliates } from "~/data/partners";

const pageData = partnersPageData;

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

        <section class="py-20 md:py-32 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <BaseSectionHeader :label="partnersHeader.label" :title="partnersHeader.title" :description="partnersHeader.description" />

                <div class="mt-12">
                    <BaseLogoGrid :items="partners" :columns="4" />
                </div>
            </div>

            <div class="max-w-5xl mx-auto px-6 mt-12">
                <BaseSectionCta
                    :title="pageData.ctaMiddle.title"
                    :description="pageData.ctaMiddle.description"
                    :to="pageData.ctaMiddle.to"
                    :button-text="pageData.ctaMiddle.buttonText"
                />
            </div>
        </section>

        <section class="py-20 md:py-32 bg-sensus-gray-50">
            <div class="max-w-7xl mx-auto px-6">
                <BaseSectionHeader
                    :label="affiliatesHeader.label"
                    :title="affiliatesHeader.title"
                    :description="affiliatesHeader.description"
                />

                <div class="mt-12">
                    <BaseLogoGrid :items="affiliates" :columns="5" />
                </div>
            </div>
        </section>
    </div>
</template>
