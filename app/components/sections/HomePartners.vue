<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { partnerCarouselLogos } from "~/data/partners";

if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);
}

const scrollPartners = [...partnerCarouselLogos, ...partnerCarouselLogos];

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (!import.meta.client || !sectionRef.value) return;

    const header = sectionRef.value.querySelector(".animate-header");
    const carousel = sectionRef.value.querySelector(".animate-carousel");
    const cta = sectionRef.value.querySelector(".animate-cta");
    const box = sectionRef.value.querySelector(".animate-box");

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.value,
            start: "top 80%",
        },
    });

    if (header) {
        timeline.fromTo(header, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
    }

    if (carousel) {
        timeline.fromTo(carousel, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.4");
    }

    if (cta) {
        timeline.fromTo(cta, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.6");
    }

    if (box) {
        gsap.fromTo(
            box,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: box,
                    start: "top 85%",
                },
            },
        );
    }
});
</script>

<template>
    <section ref="sectionRef" class="py-20 md:py-32 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12 animate-header opacity-0">
                <p class="text-sensus-red font-medium text-sm uppercase tracking-widest mb-3">Sponsored by</p>
                <h2 class="heading-section text-3xl md:text-4xl text-sensus-gray-900">Our Partners</h2>
            </div>

            <div
                class="animate-carousel opacity-0 relative w-full mb-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
                <div class="flex animate-scroll hover:[animation-play-state:paused] w-max">
                    <div
                        v-for="(partner, index) in scrollPartners"
                        :key="`${partner.name}-${index}`"
                        class="flex items-center justify-center px-8 md:px-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                    >
                        <img :src="partner.logo" :alt="partner.name" class="max-h-16 md:max-h-20 max-w-40 md:max-w-48 w-auto object-contain" />
                    </div>
                </div>
            </div>

            <div class="text-center animate-cta opacity-0">
                <NuxtLink to="/partners" class="inline-flex items-center gap-2 text-sensus-red font-semibold hover:gap-4 transition-all">
                    View all partners
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </NuxtLink>
            </div>

            <div class="animate-box opacity-0 mt-16 bg-sensus-gray-50 rounded-3xl p-8 md:p-12 text-center border border-sensus-gray-100">
                <h3 class="heading-section text-2xl md:text-3xl text-sensus-gray-900 mb-4">Interested in partnering with SensUs?</h3>
                <p class="text-sensus-gray-600 mb-8 max-w-2xl mx-auto">
                    Join our network of industry leaders supporting the future of biosensor innovation and healthcare technology.
                </p>
                <NuxtLink to="/join/partner" class="btn-primary inline-flex items-center gap-2">
                    Become a Partner
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}
</style>
