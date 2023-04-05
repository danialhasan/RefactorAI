<template>
  <!-- eslint-disable vue/no-textarea-mustache -->
  <div class="w-full">
    <!-- This is the gray part! -->
    <div
      class="rounded-lg max-w-3xl bg-gray-800 p-6 shadow col-start-1 col-span-3"
    >
      <h1 class="mb-4 font-sans text-2xl font-bold text-gray-50">
        Out Code
      </h1>
      <textarea
        readonly
        
        style="resize: vertical"
        class="h-40 w-full rounded-lg bg-gray-900 px-2 py-2 font-mono"
      >{{ backendResponse }}</textarea> 
    </div>
  </div>
</template>

<script lang="js">
import { mapState } from 'pinia';
import {useDataStore } from '@/stores/data.js';
export default {
  name: 'CodeOutput',
  input: {
    type: String,
    required: true,
  },
  computed: {
    ...mapState(useDataStore, ['backendResponse'])
  }
};
</script>
