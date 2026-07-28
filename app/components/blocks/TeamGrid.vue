<script setup lang="ts">
import type { Global, HighlightedText, Team } from "~/types/strapi";

interface Props {
    label?: string | null;
    title?: HighlightedText | null;
    description?: string | null;
}

defineOptions({ inheritAttrs: false });
defineProps<Props>();

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

const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isModalOpen.value) closeModal();
};

onMounted(() => window.addEventListener("keydown", handleEscape));
onBeforeUnmount(() => window.removeEventListener("keydown", handleEscape));

const global = useState<Global | null>("global", () => null);

const { data: teams } = await useStrapiFind<Team>("teams", { populate: "*", pagination: { pageSize: 100 } });

const currentTeams = computed(() => {
    const all = teams.value || [];
    if (!all.length) return all;
    const currentYear = global.value?.currentYear ?? Math.max(...all.map((team) => team.year ?? 0));
    return all.filter((team) => (team.year ?? 0) === currentYear);
});

const sortedTeams = computed(() => [...currentTeams.value].sort((a, b) => a.name.localeCompare(b.name)));
</script>

<template>
    <section class="py-12 md:py-16">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-8">
                <p v-if="label" class="text-sensus-red font-medium text-sm uppercase tracking-widest mb-3">
                    {{ label }}
                </p>
                <h2 v-if="title" class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-6">
                    <BaseHighlightedTitle :content="title" />
                </h2>
                <p v-if="description" class="text-lg text-sensus-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {{ description }}
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <button
                    v-for="team in sortedTeams"
                    :id="team.documentId"
                    :key="team.id"
                    type="button"
                    class="group bg-white rounded-2xl border border-sensus-gray-200 shadow-sm overflow-hidden hover:border-sensus-red/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer scroll-mt-28"
                    @click="openModal(team)"
                >
                    <div class="relative aspect-[3/2] overflow-hidden" :class="strapiMedia(team.image) ? '' : 'bg-white'">
                        <img
                            v-if="strapiMedia(team.image)"
                            :src="strapiMedia(team.image)"
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
                        <div class="relative overflow-hidden" :class="strapiMedia(selectedTeam.image) ? 'bg-sensus-gray-900' : 'bg-white h-48'">
                            <img
                                v-if="strapiMedia(selectedTeam.image)"
                                :src="strapiMedia(selectedTeam.image)"
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
