<template>
  <div class="max-w-2xl flex flex-col">
    <code-input />
    <code-output />
    <code-prompt />
  </div>
</template>

<script lang="ts">
import CodeInput from '@/components/CodeInput.vue';
import CodeOutput from '@/components/CodeOutput.vue';
import CodePrompt from '@/components/CodePrompt.vue';
export default {
  name: 'App',
  components: {
    CodeInput,
    CodeOutput,
    CodePrompt,
  },
  data: () => ({
    counter: 0,
  }),
  methods: {
    increment() {
      this.counter += 1;
      // @ts-expect-error
      vscode.postMessage({
        message:
          'extension can listen to vue events by using postMessage method!',
      });
    },
  },
};
</script>
