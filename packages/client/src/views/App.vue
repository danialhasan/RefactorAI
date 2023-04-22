<template>
    <div class="min-w-screen-xl min-h-screen flex items-start mt-16 justify-center">
        <div class="max-w-screen-lg w-full grid place-items-center">
            <code-prompt />
            <div class="flex w-full flex-row">
                <code-input />
                <code-output />
            </div>
        </div>
    </div>
</template>

<script lang="js">
import CodeInput from '@/components/CodeInput.vue';
import CodeOutput from '@/components/CodeOutput.vue';
import CodePrompt from '@/components/CodePrompt.vue';
import {firestore} from '@/helpers/firebaseConfig.js';
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
    watch: {},
    mounted() {
        // On mount, load the input/output data from memento.
        console.log("Firestore: ", firestore)
        window.addEventListener('message', async (event) => {
            const message = event.data;
            console.log('MESSAGE!!', message);
        });
    },
    methods: {},
};
</script>
