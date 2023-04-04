<template>
    <div class="w-full bg-gray-900 rounded-lg p-6">
        <h1 class="font-sans text-2xl font-bold text-white">Prompt</h1>
        <div class="mt-6 grid grid-cols-4 gap-4">
            <div
                class="bg-blue-900 flex flex-col items-center justify-center rounded-lg pb-4"
            >
                <img
                    :src="this.refactorIcon"
                    alt="Refactor Icon"
                    class="h-16 w-16 object-contain"
                />
                <p class="mt-2 font-bold text-white">Refactor</p>
            </div>
            <div
                class="bg-blue-900 flex flex-col items-center justify-center rounded-lg pb-4"
            >
                <img
                    :src="this.explainIcon"
                    alt="Explain Icon"
                    class="h-16 w-16 object-contain"
                />
                <p class="mt-2 font-bold text-white">Explain</p>
            </div>
            <div
                class="bg-blue-900 flex flex-col items-center justify-center rounded-lg pb-4"
            >
                <img
                    :src="this.debugIcon"
                    alt="Debug Icon"
                    class="h-16 w-16 object-contain"
                />
                <p class="mt-2 font-bold text-white">Debug</p>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { storeIcons } from "@/helpers/helper.js"
export default {
    name: "CodePrompt",
    props: {
    },

  data: () => {
    return {
      debugIcon: "",
      refactorIcon: "",
      explainIcon:""
      }
  },
  mounted() {
    const { debug_icon, refactor_icon, explain_icon } = storeIcons();
    this.debugIcon = debug_icon;
    this.refactorIcon = refactor_icon;
    this.explainIcon = explain_icon;
    }
};
</script>
