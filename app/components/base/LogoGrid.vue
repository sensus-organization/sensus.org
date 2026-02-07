<script setup lang="ts">
import type { Partner } from "~/data/types";

interface Props {
    items: Partner[];
    columns?: number;
}

const props = withDefaults(defineProps<Props>(), {
    columns: 4,
});

const gridCols = computed(() => {
    if (props.columns === 3) return "grid-cols-2 md:grid-cols-3";
    if (props.columns === 5) return "grid-cols-2 md:grid-cols-3 lg:grid-cols-5";
    return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
});
</script>

<template>
    <div :class="['grid gap-6 md:gap-8', gridCols]">
        <a
            v-for="item in items"
            :key="item.name"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white rounded-2xl border border-sensus-gray-200 shadow-sm p-6 md:p-8 flex flex-col items-center justify-center aspect-square hover:border-sensus-red/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <div class="flex items-center justify-center h-full w-full">
                <img
                    :src="item.logo"
                    :alt="item.name"
                    :class="columns === 5 ? 'max-h-16 md:max-h-20' : 'max-h-20 md:max-h-24'"
                    class="max-w-full object-contain transition-all duration-300"
                />
            </div>
            <p
                :class="columns === 5 ? 'mt-3 text-xs' : 'mt-4 text-sm'"
                class="font-semibold text-sensus-gray-600 group-hover:text-sensus-gray-900 transition-colors text-center leading-tight"
            >
                {{ item.name }}
            </p>
        </a>
    </div>
</template>
