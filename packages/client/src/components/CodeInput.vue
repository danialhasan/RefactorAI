<template>
    <div class="border border-gray-400 rounded p-2">
        <h2>HELLO WORLD</h2>
    </div>
</template>

<script lang="js">
export default {
    name: "Input",
    props: {
        input: {
            type: String,
            required: true,
        },
    },
};
</script>
