<template>
    <div class="bg-gray-900 rounded-lg p-6">
        <h1 class="font-sans text-2xl font-bold text-white">Prompt</h1>
        <div class="mt-6 grid grid-cols-4 gap-4">
            <div
                class="bg-blue-900 flex flex-col items-center justify-center rounded-lg pb-4"
            >
                <img
                    src="../assets/refactor-icon.svg"
                    alt="Refactor Icon"
                    class="h-16 w-16 object-contain"
                />
                <p class="mt-2 font-bold text-white">Refactor</p>
            </div>
            <div
                class="bg-blue-900 flex flex-col items-center justify-center rounded-lg pb-4"
            >
                <img
                    src="../assets/explain-icon.svg"
                    alt="Explain Icon"
                    class="h-16 w-16 object-contain"
                />
                <p class="mt-2 font-bold text-white">Explain</p>
            </div>
            <div
                class="bg-blue-900 flex flex-col items-center justify-center rounded-lg pb-4"
            >
                <img
                    src="../assets/debug-icon.svg"
                    alt="Debug Icon"
                    class="h-16 w-16 object-contain"
                />
                <p class="mt-2 font-bold text-white">Debug</p>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: "CodePrompt",
    props: {
    },
};
</script>
