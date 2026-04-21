<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    colorFrom?: string;
    colorTo?: string;
    radius?: number;
    borderWidth?: number;
  }>(),
  {
    colorFrom: "",
    colorTo: "",
    radius: 16,
    borderWidth: 2,
  },
);
</script>
<template>
  <div
    class="color-box"
    :style="{
      '--box-radius': props.radius + 'px',
      '--box-border-width': props.borderWidth + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.color-box {
  border: var(--box-border-width) solid transparent !important;
  border-radius: var(--box-radius);
  position: relative;
  z-index: 0;
  background-color: #fff;
  background-clip: padding-box;
}

.color-box::before {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: -2px;
  border-radius: inherit;
  background: linear-gradient(to right, #8f41e9, #578aef);
  z-index: -2;
}
.color-box::after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background-color: #fff;
  border-radius: inherit;
}
</style>
