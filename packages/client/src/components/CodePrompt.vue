<template>
    <div class="w-full bg-gray-900 rounded-lg p-6">
        <h1 class="font-sans text-2xl font-bold text-white">Prompt</h1>
        <div class="mt-6 max-w-screen-md grid grid-cols-4 gap-4">
            <div
                class="bg-blue-900 flex flex-col hover:bg-blue-800 active:bg-blue-700 items-center justify-center rounded-lg py-6"
                @click="createRequest('refactor')"
            >
                <img :src="refactorIcon" alt="Refactor Icon" class="h-16 w-16 object-contain" />
                <p class="mt-2 font-bold text-white">Refactor</p>
            </div>
            <div
                class="bg-blue-900 hover:bg-blue-800 active:bg-blue-700 flex flex-col items-center justify-center rounded-lg py-4"
                @click="createRequest('explain')"
            >
                <img :src="explainIcon" alt="Explain Icon" class="h-16 w-16 object-contain" />
                <p class="mt-2 font-bold text-white">Explain</p>
            </div>
            <div
                class="bg-blue-900 hover:bg-blue-800 active:bg-blue-700 flex flex-col items-center justify-center rounded-lg py-4"
                @click="createRequest('debug')"
            >
                <img :src="debugIcon" alt="Debug Icon" class="h-16 w-16 object-contain" />
                <p class="mt-2 font-bold text-white">Debug</p>
            </div>

            <div
                class="bg-blue-900 hover:bg-blue-800 active:bg-blue-700 flex flex-col items-center justify-center rounded-lg py-4"
                @click="createRequest('')"
            >
                <img :src="customIcon" alt="Custom Icon" class="h-16 w-16 object-contain" />
                <p class="mt-2 font-bold text-white">Custom Prompt</p>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import { mapActions } from 'pinia';
import { useDataStore } from '@/stores/data.js';
import { storeIcons } from '@/helpers/helper.js';
export default {
  name: 'CodePrompt',
  props: {
  },

  data: () => {
    return {
      debugIcon: '',
      refactorIcon: '',
      explainIcon: '',
      customIcon:''
    };
  },
  mounted() {
    const { debug_icon, refactor_icon, explain_icon, custom_icon } = storeIcons();
    this.debugIcon = debug_icon;
    this.refactorIcon = refactor_icon;
    this.explainIcon = explain_icon;
    this.customIcon = custom_icon

  },
  methods: {
    ...mapActions(useDataStore, ['createRequest'])
  }
};
</script>
