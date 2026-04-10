<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section
    class="justify-center mt-30 flex flex-col items-center text-center project-section"
  >
    <SectionHeader :title="$t('about.title')" />
  </section>
</template>
