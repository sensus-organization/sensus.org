<script setup lang="ts">
import type { HighlightedText } from "~/types/strapi";

interface Props {
    title?: HighlightedText | null;
    description?: string | null;
    size?: "sm" | "md" | "lg";
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const { data } = await useLatestOrganization();

const groups = computed(() => data.value?.groups || []);

const mappedPeople = (group: (typeof groups.value)[number]) =>
    group.people.map((person) => ({
        name: person.name,
        role: person.role || undefined,
        title: person.title || undefined,
        affiliation: person.affiliation || undefined,
        image: strapiMedia(person.photo),
        link: person.link || undefined,
    }));
</script>

<template>
    <section v-if="groups.length" class="py-6 md:py-8">
        <div class="max-w-7xl mx-auto px-6">
            <h2 v-if="title" class="heading-section text-2xl md:text-3xl text-sensus-gray-900 text-center mb-6">
                <BaseHighlightedTitle :content="title" />
            </h2>
            <p v-if="description" class="text-center text-sensus-gray-600 mb-8 max-w-3xl mx-auto">
                {{ description }}
            </p>
            <div v-for="group in groups" :key="group.name ?? 'ungrouped'" class="mb-10 last:mb-0">
                <h3
                    v-if="group.name"
                    class="heading-section text-xl md:text-2xl text-sensus-gray-900 text-center mb-6"
                >
                    {{ group.name }}
                </h3>
                <BasePersonGrid :people="mappedPeople(group)" :size="props.size || 'md'" :show-role="true" />
            </div>
        </div>
    </section>
</template>
