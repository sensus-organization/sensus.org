<script setup lang="ts">
interface Props {
    title: string;
    description?: string | null;
    buttonText?: string | null;
    url?: string | null;
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-5xl mx-auto px-6">
            <BaseSectionCta
                :title="title"
                :description="description || ''"
                :to="url || ''"
                :button-text="buttonText || 'Learn More'"
            />
        </div>
    </section>
</template>
