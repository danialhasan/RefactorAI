<template>
    <!-- 
    The following classes will be toggled with the state of this component:
    - justify-start -> justify-end
    - bg-red-500 -> bg-green-500
   -->
    <div
        class="w-12 h-6 bg-blue-500 rounded-full flex"
        :class="state ? 'justify-end' : 'justify-start'"
        @click="toggleState"
    >
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
      required:true
    }
  },
  data: () => {
    return {
      state: true
    };
  },
  computed: {
    ...mapWritableState(useDataStore, ['toggleableFeatures']),
  },
  mounted() {
    
  },
  methods: {
    ...mapActions(useDataStore, ['writeToMemento, settingsVisible']),
    toggleState() {
      this.state = !this.state
      this.toggleableFeatures[this.feature] = this.state;
      this.settingsVisible = this.state;
      this.writeToMemento();
    }
  }
};
</script>
