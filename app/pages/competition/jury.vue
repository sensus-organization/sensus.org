<script setup lang="ts">
import { juryPageData } from "~/data/pages";
import { juryDepartments } from "~/data/jury";

const pageData = juryPageData;

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
                <div class="space-y-16">
                    <div v-for="dept in juryDepartments" :key="typeof dept.name === 'string' ? dept.name : dept.name.text">
                        <h3 class="text-5xl font-bold text-sensus-gray-900 mb-4 text-center">
                            <BaseHighlightedTitle :content="dept.name" />
                        </h3>
                        <p v-if="dept.description" class="text-sensus-gray-600 text-center max-w-3xl mx-auto mb-8">
                            {{ dept.description }}
                        </p>
                        <BasePersonGrid :people="dept.members" size="md" :show-affiliation="true" :show-role="false" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
