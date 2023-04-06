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

<script lang="ts">
import CodeInput from '@/components/CodeInput.vue';
import CodeOutput from '@/components/CodeOutput.vue';
import CodePrompt from '@/components/CodePrompt.vue';
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
    methods: {
        increment() {
            this.counter += 1;
            // @ts-expect-error
            vscode.postMessage({
                message: 'extension can listen to vue events by using postMessage method!',
            });
        },
    },
};
</script>
