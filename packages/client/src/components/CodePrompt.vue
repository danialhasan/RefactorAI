<template>
    <div class="w-full rounded-lg bg-gray-900 p-6">
        <h1 class="font-sans text-2xl font-bold text-white">Prompt</h1>
        <div class="mt-6 grid max-w-screen-md grid-cols-4 gap-4 border border-red-400">
            <div
                class="flex flex-col items-center justify-center rounded-lg bg-blue-900 py-6 hover:bg-blue-800 active:bg-blue-700"
                @click="createRequest('refactor all parts of this code')"
            >
                <img :src="refactorIcon" alt="Refactor Icon" class="h-16 w-16 object-contain" />
                <p class="mt-2 font-bold text-white">Refactor</p>
            </div>
            <div
                class="flex flex-col items-center justify-center rounded-lg bg-blue-900 py-4 hover:bg-blue-800 active:bg-blue-700"
                @click="createRequest('explain all parts of this code')"
            >
                <img :src="explainIcon" alt="Explain Icon" class="h-16 w-16 object-contain" />
                <p class="mt-2 font-bold text-white">Explain</p>
            </div>
            <div
                class="flex flex-col items-center justify-center rounded-lg bg-blue-900 py-4 hover:bg-blue-800 active:bg-blue-700"
                @click="createRequest('debug all lines of this code')"
            >
                <img :src="debugIcon" alt="Debug Icon" class="h-16 w-16 object-contain" />
                <p class="mt-2 font-bold text-white">Debug</p>
            </div>

            <div
                class="flex flex-col items-center justify-center rounded-lg bg-blue-900 py-4 hover:bg-blue-800 active:bg-blue-700"
                @click="createStreamRequest('')"
            >
                <img :src="customIcon" alt="Custom Icon" class="h-16 w-16 object-contain" />
                <p class="mt-2 font-bold text-white">Custom Prompt</p>
            </div>
        </div>
        <div
            id="alternative_options_container"
            class="my-4 flex justify-between w-auto max-w-screen-md border border-green-500"
        >
            <a href="https://forms.gle/WovhUia6eJQ8NeSW6">
                <div
                    class="h-12 w-56 rounded-lg bg-gray-800 px-4 pt-3 text-center text-gray-100 hover:cursor-pointer hover:bg-gray-600"
                >
                    LEAVE FEEDBACK HERE
                </div>
            </a>
            <div
                id="control_panel"
                class="h-12 w-auto border border-blue-500 px-6 pt-3 text-center text-gray-900 bg-yellow-500 hover:bg-yellow-600"
                @click="toggleSettingsVisibility"
            >
                SETTINGS
            </div>
        </div>
        <AppSettings :visible="settingsVisible" />
    </div>
</template>

<script lang="js">
import { mapActions, mapWritableState } from 'pinia';
import { useDataStore } from '@/stores/data.js';
import { storeIcons } from '@/helpers/helper.js';
import AppSettings from "@/components/Settings.vue"
export default {
    name: 'CodePrompt',
    components: {AppSettings},
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
    computed: {
    ...mapWritableState(useDataStore, ['settingsVisible']),
  },
  mounted() {
    const { debug_icon, refactor_icon, explain_icon, custom_icon } = storeIcons();
    this.debugIcon = debug_icon;
    this.refactorIcon = refactor_icon;
    this.explainIcon = explain_icon;
    this.customIcon = custom_icon

  },
  methods: {
      ...mapActions(useDataStore, ['createRequest', 'createStreamRequest']),
      toggleSettingsVisibility() {
        console.log("Toggling settings!", this.settingsVisible)
          if (this.settingsVisible) {
              this.settingsVisible = false;
          } else {
              this.settingsVisible = true;
        }
      }
    },
};
</script>
