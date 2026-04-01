<script setup lang="ts">
import { headerNavigation } from "~/data/navigation";

const navigation = headerNavigation;

const mobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);

function toggleDropdown(label: string) {
    activeDropdown.value = activeDropdown.value === label ? null : label;
}

function closeDropdowns() {
    activeDropdown.value = null;
}
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-[100]">
        <div class="mx-4 mt-4">
            <nav class="glass rounded-2xl shadow-lg max-w-7xl mx-auto px-4 py-2">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/" class="flex items-center gap-3 shrink-0">
                        <img src="https://cdn.sensus.org/branding/logo-rgb.svg" alt="SensUs Logo" class="h-11 w-auto" />
                    </NuxtLink>

                    <div class="hidden lg:flex items-center gap-2">
                        <template v-for="item in navigation" :key="item.label">
                            <NuxtLink
                                v-if="!item.children"
                                :to="item.to"
                                class="relative px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5"
                                :class="item.badge
                                    ? 'text-sensus-red border-2 border-sensus-red/30 hover:bg-sensus-red/5'
                                    : 'text-sensus-gray-700 hover:text-sensus-red hover:bg-sensus-gray-100'"
                                active-class="!bg-sensus-red !text-white !border-sensus-red"
                            >
                                <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
                                {{ item.label }}
                                <span
                                    v-if="item.badge"
                                    class="absolute -top-2.5 -right-3 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-sensus-red text-white rounded-full leading-none ring-2 ring-white"
                                >
                                    {{ item.badge }}
                                </span>
                            </NuxtLink>

                            <div v-else class="relative" @mouseenter="activeDropdown = item.label" @mouseleave="closeDropdowns">
                                <button
                                    class="px-3 py-2 rounded-lg text-sm font-semibold text-sensus-gray-700 hover:text-sensus-red hover:bg-sensus-gray-100 transition-colors flex items-center gap-1.5"
                                >
                                    <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
                                    {{ item.label }}
                                    <svg
                                        class="w-3.5 h-3.5 transition-transform"
                                        :class="{
                                            'rotate-180': activeDropdown === item.label,
                                        }"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <Transition
                                    enter-active-class="transition ease-out duration-200"
                                    enter-from-class="opacity-0 translate-y-1"
                                    enter-to-class="opacity-100 translate-y-0"
                                    leave-active-class="transition ease-in duration-150"
                                    leave-from-class="opacity-100 translate-y-0"
                                    leave-to-class="opacity-0 translate-y-1"
                                >
                                    <div
                                        v-show="activeDropdown === item.label"
                                        class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-sensus-gray-100 py-1.5 overflow-hidden"
                                    >
                                        <template v-for="child in item.children" :key="child.label">
                                            <a
                                                v-if="child.external"
                                                :href="child.to"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="px-4 py-2 text-sm font-medium text-sensus-gray-700 hover:bg-sensus-gray-50 hover:text-sensus-red transition-colors flex items-center gap-2"
                                            >
                                                <UIcon v-if="child.icon" :name="child.icon" class="w-4 h-4 opacity-50" />
                                                {{ child.label }}
                                                <span class="text-sensus-gray-400 ml-auto text-xs">↗</span>
                                            </a>
                                            <NuxtLink
                                                v-else
                                                :to="child.to"
                                                class="px-4 py-2 text-sm font-medium text-sensus-gray-700 hover:bg-sensus-gray-50 hover:text-sensus-red transition-colors flex items-center gap-2"
                                            >
                                                <UIcon v-if="child.icon" :name="child.icon" class="w-4 h-4 opacity-50" />
                                                {{ child.label }}
                                            </NuxtLink>
                                        </template>
                                    </div>
                                </Transition>
                            </div>
                        </template>
                    </div>

                    <div class="hidden lg:block">
                        <NuxtLink
                            to="/join"
                            class="inline-flex items-center gap-2 bg-sensus-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-sensus-red/90 transition-colors"
                        >
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                />
                            </svg>
                            Join SensUs
                        </NuxtLink>
                    </div>

                    <button
                        class="lg:hidden p-2 rounded-lg hover:bg-sensus-gray-100 transition-colors"
                        @click="mobileMenuOpen = !mobileMenuOpen"
                    >
                        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>

        <Transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 -translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
        >
            <div v-show="mobileMenuOpen" class="lg:hidden mx-4 mt-2">
                <div class="bg-white rounded-2xl shadow-xl border border-sensus-gray-100 p-6">
                    <nav class="space-y-2">
                        <template v-for="item in navigation" :key="item.label">
                            <NuxtLink
                                v-if="!item.children"
                                :to="item.to"
                                class="block px-4 py-3 rounded-xl text-sensus-gray-700 hover:bg-sensus-gray-50 hover:text-sensus-red font-medium transition-colors"
                                @click="mobileMenuOpen = false"
                            >
                                <div class="flex items-center gap-3">
                                    <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5 opacity-60" />
                                    {{ item.label }}
                                    <span
                                        v-if="item.badge"
                                        class="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-sensus-red text-white rounded-full leading-none"
                                    >
                                        {{ item.badge }}
                                    </span>
                                </div>
                            </NuxtLink>

                            <div v-else>
                                <button
                                    class="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sensus-gray-700 hover:bg-sensus-gray-50 font-medium transition-colors"
                                    @click="toggleDropdown(item.label)"
                                >
                                    <div class="flex items-center gap-3">
                                        <UIcon v-if="item.icon" :name="item.icon" class="w-5 h-5 opacity-60" />
                                        {{ item.label }}
                                    </div>
                                    <svg
                                        class="w-5 h-5 transition-transform"
                                        :class="{
                                            'rotate-180': activeDropdown === item.label,
                                        }"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <Transition
                                    enter-active-class="transition ease-out duration-200"
                                    enter-from-class="opacity-0 max-h-0"
                                    enter-to-class="opacity-100 max-h-96"
                                    leave-active-class="transition ease-in duration-150"
                                    leave-from-class="opacity-100 max-h-96"
                                    leave-to-class="opacity-0 max-h-0"
                                >
                                    <div v-show="activeDropdown === item.label" class="overflow-hidden">
                                        <div class="pl-4 py-2 space-y-1">
                                            <template v-for="child in item.children" :key="child.label">
                                                <a
                                                    v-if="child.external"
                                                    :href="child.to"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    class="block px-4 py-2.5 rounded-lg text-sm text-sensus-gray-600 hover:bg-sensus-gray-50 hover:text-sensus-red transition-colors"
                                                >
                                                    <div class="flex items-center gap-2">
                                                        <UIcon v-if="child.icon" :name="child.icon" class="w-4 h-4 opacity-50" />
                                                        {{ child.label }}
                                                        <span class="text-sensus-gray-400 ml-auto text-xs">↗</span>
                                                    </div>
                                                </a>
                                                <NuxtLink
                                                    v-else
                                                    :to="child.to"
                                                    class="block px-4 py-2.5 rounded-lg text-sm text-sensus-gray-600 hover:bg-sensus-gray-50 hover:text-sensus-red transition-colors"
                                                    @click="mobileMenuOpen = false"
                                                >
                                                    <div class="flex items-center gap-2">
                                                        <UIcon v-if="child.icon" :name="child.icon" class="w-4 h-4 opacity-50" />
                                                        {{ child.label }}
                                                    </div>
                                                </NuxtLink>
                                            </template>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </template>
                    </nav>

                    <div class="mt-6 pt-6 border-t border-sensus-gray-100">
                        <NuxtLink to="/join" class="btn-primary block text-center w-full" @click="mobileMenuOpen = false">
                            Join SensUs
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </Transition>
    </header>
</template>
