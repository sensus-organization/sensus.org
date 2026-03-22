<script setup lang="ts">
import type { Team } from "~/data/types";
import { teamsHeader, teams } from "~/data/teams";

const teamsData = {
    header: {
        ...teamsHeader,
        notice: "Teams for SensUs 2026 will be announced soon. Below are the participating teams from SensUs 2025.",
    },
    teams: [...teams].sort((a, b) => a.name.localeCompare(b.name)),
};

const selectedTeam = ref<Team | null>(null);
const isModalOpen = ref(false);

const openModal = (team: Team) => {
    selectedTeam.value = team;
    isModalOpen.value = true;
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    isModalOpen.value = false;
    selectedTeam.value = null;
    document.body.style.overflow = "";
};

onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isModalOpen.value) {
            closeModal();
        }
    };
    window.addEventListener("keydown", handleEscape);
    onUnmounted(() => {
        window.removeEventListener("keydown", handleEscape);
    });
});
</script>

<template>
    <section class="py-20 md:py-32 bg-white">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-8">
                <p class="text-sensus-red font-medium text-sm uppercase tracking-widest mb-3">
                    {{ teamsData.header.label }}
                </p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-6">
                    <BaseHighlightedTitle :content="teamsData.header.title" />
                </h2>
                <p class="text-lg text-sensus-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Every year, student teams from universities around the world compete in SensUs to develop innovative biosensor
                    solutions. Click on any team to learn more about them.
                </p>
            </div>

            <div class="mb-12 max-w-3xl mx-auto">
                <div class="bg-sensus-blue/5 border border-sensus-blue/20 rounded-2xl p-5 flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 bg-sensus-blue/10 rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5 text-sensus-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <p class="text-sensus-gray-700 leading-relaxed">
                        {{ teamsData.header.notice }}
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <button
                    v-for="team in teamsData.teams"
                    :key="team.name"
                    type="button"
                    class="group bg-white rounded-2xl border border-sensus-gray-200 shadow-sm overflow-hidden hover:border-sensus-red/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer"
                    @click="openModal(team)"
                >
                    <div class="relative aspect-[3/2] overflow-hidden" :class="team.image ? '' : 'bg-white'">
                        <img
                            v-if="team.image"
                            :src="team.image"
                            :alt="team.name"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div class="absolute bottom-4 left-4 right-4">
                            <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
                                {{ team.country }}
                            </span>
                        </div>
                    </div>

                    <div class="p-5">
                        <h3 class="font-bold text-lg text-sensus-gray-900 mb-1 group-hover:text-sensus-red transition-colors">
                            {{ team.name }}
                        </h3>
                        <p class="text-sm text-sensus-gray-600 leading-snug">
                            {{ team.university }}
                        </p>
                    </div>
                </button>
            </div>

            <div class="mt-20">
                <div class="bg-sensus-gray-50 rounded-3xl p-8 md:p-12 text-center border border-sensus-gray-100">
                    <div class="max-w-2xl mx-auto">
                        <h3 class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">Want to Compete in SensUs?</h3>
                        <p class="text-sensus-gray-600 text-lg mb-8 leading-relaxed">
                            Interested in joining the competition? Reach out to us to learn more about how your team can participate.
                        </p>
                        <NuxtLink to="/contact" class="btn-primary inline-flex items-center gap-2">
                            Get in Touch
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <Teleport to="body">
            <Transition name="modal">
                <div v-if="isModalOpen && selectedTeam" class="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div class="modal-backdrop absolute inset-0" @click="closeModal" />

                    <div
                        class="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden cursor-pointer"
                        @click="closeModal"
                    >
                        <div class="relative overflow-hidden" :class="selectedTeam.image ? 'bg-sensus-gray-900' : 'bg-white h-48'">
                            <img
                                v-if="selectedTeam.image"
                                :src="selectedTeam.image"
                                :alt="selectedTeam.name"
                                class="w-full max-h-[50vh] object-contain"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div class="absolute bottom-6 left-6 right-6">
                                <span
                                    class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold mb-3"
                                >
                                    {{ selectedTeam.country }}
                                </span>
                                <h3 class="text-2xl md:text-3xl font-bold text-white">
                                    {{ selectedTeam.name }}
                                </h3>
                                <p class="text-white/80 mt-1">
                                    {{ selectedTeam.university }}
                                </p>
                            </div>
                        </div>

                        <div class="p-6 md:p-8 overflow-y-auto max-h-[40vh]">
                            <h4 class="font-semibold text-sensus-gray-900 mb-3">About the Team</h4>
                            <p class="text-sensus-gray-600 leading-relaxed">
                                {{ selectedTeam.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </section>
</template>

<style scoped>
.modal-backdrop {
    background: rgba(0, 0, 0, 0.6);
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease-out;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
