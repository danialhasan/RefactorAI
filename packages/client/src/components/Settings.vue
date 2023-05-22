<template>
    <div class="h-64 w-56 bg-gray-800 rounded-md" :class="visible ? 'block' : 'hidden'">
        <h1>Welcome to the settings!</h1>
    </div>
</template>

<script lang="js">
export default {
  name: 'AppSettings',
  props: {
    visible: {
      type: Boolean,
      default:false
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
