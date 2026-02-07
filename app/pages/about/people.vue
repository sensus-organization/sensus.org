<script setup lang="ts">
import { peoplePageData } from "~/data/pages";
import { organizationHeader, departments, advisoryBoardHeader, advisoryBoard, committeeHeader, committee } from "~/data/people";

const pageData = peoplePageData;

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
                <BaseSectionHeader
                    :label="organizationHeader.label"
                    :title="organizationHeader.title"
                    :description="organizationHeader.description"
                />
                <div v-for="dept in departments" :key="typeof dept.name === 'string' ? dept.name : dept.name.text" class="mt-16">
                    <h3 class="text-3xl font-bold text-sensus-gray-900 mb-6 text-center">
                        {{ dept.name }}
                    </h3>
                    <BasePersonGrid :people="dept.members" size="sm" :show-role="true" />
                </div>

                <div class="mt-16">
                    <BaseSectionCta
                        :title="pageData.cta.title"
                        :description="pageData.cta.description"
                        :button-text="pageData.cta.buttonText"
                        :to="pageData.cta.to"
                    />
                </div>
            </div>
        </section>

        <section class="py-20 md:py-32 bg-sensus-gray-50">
            <div class="max-w-7xl mx-auto px-6">
                <BaseSectionHeader
                    :label="advisoryBoardHeader.label"
                    :title="advisoryBoardHeader.title"
                    :description="advisoryBoardHeader.description"
                />

                <div class="mt-12">
                    <BasePersonGrid :people="advisoryBoard" size="lg" :show-affiliation="true" />
                </div>
            </div>
        </section>

        <section class="py-20 md:py-32 bg-white">
            <div class="max-w-7xl mx-auto px-6">
                <BaseSectionHeader
                    :label="committeeHeader.label"
                    :title="committeeHeader.title"
                    :description="committeeHeader.description"
                />

                <div class="mt-12">
                    <BasePersonGrid :people="committee" size="sm" :show-affiliation="true" />
                </div>
            </div>
        </section>
    </div>
</template>
