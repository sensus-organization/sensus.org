<script setup lang="ts">
import { memberPageData } from "~/data/pages";
import { memberDepartments, memberRecruitmentVideo } from "~/data/join";

const pageData = memberPageData;

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
    <div class="bg-white">
        <BasePageHero
            :badge="pageData.hero.badge"
            :title="pageData.hero.title"
            :subtitle="pageData.hero.subtitle"
            :image="pageData.hero.image"
        />

        <div class="max-w-5xl mx-auto px-6 py-20 md:py-32">
            <div class="text-center mb-16">
                <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">
                    {{ pageData.introSection.label }}
                </p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-4">
                    <BaseHighlightedTitle :content="pageData.introSection.title" />
                </h2>
                <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto text-balance">
                    {{ pageData.introSection.description }}
                </p>
            </div>

            <!-- <div class="mb-16">
                <p class="text-sensus-gray-700 text-lg text-center max-w-3xl mx-auto mb-8 [&_a]:text-sensus-red [&_a]:font-medium [&_a]:underline" v-html="pageData.joinPaths.description" />
                <div class="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div
                        v-for="item in pageData.joinPaths.items"
                        :key="item.title"
                        class="bg-sensus-gray-50 rounded-2xl border border-sensus-gray-200 p-6 text-center"
                    >
                        <h3 class="text-xl font-bold text-sensus-gray-900 mb-4">
                            {{ item.title }}
                        </h3>
                        <a
                            :href="item.applyLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn-primary inline-block"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div> -->

            <div class="space-y-8">
                <div
                    v-for="(dept, index) in memberDepartments"
                    :key="dept.name"
                    class="bg-sensus-gray-50 rounded-2xl border border-sensus-gray-200 overflow-hidden"
                >
                    <div class="flex flex-col md:flex-row" :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
                        <div class="md:w-2/5 h-48 md:h-auto">
                            <img :src="dept.image" :alt="dept.name + ' department'" class="w-full h-full object-cover" />
                        </div>

                        <div class="md:w-3/5 p-6 md:p-8">
                            <div class="flex items-start gap-4 mb-4">
                                <div class="w-12 h-12 rounded-xl bg-sensus-red flex items-center justify-center shrink-0">
                                    <svg
                                        v-if="dept.icon === 'crown'"
                                        class="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 3l3.5 6L12 3l3.5 6L19 3v18H5V3z"
                                        />
                                    </svg>
                                    <svg
                                        v-if="dept.icon === 'calendar'"
                                        class="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <svg
                                        v-if="dept.icon === 'briefcase'"
                                        class="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <svg
                                        v-if="dept.icon === 'megaphone'"
                                        class="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                                        />
                                    </svg>
                                    <svg
                                        v-if="dept.icon === 'beaker'"
                                        class="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-sensus-red font-semibold text-sm uppercase tracking-wider mb-1">
                                        {{ dept.tagline }}
                                    </p>
                                    <h3 class="text-2xl font-bold text-sensus-gray-900">
                                        {{ dept.name }}
                                    </h3>
                                </div>
                            </div>

                            <p class="text-sensus-gray-600 mb-4">
                                {{ dept.description }}
                            </p>

                            <div v-if="dept.roles" class="flex flex-wrap gap-2">
                                <span
                                    v-for="role in dept.roles"
                                    :key="role"
                                    class="px-3 py-1 bg-sensus-red/10 text-sensus-red text-sm font-medium rounded-full"
                                >
                                    {{ role }}
                                </span>
                            </div>

                            <ul v-if="dept.tasks" class="list-disc pl-6 space-y-1 text-sensus-gray-600">
                                <li v-for="(task, taskIndex) in dept.tasks" :key="taskIndex">
                                    {{ task }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-20">
                <div class="text-center mb-8">
                    <h2 class="heading-section text-3xl md:text-4xl text-sensus-gray-900 mb-4">
                        <BaseHighlightedTitle :content="pageData.videoSection.title" />
                    </h2>
                    <p class="text-sensus-gray-600 text-lg max-w-2xl mx-auto">
                        {{ pageData.videoSection.description }}
                    </p>
                </div>

                <BaseVideoThumbnail
                    :video-url="memberRecruitmentVideo.url"
                    :thumbnail-url="memberRecruitmentVideo.thumbnail"
                    alt="SensUs Recruitment Video"
                    class="mb-12"
                />

                <div class="bg-sensus-red text-white rounded-2xl p-8 md:p-12">
                    <div class="grid md:grid-cols-3 gap-8 text-center">
                        <div v-for="benefit in pageData.benefits" :key="benefit.title">
                            <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        v-if="benefit.icon === 'lightning'"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                    <path
                                        v-else-if="benefit.icon === 'globe'"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                    />
                                    <path
                                        v-else
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                            <h4 class="font-bold text-lg mb-2">
                                {{ benefit.title }}
                            </h4>
                            <p class="text-white/80 text-sm">
                                {{ benefit.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="prose prose-lg prose-sensus max-w-none text-sensus-gray-700 leading-relaxed mt-16">
                <p
                    v-for="(text, index) in pageData.introText"
                    :key="index"
                    :class="{
                        'font-semibold text-sensus-gray-900': index === 1,
                    }"
                >
                    {{ text }}
                </p>
            </div>

            <div class="mt-12">
                <BaseSectionCta :title="pageData.cta.title" :to="pageData.cta.to" :button-text="pageData.cta.buttonText" />
            </div>
        </div>
    </div>
</template>
