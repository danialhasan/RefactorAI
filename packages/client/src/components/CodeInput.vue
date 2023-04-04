<template>
    <div class="grid grid-cols-4 w-full bg-red-900">
        <!-- This is the gray part! -->
        <div
            class="rounded-lg max-w-3xl bg-gray-800 p-6 shadow col-start-1 col-span-3"
        >
            <h1 class="mb-4 font-sans text-2xl font-bold text-gray-50">
                Input Code
            </h1>
            <textarea
                required
                style="resize: none"
                class="h-40 w-full rounded-lg bg-gray-900 px-2 py-2 font-mono"
            ></textarea>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: "CodeInput",
    props: {
        input: {
            type: String,
            required: true,
        },
  },
};
</script>
