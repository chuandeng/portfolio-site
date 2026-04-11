<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="projet-header">
    <h1>{{ props.title }}</h1>
  </div>
</template>
<style lang="scss">
@media (max-width: 780px) {
  .projet-header {
    &::after,
    &::before {
      display: none;
    }
  }
}
.projet-header {
  h1 {
    font-family:
      "Solway", "Solway Placeholder", "PingFang SC", "Microsoft YaHei",
      "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif, serif;
    font-size: 42px;
    line-height: 50.4px;
    font-weight: 700;
  }
  position: relative;
  &::after,
  &::before {
    content: " ";
    width: 80px;
    height: 2px;
    border-radius: 2px;
    background-color: var(--color-secondary);
    display: inline-block;
    position: absolute;
  }
  &::after {
    top: 50%;
    right: -100px;
  }
  &::before {
    top: 50%;
    left: -100px;
  }
}
</style>
