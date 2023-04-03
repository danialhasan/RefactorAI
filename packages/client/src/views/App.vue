<template>
    <div class="">
        <button @click="increment">increment!!! {{ counter }}</button>
    </div>
</template>

<script lang="ts">
import Input from "@/components/CodeInput.vue";
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
        Input,
    },
};
</script>
