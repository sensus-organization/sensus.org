<script setup lang="ts">
import type { HighlightedText } from "~/data/types";

interface Props {
    content: HighlightedText | string;
    highlightClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
    highlightClass: "text-sensus-red",
});

const parts = computed(() => {
    if (typeof props.content === "string") {
        return [{ text: props.content, isHighlight: false }];
    }

    if (!props.content.highlight) {
        return [{ text: props.content.text, isHighlight: false }];
    }

    const { text, highlight } = props.content;
    const index = text.indexOf(highlight);

    if (index === -1) {
        return [{ text, isHighlight: false }];
    }

    const before = text.slice(0, index);
    const after = text.slice(index + highlight.length);

    const result = [];
    if (before) result.push({ text: before, isHighlight: false });
    result.push({ text: highlight, isHighlight: true });
    if (after) result.push({ text: after, isHighlight: false });

    return result;
});
</script>

<template>
    <span>
        <template v-for="(part, index) in parts" :key="index">
            <span v-if="part.isHighlight" :class="highlightClass">{{ part.text }}</span>
            <template v-else>{{ part.text }}</template>
        </template>
    </span>
</template>
