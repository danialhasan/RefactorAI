<template>
    <div class="w-12 h-6 bg-blue-500 rounded-full flex" :class="state ? 'justify-end' : 'justify-start'"
        @click="toggleState">
        <div class="w-6 h-6 rounded-full" :class="state ? 'bg-green-500' : 'bg-red-500'"></div>
    </div>
</template>
<script lang="js">
import { useDataStore } from '@/stores/data.js';
import { mapActions, mapWritableState } from 'pinia';
export default {
    name: 'AppSettings',
    props: {
        feature: {
            type: String,
            required: true
        },
        toggleable: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    data: () => {
        return {
            state: false
        };
    },
    computed: {
        ...mapWritableState(useDataStore, ['toggleableFeatures', 'settingsVisible']),
    },
    mounted() {

    },
    methods: {
        ...mapActions(useDataStore, ['writeToMemento']),
        toggleState() {
            if (!this.toggleable) {
                console.log(`${this.feature} is not toggleable.`);
                return;
            }
            this.state = !this.state;
            try {
                console.log('toggling feature ', this.feature, this.settingsVisible);
                this.toggleableFeatures[this.feature] = this.state;
            } catch (error) {
                console.log('Feature: ', this.feature, this.toggleableFeatures[this.feature]);
                console.error('ERROR: ', error);
            }
            this.writeToMemento();
        },
    }
};
</script>
