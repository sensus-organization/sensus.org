<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutSectionData, aboutImages } from "~/data/home";

if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);
}

interface Box {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}

interface BgImage {
    id: number;
    x: number;
    y: number;
    scale: number;
    depth: number;
    src: string;
    opacity: number;
    blur: number;
    zIndex: number;
    rotation: number;
}

const mainImages = aboutImages.main;
const bgImagePool = aboutImages.background;

const bgImages: BgImage[] = [];

const COUNT = bgImagePool.length;

const boxesIntersect = (a: Box, b: Box) => {
    return a.minX < b.maxX && a.maxX > b.minX && a.minY < b.maxY && a.maxY > b.minY;
};

const TEXT_BOX = { minX: -450, maxX: 450, minY: -450, maxY: 0 };
const FAN_BOX = { minX: -650, maxX: 650, minY: -50, maxY: 100 };

const generateBgImages = () => {
    let attempts = 0;
    const maxAttempts = 20000;

    while (bgImages.length < COUNT && attempts < maxAttempts) {
        attempts++;

        const x = (Math.random() - 0.5) * 1600;
        const y = (Math.random() - 0.5) * 900;

        const depth = Math.random() > 0.7 ? 2 : Math.random() > 0.4 ? 3 : 4;

        const scale = depth === 2 ? 1.1 : depth === 3 ? 0.9 : 0.75;

        const w = 220 * scale;
        const h = 150 * scale;
        const imgBox = {
            minX: x - w / 2 - 15,
            maxX: x + w / 2 + 15,
            minY: y - h / 2 - 15,
            maxY: y + h / 2 + 15,
        };

        if (boxesIntersect(imgBox, TEXT_BOX)) continue;
        if (boxesIntersect(imgBox, FAN_BOX)) continue;

        const overlaps = bgImages.some((existing) => {
            const ew = 220 * existing.scale;
            const eh = 150 * existing.scale;
            const existingBox = {
                minX: existing.x - ew / 2 - 15,
                maxX: existing.x + ew / 2 + 15,
                minY: existing.y - eh / 2 - 15,
                maxY: existing.y + eh / 2 + 15,
            };
            return boxesIntersect(imgBox, existingBox);
        });

        if (overlaps) continue;

        const opacity = depth === 2 ? 0.9 : depth === 3 ? 0.7 : 0.5;
        const blur = depth === 2 ? 0 : depth === 3 ? 0.5 : 1.5;
        const zIndex = 10 - depth;

        const rotation = (Math.random() - 0.5) * 16;

        bgImages.push({
            id: bgImages.length,
            src: bgImagePool[bgImages.length],
            x,
            y,
            scale,
            blur,
            opacity,
            zIndex,
            rotation,
        });
    }
};

if (import.meta.client) {
    generateBgImages();
}

const sectionRef = ref<HTMLElement | null>(null);
const mainContainerRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if (!import.meta.client || !sectionRef.value || !mainContainerRef.value) return;

    nextTick(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const mainCards = mainContainerRef.value!.querySelectorAll(".main-photo-card");
            const bgCards = document.querySelectorAll(".bg-photo-card");

            gsap.set(mainCards, {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 0.8,
                opacity: 0,
            });
            gsap.set(bgCards, { x: 0, y: 0, scale: 0, opacity: 0 });

            const timeline = gsap.timeline({
                paused: true,
                defaults: { ease: "none", duration: 1 },
            });

            const getFanProps = (i: number) => {
                if (i === 2) return { x: 0, y: -20, rot: 0, scale: 1.2 };
                if (i === 1) return { x: -280, y: 20, rot: -6, scale: 1.05 };
                if (i === 3) return { x: 280, y: 20, rot: 6, scale: 1.05 };
                if (i === 0) return { x: -520, y: 60, rot: -12, scale: 0.85 };
                if (i === 4) return { x: 520, y: 60, rot: 12, scale: 0.85 };
                return { x: 0, y: 0, rot: 0, scale: 1 };
            };

            mainCards.forEach((card, i) => {
                const props = getFanProps(i);
                timeline.to(
                    card,
                    {
                        x: props.x,
                        y: props.y,
                        rotation: props.rot,
                        scale: props.scale,
                        opacity: 1,
                    },
                    0,
                );
            });

            bgCards.forEach((card, i) => {
                const img = bgImages[i];
                if (!img) return;
                timeline.to(
                    card,
                    {
                        x: img.x,
                        y: img.y,
                        scale: img.scale,
                        rotation: img.rotation,
                        opacity: img.opacity,
                        filter: `blur(${img.blur}px)`,
                        duration: 1,
                    },
                    0,
                );
            });

            ScrollTrigger.create({
                trigger: sectionRef.value,
                start: "top bottom",
                end: "center 60%",
                scrub: 0.5,
                animation: timeline,
            });
        });
    });
});
</script>

