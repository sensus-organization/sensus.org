<script setup lang="ts">
import type { HighlightedText, Person } from "~/types/strapi";

interface Props {
    title?: HighlightedText | null;
    description?: string | null;
    size?: "sm" | "md" | "lg";
    showRole?: boolean | null;
    showAffiliation?: boolean | null;
    people?: Person[] | null;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const mappedPeople = computed(() =>
    (props.people || []).map((person) => ({
        name: person.name,
        role: person.role || undefined,
        title: person.title || undefined,
        affiliation: person.affiliation || undefined,
        image: strapiMedia(person.photo),
        link: person.link || undefined,
    })),
);
</script>

<template>
    <section class="py-6 md:py-8">
        <div class="max-w-7xl mx-auto px-6">
            <h3 v-if="title" class="heading-section text-xl md:text-2xl text-sensus-gray-900 text-center mb-6">
                <BaseHighlightedTitle :content="title" />
            </h3>
            <p v-if="description" class="text-center text-sensus-gray-600 mb-8 max-w-3xl mx-auto">
                {{ description }}
            </p>
            <BasePersonGrid
                :people="mappedPeople"
                :size="size || 'md'"
                :show-role="showRole ?? true"
                :show-affiliation="showAffiliation ?? false"
            />
        </div>
    </section>
</template>
