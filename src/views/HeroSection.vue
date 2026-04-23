<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <section class="justify-center flex flex-col items-center text-center">
    <HeroFace class="w-400 h-400 rounded-full" />
    <div
      class="tags-group effects flex flex-wrap gap-8 justify-center lg:justify-start mb-4"
    >
      <span class="hvr-grow-rotate tag-block">{{ t("hero.tag1") }}</span>
      <span class="hvr-grow-rotate tag-block">{{ t("hero.tag2") }}</span>
      <span class="hvr-grow-rotate tag-block">{{ t("hero.tag3") }}</span>
    </div>
    <div class="max-w-2xl">
      <h1 class="my-info">{{ t("hero.title") }}</h1>
      <p class="my-description">{{ t("hero.description") }}</p>
    </div>
  </section>
</template>
<style scoped>
.tag-block {
  display: line-block;
  background-color: var(--off-white, rgb(234, 234, 241));
  border-radius: 20px;
  padding: 5px 10px;
  font-family: "Nunito Sans", "Nunito Sans Placeholder", sans-serif;
  font-size: 16px;
  letter-spacing: 0.3px;
  line-height: 1.2em;
  color: var(--dark-gray);
  cursor: pointer;
}
.tag-block:hover {
  background-color: var(--color-secondary);
  color: white;
  transition: all 0.3s ease;
}
.tags-group {
  margin: 20px;
  grid-gap: 20px;
}
.my-description {
  font-family:
    "Nunito Sans", "Nunito Sans Placeholder", "PingFang SC", "Microsoft YaHei",
    "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
  color: rgb(128, 132, 157);
  font-size: 18px;
  line-height: 1.6em;
  margin-top: 16px;
}

.my-info {
  font-family:
    "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei",
    serif;
  color: rgb(71, 71, 71);
  font-size: 52px;
  font-weight: 700;
}

/* Grow Rotate */
.hvr-grow-rotate {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow-rotate:hover,
.hvr-grow-rotate:focus,
.hvr-grow-rotate:active {
  -webkit-transform: scale(1.1) rotate(4deg);
  transform: scale(1.1) rotate(4deg);
}
</style>