<template>
    <section ref="sectionRef" class="py-24 md:py-32 bg-sensus-gray-50 overflow-hidden relative">
        <div
            class="absolute inset-0 opacity-30 pointer-events-none"
            style="background: url(&quot;https://cdn.sensus.org/branding/bg-molecule--black-5.svg&quot;) repeat"
        />

        <div class="relative z-10 max-w-7xl mx-auto px-6">
            <div class="text-center mb-12 md:mb-0 relative z-[60]">
                <p class="text-sensus-red font-semibold text-sm uppercase tracking-widest mb-3">
                    {{ aboutSectionData.label }}
                </p>
                <h2 class="heading-section text-3xl md:text-4xl lg:text-5xl text-sensus-gray-900 mb-6">
                    <BaseHighlightedTitle :content="aboutSectionData.title" />
                </h2>

                <p class="text-sensus-gray-600 text-lg max-w-3xl mx-auto text-balance relative z-[60] bg-transparent mb-4">
                    {{ aboutSectionData.description }}
                </p>

                <div class="relative z-[60] mb-8">
                    <NuxtLink
                        to="/about/who-are-we"
                        class="inline-flex items-center gap-2 text-sensus-red font-semibold hover:gap-4 transition-all"
                    >
                        Learn more about SensUs
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>

            <div class="block md:hidden space-y-4">
                <div class="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
                    <img :src="mainImages[2]" alt="SensUs Community" class="absolute inset-0 w-full h-full object-cover" />
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                        <img :src="mainImages[1]" alt="Presentation" class="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div class="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                        <img :src="mainImages[3]" alt="Lab Work" class="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>

                <div class="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/2]">
                    <img :src="mainImages[0]" alt="Collaboration" class="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>

            <div class="hidden md:block relative h-[600px] md:h-[700px] pointer-events-none -mt-16">
                <ClientOnly>
                    <div ref="bgContainerRef" class="absolute inset-0 flex justify-center items-center">
                        <div
                            v-for="img in bgImages"
                            :key="`bg-${img.id}`"
                            class="bg-photo-card absolute rounded-xl overflow-hidden shadow-lg border border-white/40 bg-sensus-gray-200"
                            :class="{
                                'w-[220px]': img.scale > 0.8,
                                'w-[180px]': img.scale <= 0.8 && img.scale > 0.6,
                                'w-[140px]': img.scale <= 0.6,
                            }"
                            :style="{ zIndex: img.zIndex }"
                        >
                            <img :src="img.src" alt="SensUs background" class="w-full aspect-[3/2] object-cover" loading="lazy" />
                        </div>
                    </div>
                </ClientOnly>

                <div ref="mainContainerRef" class="absolute inset-0 flex justify-center items-center z-[50]">
                    <div
                        v-for="(image, index) in mainImages"
                        :key="`main-${index}`"
                        class="main-photo-card absolute rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white"
                        :class="{
                            'w-[340px] md:w-[460px]': index === 2,
                            'w-[300px] md:w-[380px]': index !== 2,
                        }"
                        :style="{ zIndex: 50 - Math.abs(index - 2) }"
                    >
                        <img :src="image" :alt="`SensUs event photo ${index + 1}`" class="w-full aspect-[3/2] object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
