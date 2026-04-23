<script setup lang="ts">
import moxoLogo from "@/assets/moxo-logo.png";

const props = withDefaults(
  defineProps<{
    title: string;
    desc?: string;
    scope?: string;
    role?: string;
    platform?: string;
    logo?: string;
  }>(),
  {
    logo: moxoLogo,
    scope: "AI workflow, interaction design, system",
    role: "Product Designer (UE)",
    platform: "Web，IOS,  Android, SDK",
  },
);
</script>
<template>
  <section class="glass-card cover-card bg-dot-small padding30">
    <div>
      <div class="project-title mb-3">
        <div class="normal-text text-5xl">{{ props.title }}</div>
      </div>
      <h1 class="normal-text text-4xl leading-12">
        {{ props.desc }}
      </h1>
    </div>
    <div class="normal-text text-info color-secondary">
      <div><b>Role: </b>{{ props.role }}</div>
      <div><b>Scope: </b>{{ props.scope }}</div>
      <div><b>Platform: </b>{{ props.platform }}</div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.project-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  grid-gap: 30px;
  img {
    width: 60px;
  }
  div {
    flex-grow: 1;
    font-size: 60px;
    font-weight: 700;
  }
}
</style>
