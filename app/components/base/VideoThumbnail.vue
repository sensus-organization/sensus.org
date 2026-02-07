<script setup lang="ts">
interface Props {
    videoUrl: string;
    thumbnailUrl?: string;
    alt?: string;
}

const props = defineProps<Props>();

const thumbnail = computed(() => {
    if (props.thumbnailUrl) return props.thumbnailUrl;
    const videoId = props.videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : "";
});
</script>

<template>
    <div class="relative rounded-3xl overflow-hidden shadow-2xl group aspect-video bg-sensus-gray-100">
        <img
            :src="thumbnail"
            :alt="alt || 'Video thumbnail'"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <a
            :href="videoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
        >
            <div
                class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
            >
                <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
        </a>
    </div>
</template>
