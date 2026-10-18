<script setup lang="ts">
import type { Department, HighlightedText } from "~/types/strapi";

interface Props {
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();

const { data: organization } = await useLatestOrganization();

const groups = computed(() => (organization.value?.departments || []).filter((group) => group.members?.length));

const mappedPeople = (group: Department) =>
    (group.members || []).map((person) => ({
        name: person.name,
        role: person.role || undefined,
        affiliation: person.affiliation || undefined,
        image: strapiMedia(person.photo),
        link: person.link || undefined,
    }));
</script>

<template>
    <section v-if="groups.length" class="py-6 md:py-8">
        <div class="max-w-7xl mx-auto px-6">
            <p v-if="label" class="text-sensus-red font-medium text-sm uppercase tracking-widest mb-3 text-center">
                {{ label }}
            </p>
            <h2 v-if="title" class="heading-section text-2xl md:text-3xl text-sensus-gray-900 text-center mb-6">
                <BaseHighlightedTitle :content="title" />
            </h2>
            <p v-if="description" class="text-center text-sensus-gray-600 mb-8 max-w-3xl mx-auto">
                {{ description }}
            </p>
            <div v-for="(group, index) in groups" :key="group.id ?? index" class="mb-10 last:mb-0">
                <h3
                    v-if="group.name"
                    class="heading-section text-xl md:text-2xl text-sensus-gray-900 text-center mb-6"
                >
                    {{ group.name }}
                </h3>
                <BasePersonGrid :people="mappedPeople(group)" size="md" />
            </div>
        </div>
    </section>
</template>
