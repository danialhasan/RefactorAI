<template>
    <div class="h-[280px] w-[350px] rounded-md bg-gray-800 text-white" :class="visible ? 'block' : 'hidden'">
        <h1 class="px-8 pt-8 pb-4 text-3xl font-bold">
            Settings
        </h1>
        <p class="px-8">
            This is where you can opt into new beta features.
        </p>
        <div class="border-b-2 border-gray-300 py-3"></div>
        <div id="options" class="flex flex-col mx-8 pt-6">
            <div class="flex justify-between mb-4">
                <p>CHAT STREAMING</p>
                <ToggleSwitch feature="dataStreaming" :toggleable="true" />
            </div>
            <div class="flex justify-between mb-4">
                <p>MODEL SWITCHING</p>
                <ToggleSwitch feature="modelSwitching" :toggleable="false" />
            </div>
        </div>
    </div>
</template>

<script lang="js">
import ToggleSwitch from '@/components/ToggleSwitch.vue';
export default {
    name: 'AppSettings',
    components: {
        ToggleSwitch
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },

    data: () => {
        return {
        };
    },
    mounted() {
    },
    methods: {

    }
};
</script>
