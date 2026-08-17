<script setup lang="ts">
interface Props {
    url: string;
    title?: string | null;
    aspectRatio?: "16:9" | "4:3" | "1:1" | "A4";
}

defineOptions({ inheritAttrs: false });
const props = defineProps<Props>();

const ratio = computed(
    () => ({ "16:9": 16 / 9, "4:3": 4 / 3, "1:1": 1, "A4": 1 / 1.414 })[props.aspectRatio || "16:9"],
);
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-4xl mx-auto px-6">
            <iframe
                :src="url"
                :title="title || 'Embedded content'"
                class="w-full mx-auto rounded-2xl border-0 shadow-lg"
                :style="{ aspectRatio: String(ratio), maxWidth: `calc(85vh * ${ratio})` }"
                loading="lazy"
                allowfullscreen
            />
        </div>
    </section>
</template>
