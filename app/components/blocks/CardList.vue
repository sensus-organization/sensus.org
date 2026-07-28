<script setup lang="ts">
import { NuxtLink } from "#components";
import type { CardItem } from "~/types/strapi";

interface Props {
    title?: string | null;
    layout?: "grid" | "numbered";
    cards?: CardItem[] | null;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const lastRowStart = computed(() => {
    const total = props.cards?.length || 0;
    return total > 3 && total % 3 === 1 ? total - 2 : -1;
});

const items = computed(() => (props.cards || []).map((card) => ({ ...card, url: strapiLink(card.url) })));

const accent = (color?: string | null) => {
    const map: Record<string, { bg: string; text: string }> = {
        "sensus-red": { bg: "bg-sensus-red", text: "text-sensus-red" },
        "sensus-teal": { bg: "bg-sensus-teal", text: "text-sensus-teal" },
        "sensus-blue": { bg: "bg-sensus-blue", text: "text-sensus-blue" },
        "sensus-orange": { bg: "bg-sensus-orange", text: "text-sensus-orange" },
        "sensus-green": { bg: "bg-sensus-green", text: "text-sensus-green" },
    };
    return map[color && Object.hasOwn(map, color) ? color : "sensus-red"];
};

const detailList = (details?: string | null) =>
    details ? details.split("\n").map((d) => d.trim()).filter(Boolean) : [];

const isExternal = (url?: string | null) => /^(https?:|mailto:|\/assets\/)/.test(url || "");
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-6xl mx-auto px-6">
            <div v-if="title" class="text-center mb-8">
                <h2 class="heading-section text-2xl md:text-3xl text-sensus-gray-900">
                    {{ title }}
                </h2>
            </div>

            <div v-if="layout === 'numbered'" class="space-y-8 max-w-4xl mx-auto">
                <div v-for="(card, index) in cards || []" :key="card.id ?? index" class="relative pl-16">
                    <div
                        class="absolute left-0 top-0 w-10 h-10 rounded-full bg-sensus-red text-white font-bold flex items-center justify-center text-lg"
                    >
                        {{ index + 1 }}
                    </div>
                    <div
                        v-if="index < (cards?.length || 0) - 1"
                        class="absolute left-5 top-12 w-0.5 h-full bg-sensus-gray-200 -translate-x-1/2"
                    />

                    <div class="bg-sensus-gray-50 rounded-2xl p-6 border border-sensus-gray-200">
                        <h3 class="text-xl font-bold text-sensus-gray-900 mb-3">
                            {{ card.title }}
                        </h3>
                        <p v-if="card.description" class="text-sensus-gray-600 mb-4">
                            {{ card.description }}
                        </p>
                        <ul v-if="detailList(card.details).length" class="list-disc pl-6 space-y-2 text-sensus-gray-600 mb-4">
                            <li v-for="(detail, i) in detailList(card.details)" :key="i">
                                {{ detail }}
                            </li>
                        </ul>
                        <p v-if="card.subtitle" class="text-sensus-red font-semibold">
                            {{ card.subtitle }}
                        </p>
                    </div>
                </div>
            </div>

            <div v-else class="flex flex-wrap justify-center gap-8">
                <template v-for="(card, index) in items" :key="card.id ?? index">
                    <div v-if="index === lastRowStart" class="hidden lg:block basis-full h-0" aria-hidden="true" />
                    <component
                        :is="card.url ? (isExternal(card.url) ? 'a' : NuxtLink) : 'div'"
                        :href="card.url && isExternal(card.url) ? card.url : undefined"
                        :to="card.url && !isExternal(card.url) ? card.url : undefined"
                        :target="card.url && isExternal(card.url) ? '_blank' : undefined"
                        :rel="card.url && isExternal(card.url) ? 'noopener noreferrer' : undefined"
                        class="group bg-white rounded-2xl border border-sensus-gray-200 shadow-sm overflow-hidden flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
                        :class="card.url ? 'cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''"
                    >
                        <div v-if="strapiMedia(card.image)" class="relative h-48 overflow-hidden">
                            <img
                                :src="strapiMedia(card.image)"
                                :alt="card.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div
                                v-if="card.icon"
                                class="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                                :class="accent(card.color).bg"
                            >
                                <UIcon :name="card.icon" class="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div v-else-if="card.icon" class="p-6 pb-0">
                            <div class="w-12 h-12 rounded-xl flex items-center justify-center" :class="accent(card.color).bg">
                                <UIcon :name="card.icon" class="w-6 h-6 text-white" />
                            </div>
                        </div>

                        <div class="p-6 flex flex-col flex-1">
                            <p
                                v-if="card.subtitle"
                                class="text-sm font-semibold uppercase tracking-wider mb-1"
                                :class="accent(card.color).text"
                            >
                                {{ card.subtitle }}
                            </p>
                            <h3 class="text-xl font-bold text-sensus-gray-900 mb-3">
                                {{ card.title }}
                            </h3>
                            <p v-if="card.description" class="text-sensus-gray-600 text-sm mb-4">
                                {{ card.description }}
                            </p>
                            <ul
                                v-if="detailList(card.details).length"
                                class="list-disc pl-5 space-y-1 text-sensus-gray-600 text-sm mb-4"
                            >
                                <li v-for="(detail, i) in detailList(card.details)" :key="i">
                                    {{ detail }}
                                </li>
                            </ul>
                            <div
                                v-if="card.url"
                                class="mt-auto flex items-center gap-2 font-semibold transition-all group-hover:gap-4"
                                :class="accent(card.color).text"
                            >
                                Learn more
                                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </component>
                </template>
            </div>
        </div>
    </section>
</template>
