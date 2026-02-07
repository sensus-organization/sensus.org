<script setup lang="ts">
import { archiveYears } from "~/data/competition";
</script>

<template>
    <section class="py-20 md:py-28 bg-sensus-gray-50">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12">
                <p class="text-sensus-red font-medium text-sm uppercase tracking-widest mb-3">Previous Editions</p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-6">Teams Archive</h2>
                <p class="text-lg text-sensus-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Explore the participating teams from previous SensUs editions.
                </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <NuxtLink
                    v-for="item in archiveYears"
                    :key="item.year"
                    :to="item.path"
                    class="group bg-white rounded-2xl border border-sensus-gray-200 p-6 flex flex-col items-center justify-center hover:border-sensus-red/30 hover:shadow-lg transition-all duration-300"
                >
                    <span class="text-3xl md:text-4xl font-bold text-sensus-gray-900 group-hover:text-sensus-red transition-colors">
                        {{ item.year }}
                    </span>
                    <span class="mt-2 text-sm text-sensus-gray-500 group-hover:text-sensus-gray-700 transition-colors"> View Teams </span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
