<template>
    <div class="min-w-screen-xl min-h-screen flex items-start mt-16 justify-center">
        <div class="max-w-screen-lg w-full grid place-items-center">
            <code-prompt />
            <div class="flex w-full flex-row">
                <code-input />
                <code-output />
            </div>
        </div>
        <!-- <button @click.prevent="getLastState">Click me to get last state!</button> -->
    </div>
</template>

<script>
import CodeInput from '@/components/CodeInput.vue';
import CodeOutput from '@/components/CodeOutput.vue';
import CodePrompt from '@/components/CodePrompt.vue';
import { mapWritableState, mapActions } from 'pinia';
import { useDataStore } from '@/stores/data.js';
// import axios from 'axios';
// @ts-ignore
export default {
    name: 'App',
    components: {
        CodeInput,
        CodeOutput,
        CodePrompt,
    },
    data: () => ({
        counter: 0,
    }),
    computed: {
        ...mapWritableState(useDataStore, ['codeInputValue', 'backendResponse']),
    },
    watch: {},
    mounted() {
        window.addEventListener('message', async (event) => {
            const message = event.data;
            this.codeInputValue = message.codeInputValue;
            this.backendResponse = message.backendResponse;
            this.toggleableFeatures = message.toggleableFeatures;
            // console.log('Set state from memento: ', message);
        });
        this.getLastState();
    },
    methods: {
        ...mapActions(useDataStore, ['getFromMemento']),
        getLastState() {
            this.getFromMemento();
        },
    },
};
</script>
