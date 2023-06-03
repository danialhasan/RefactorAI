<template>
    <div class="w-full">
        <!-- This is the gray part! -->
        <div class="rounded-lg max-w-3xl bg-gray-800 p-6 shadow col-start-1 col-span-3">
            <h1 class="mb-4 font-sans text-2xl font-bold text-gray-50">
                Input Code
            </h1>
            <textarea v-model="codeInputValue" required style="resize: vertical"
                class="h-40 w-full rounded-lg bg-gray-900 px-2 py-2 font-mono">
Input your code here!</textarea>
        </div>
    </div>
</template>

<script lang="js">
import { mapWritableState, mapActions } from 'pinia';
import { useDataStore } from '@/stores/data.js';
export default {
    name: 'CodeInput',
    props: {
        input: {
            type: String,
            required: true,
        },
    },
    data: () => {
        return {
            codeInput: ''
        };
    },
    computed: {
        ...mapWritableState(useDataStore, ['codeInputValue']),
    },
    watch: {
        codeInputValue(newVal) {
            // console.log('New value:', this.codeInputValue);
            this.codeInputValue = newVal;
            this.writeToMemento();
        }
    },
    methods: {
        ...mapActions(useDataStore, ['writeToMemento'])
    },
};
</script>
