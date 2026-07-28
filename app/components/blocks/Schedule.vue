<script setup lang="ts">
import type { ScheduleItem } from "~/types/strapi";

interface Props {
    title?: string | null;
    items?: ScheduleItem[] | null;
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-4xl mx-auto px-6">
            <div v-if="title" class="text-center mb-8">
                <h2 class="heading-section text-3xl md:text-4xl text-sensus-gray-900">
                    {{ title }}
                </h2>
            </div>

            <div v-if="items?.length" class="space-y-0">
                <div
                    v-for="(item, index) in items"
                    :key="item.id ?? index"
                    class="flex gap-6 py-5"
                    :class="[
                        index > 0 ? 'border-t border-sensus-gray-200' : '',
                        item.highlight ? 'bg-sensus-gray-50 rounded-xl px-6 -mx-6' : '',
                    ]"
                >
                    <div class="shrink-0 w-32 md:w-40">
                        <span class="text-sensus-red font-bold text-lg">{{ item.time }}</span>
                    </div>
                    <p :class="item.highlight ? 'font-bold text-sensus-gray-900' : 'text-sensus-gray-700'">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
