<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { missionCards } from "~/data/home";

if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);
}

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (!import.meta.client || !sectionRef.value) return;

    const cardElements = sectionRef.value.querySelectorAll(".mission-card");

    gsap.fromTo(
        cardElements,
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.value,
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        },
    );
});
</script>

<template>
    <section ref="sectionRef" class="py-20 md:py-32 bg-sensus-gray-50 relative overflow-hidden">
        <div
            class="absolute inset-0 opacity-30 pointer-events-none"
            style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--black-5.svg&quot;) repeat"
        />

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-sensus-red font-medium text-sm uppercase tracking-widest mb-3">Our Goals</p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900">
                    What does SensUs
                    <span class="text-sensus-red">stand for?</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="card in missionCards" :key="card.id" class="mission-card card-elevated p-8 text-center">
                    <div class="w-16 h-16 mx-auto mb-6 rounded-2xl bg-sensus-red/10 flex items-center justify-center">
                        <svg
                            v-if="card.icon === 'target'"
                            class="w-8 h-8 text-sensus-red"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                        <svg
                            v-if="card.icon === 'rocket'"
                            class="w-8 h-8 text-sensus-red"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>

                    <h3 class="text-xl font-bold text-sensus-gray-900 mb-4">
                        {{ card.title }}
                    </h3>

                    <p class="text-sensus-gray-600 leading-relaxed">
                        {{ card.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
