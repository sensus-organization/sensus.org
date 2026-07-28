<script setup lang="ts">
import type { Edition, Team } from "~/types/strapi";

const route = useRoute();
const year = computed(() => Number(route.params.year));

const { data: edition } = await useAsyncData(`edition:${year.value}`, () =>
    strapiFetch<Edition[]>("editions", {
        filters: { year: { $eq: year.value } },
        populate: EDITION_POPULATE,
        pagination: { pageSize: 1 },
    }),
);

const editionData = computed(() => edition.value?.[0] ?? null);

if (!editionData.value) {
    throw createError({ statusCode: 404, statusMessage: "Edition Not Found", fatal: true });
}

const { data: teams } = await useAsyncData(`edition-teams:${year.value}`, () =>
    strapiFetch<Team[]>("teams", {
        filters: { year: { $eq: year.value } },
        populate: { image: true, trd: true },
        pagination: { pageSize: 100 },
        sort: "name:asc",
    }),
);

const teamList = computed(() => teams.value || []);
const teamsHaveImages = computed(() => teamList.value.some((team) => strapiMedia(team.image)));

const orgGroups = computed(() => (editionData.value?.orgGroups || []).filter((group) => group.members?.length));

const mappedMembers = (members: NonNullable<NonNullable<Edition["orgGroups"]>[number]["members"]>) =>
    members.map((member) => ({
        name: member.name,
        role: member.role || undefined,
        image: strapiMedia(member.photo),
        link: member.link || undefined,
    }));

useSeoMeta({
    title: () => `SensUs ${year.value} Archive`,
});
</script>

<template>
    <div v-if="editionData" class="bg-white">
        <section
            class="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-sensus-blue via-sensus-blue to-sensus-teal overflow-hidden"
        >
            <div
                class="absolute inset-0 opacity-10 pointer-events-none"
                style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--black-5.svg&quot;) repeat"
            />
            <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <NuxtLink
                    to="/competition/archive"
                    class="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-6"
                >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Archive
                </NuxtLink>
                <h1 class="heading-display text-4xl md:text-6xl text-white mb-4">SensUs {{ year }}</h1>
                <p v-if="editionData.title" class="text-white/90 text-xl md:text-2xl font-medium">
                    {{ editionData.title }}
                </p>
                <p v-if="editionData.biomarker" class="text-white/70 mt-3">Biomarker: {{ editionData.biomarker }}</p>
            </div>
        </section>

        <section v-if="editionData.themeContent?.length" class="py-16 md:py-24">
            <div class="max-w-4xl mx-auto px-6">
                <BaseSectionHeader :title="{ text: 'The Theme', highlight: 'Theme' }" />
                <BaseBlocksRenderer :content="editionData.themeContent" />
            </div>
        </section>

        <section v-if="editionData.links?.length" class="py-12">
            <div class="max-w-4xl mx-auto px-6">
                <div class="flex flex-wrap justify-center gap-3">
                    <a
                        v-for="link in editionData.links"
                        :key="link.url"
                        :href="strapiLink(link.url)"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-glass-light rounded-full text-sm"
                    >
                        {{ link.label }}
                    </a>
                </div>
            </div>
        </section>

        <section v-if="editionData.results?.length" class="py-16 md:py-24 bg-sensus-gray-50">
            <div class="max-w-7xl mx-auto px-6">
                <BaseSectionHeader :title="{ text: 'Results', highlight: 'Results' }" />
                <BaseResultsTable :results="editionData.results" :year="year" />
            </div>
        </section>

        <section v-if="teamList.length" class="py-16 md:py-24">
            <div class="max-w-7xl mx-auto px-6">
                <BaseSectionHeader :title="{ text: 'The Teams', highlight: 'Teams' }" />

                <div v-if="teamsHaveImages" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div
                        v-for="team in teamList"
                        :key="team.id"
                        class="bg-white rounded-2xl border border-sensus-gray-200 shadow-sm overflow-hidden"
                    >
                        <div class="relative aspect-[3/2] overflow-hidden" :class="strapiMedia(team.image) ? '' : 'bg-sensus-gray-100'">
                            <img
                                v-if="strapiMedia(team.image)"
                                :src="strapiMedia(team.image)"
                                :alt="team.name"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="p-5">
                            <h3 class="font-bold text-lg text-sensus-gray-900 mb-1">{{ team.name }}</h3>
                            <p v-if="team.university" class="text-sm text-sensus-gray-600 leading-snug mb-3">
                                {{ team.university }}
                            </p>
                            <a
                                v-if="strapiMedia(team.trd)"
                                :href="strapiMedia(team.trd)"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn-glass-light rounded-full text-sm"
                            >
                                {{ year === 2016 ? "Poster" : "TRD" }}
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <ul v-else class="max-w-3xl mx-auto divide-y divide-sensus-gray-200 rounded-3xl border border-sensus-gray-200 overflow-hidden">
                    <li v-for="team in teamList" :key="team.id" class="flex items-center justify-between gap-4 p-4">
                        <span class="font-semibold text-sensus-gray-900">{{ team.name }}</span>
                        <a
                            v-if="strapiMedia(team.trd)"
                            :href="strapiMedia(team.trd)"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-1.5 text-sm font-semibold text-sensus-red hover:underline shrink-0"
                        >
                            {{ year === 2016 ? "Poster" : "TRD" }}
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </section>

        <section
            v-if="editionData.orgIntro || orgGroups.length"
            id="organization"
            class="py-16 md:py-24 bg-sensus-gray-50 scroll-mt-24"
        >
            <div class="max-w-7xl mx-auto px-6">
                <BaseSectionHeader :title="{ text: 'The Organization', highlight: 'Organization' }" />
                <p v-if="editionData.orgIntro" class="text-lg text-sensus-gray-600 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
                    {{ editionData.orgIntro }}
                </p>
                <div class="space-y-12">
                    <div v-for="group in orgGroups" :key="group.id ?? group.name">
                        <h3 class="heading-section text-xl md:text-2xl text-sensus-gray-900 text-center mb-8">
                            {{ group.name }}
                        </h3>
                        <BasePersonGrid :people="mappedMembers(group.members || [])" size="sm" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
