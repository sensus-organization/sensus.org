<script setup lang="ts">
import type { Component } from "vue";
import type { HighlightedText, WidgetType } from "~/types/strapi";
import { BlocksArchiveHub, BlocksOrganization, BlocksTeamGrid, BlocksWorldMap } from "#components";

interface Props {
    type: WidgetType;
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const widgets: Record<WidgetType, Component> = {
    teams: BlocksTeamGrid,
    "world-map": BlocksWorldMap,
    archive: BlocksArchiveHub,
    organization: BlocksOrganization,
};

const widget = computed(() => (Object.hasOwn(widgets, props.type) ? widgets[props.type] : undefined));
</script>

<template>
    <component :is="widget" v-if="widget" :label="label" :title="title" :description="description" />
</template>
