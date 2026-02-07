<script setup lang="ts">
import type { StrapiBlocks } from "~/data/types";

interface Props {
    content: StrapiBlocks;
}

defineProps<Props>();
</script>

<template>
    <div class="prose prose-lg prose-sensus max-w-none text-sensus-gray-700 leading-relaxed">
        <template v-for="(block, index) in content" :key="index">
            <p v-if="block.type === 'paragraph'" class="mb-6">
                <template v-for="(child, childIndex) in block.children" :key="childIndex">
                    <template v-if="child.type === 'text'">
                        <strong v-if="child.bold && child.italic" class="italic">{{ child.text }}</strong>
                        <strong v-else-if="child.bold">{{ child.text }}</strong>
                        <em v-else-if="child.italic">{{ child.text }}</em>
                        <u v-else-if="child.underline">{{ child.text }}</u>
                        <s v-else-if="child.strikethrough">{{ child.text }}</s>
                        <template v-else>{{ child.text }}</template>
                    </template>
                    <a
                        v-else-if="child.type === 'link'"
                        :href="child.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sensus-red hover:underline"
                    >
                        <template v-for="(linkChild, linkChildIndex) in child.children" :key="linkChildIndex">
                            <strong v-if="linkChild.bold">{{ linkChild.text }}</strong>
                            <em v-else-if="linkChild.italic">{{ linkChild.text }}</em>
                            <template v-else>{{ linkChild.text }}</template>
                        </template>
                    </a>
                </template>
            </p>

            <component
                :is="`h${block.level}`"
                v-else-if="block.type === 'heading'"
                class="text-2xl font-bold text-sensus-gray-900 mb-4 mt-12"
            >
                <template v-for="(child, childIndex) in block.children" :key="childIndex">
                    <template v-if="child.type === 'text'">
                        <strong v-if="child.bold">{{ child.text }}</strong>
                        <em v-else-if="child.italic">{{ child.text }}</em>
                        <template v-else>{{ child.text }}</template>
                    </template>
                    <a
                        v-else-if="child.type === 'link'"
                        :href="child.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sensus-red hover:underline"
                    >
                        {{ child.children.map((c) => c.text).join("") }}
                    </a>
                </template>
            </component>

            <ul v-else-if="block.type === 'list' && block.format === 'unordered'" class="list-disc pl-6 mb-8 space-y-2">
                <li v-for="(item, i) in block.children" :key="i">
                    <template v-for="(child, childIndex) in item.children" :key="childIndex">
                        <template v-if="child.type === 'text'">
                            <strong v-if="child.bold">{{ child.text }}</strong>
                            <em v-else-if="child.italic">{{ child.text }}</em>
                            <template v-else>{{ child.text }}</template>
                        </template>
                        <a
                            v-else-if="child.type === 'link'"
                            :href="child.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-sensus-red hover:underline"
                        >
                            {{ child.children.map((c) => c.text).join("") }}
                        </a>
                    </template>
                </li>
            </ul>

            <ol v-else-if="block.type === 'list' && block.format === 'ordered'" class="list-decimal pl-6 mb-8 space-y-2">
                <li v-for="(item, i) in block.children" :key="i">
                    <template v-for="(child, childIndex) in item.children" :key="childIndex">
                        <template v-if="child.type === 'text'">
                            <strong v-if="child.bold">{{ child.text }}</strong>
                            <em v-else-if="child.italic">{{ child.text }}</em>
                            <template v-else>{{ child.text }}</template>
                        </template>
                        <a
                            v-else-if="child.type === 'link'"
                            :href="child.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-sensus-red hover:underline"
                        >
                            {{ child.children.map((c) => c.text).join("") }}
                        </a>
                    </template>
                </li>
            </ol>
        </template>
    </div>
</template>
