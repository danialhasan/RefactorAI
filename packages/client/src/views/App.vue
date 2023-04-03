<template>
    <div class="">
        <code-input></code-input>
        <code-output></code-output>
        <code-prompt></code-prompt>
    </div>
</template>

<script lang="ts">
import CodeInput from "@/components/CodeInput.vue";
import CodeOutput from "@/components/CodeOutput.vue";
import CodePrompt from "@/components/CodePrompt.vue";
export default {
    name: "App",
    data: () => ({
        counter: 0,
    }),
    methods: {
        increment() {
            this.counter += 1;
            // @ts-expect-error
            vscode.postMessage({
                message:
                    "extension can listen to vue events by using postMessage method!",
            });
        },
    },
    components: {
        CodeInput,
        CodeOutput,
        CodePrompt,
    },
};
</script>
