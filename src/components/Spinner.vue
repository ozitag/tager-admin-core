<template>
  <svg class="spinner" viewBox="0 0 50 50" :style="style" data-spinner>
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
  </svg>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'Spinner',
  props: {
    size: {
      type: Number,
      default: 25
    }
  },
  computed: {
    style() {
      return {
        width: this.size,
        height: this.size
      };
    }
  }
});
</script>

<style scoped lang="scss">
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;

  & .path {
    stroke: currentColor;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
