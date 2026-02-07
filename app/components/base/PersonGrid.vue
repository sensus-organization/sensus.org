<script setup lang="ts">
import type { Person } from "~/data/types";

interface Props {
    people: Person[];
    size?: "sm" | "md" | "lg";
    showRole?: boolean;
    showAffiliation?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    size: "md",
    showRole: true,
    showAffiliation: false,
});

const maxWidth = computed(() => {
    if (props.size === "sm") return "max-w-[200px]";
    if (props.size === "md") return "max-w-[300px]";
    return "max-w-[350px]";
});

const cardClass = (person: Person) => {
    const baseClass = "bg-white rounded-2xl border border-sensus-gray-200 overflow-hidden";
    const hasLink = !!person.link;

    if (props.size === "sm" && !hasLink) {
        return baseClass;
    }
    return `${baseClass} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1`;
};

const textSize = computed(() => {
    if (props.size === "sm") return { name: "text-sm", role: "text-xs", affiliation: "text-[10px]" };
    if (props.size === "md") return { name: "text-lg", role: "text-sm", affiliation: "text-sm" };
    return { name: "text-lg", role: "text-sm", affiliation: "text-sm" };
});
</script>

<template>
    <div class="flex flex-wrap justify-center gap-4 md:gap-6">
        <div
            v-for="person in people"
            :key="person.name"
            :class="['w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]', maxWidth]"
        >
            <component
                :is="person.link ? 'a' : 'div'"
                :href="person.link"
                target="_blank"
                rel="noopener noreferrer"
                :class="[cardClass(person), person.link ? 'block cursor-pointer' : '']"
            >
                <div class="relative w-full aspect-square overflow-hidden">
                    <img :src="person.image" :alt="person.name" class="w-full h-full object-cover" />
                </div>
                <div class="p-3 text-center">
                    <h3 :class="['font-bold text-sensus-gray-900 mb-1 leading-tight', textSize.name]">
                        {{ person.name }}
                    </h3>
                    <p v-if="showRole && person.role" :class="['text-sensus-red font-semibold uppercase tracking-wider', textSize.role]">
                        {{ person.role }}
                    </p>
                    <p
                        v-if="person.title && size !== 'sm'"
                        :class="['text-sensus-red font-semibold uppercase tracking-wider mb-3', textSize.role]"
                    >
                        {{ person.title }}
                    </p>
                    <p v-if="showAffiliation && person.affiliation" :class="['text-sensus-gray-600 leading-tight', textSize.affiliation]">
                        {{ person.affiliation }}
                    </p>
                    <p
                        v-if="!showAffiliation && !showRole && person.affiliation && size === 'sm'"
                        :class="['text-sensus-gray-600 leading-tight', textSize.affiliation]"
                    >
                        {{ person.affiliation }}
                    </p>
                </div>
            </component>
        </div>
    </div>
</template>
