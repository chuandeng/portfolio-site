<script setup>
import { ref, computed, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();

const home = ref({
  icon: "pi pi-home",
  label: t("nav.home"),
});
const items = computed(() => {
  return [
    {
      label: t("projects.title"),
    },
  ];
});

// 根据路由参数动态导入项目组件
const projectId = computed(() => route.params.id);
const ProjectContent = computed(() => {
  if (!projectId.value) return null;
  return defineAsyncComponent(
    () => import(`@/views/projects/${projectId.value}.vue`),
  );
});
</script>

<template>
  <Breadcrumb :home="home" :model="items" />

  <!-- 动态渲染对应的项目组件 -->
  <component :is="ProjectContent" v-if="ProjectContent" />
</template>
