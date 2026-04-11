<script setup lang="ts">
import project1Img from "@/assets/project1.png";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const projets = computed(() => [
  {
    id: 1,
    title: t("projects.item1-title"),
    description: t("projects.item1-desc"),
    image: project1Img,
  },
  {
    id: 2,
    title: t("projects.item2-title"),
    description: t("projects.item2-desc"),
    image: project1Img,
  },
]);
</script>
<template>
  <section
    class="justify-center mt-80 flex flex-col items-center text-center project-section"
  >
    <SectionHeader :title="$t('projects.title')" />
    <div class="project-item" v-for="item in projets" :key="item.id">
      <div class="projet-item-inner">
        <div class="project-item-img">
          <img :src="item.image" class="w-full max-w-2xl rounded-lg mb-8" />
        </div>
        <div class="project-info">
          <h3 class="my-info">{{ item.title }}</h3>
          <p class="my-description">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.project-section {
  display: flex;
  grid-gap: 50px;
}
.project-item {
  max-width: 700px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  .projet-item-inner {
    display: flex;
    flex-direction: row;
    grid-gap: 30px;
    border: 1px solid transparent;
    border-radius: 15px;
    transition: all 0.5s ease;
  }
  .project-item-img {
    transition: all 0.3s ease;
    width: 268px;
    height: 268px;
    border-radius: 18px;
    display: inline-block;
    flex-shrink: 0;
    padding: 10px;
    overflow: hidden;
  }
  &:hover {
    border-color: var(--color-highlight);
    .projet-item-inner {
      border-color: var(--color-highlight);
    }
    .project-item-img {
      padding: 0px;
    }
    img {
      zoom: 1.2;
    }
  }
}

.project-item-img img {
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px;
}
.project-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-right: 20px;

  align-items: flex-start;
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 16px;
  height: 252px;
  justify-content: center;
  overflow: visible;
  padding-right: 20px;
  position: relative;
}
.project-info h3 {
  font-family:
    Solway, "Solway Placeholder", "PingFang SC", "Microsoft YaHei",
    "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif, serif;
  color: var(--color-primary);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2em;
}
.my-description {
  font-size: 18px;
  line-height: 27px;
}

// 响应式：屏幕小于 780px
@media (max-width: 780px) {
  .project-item {
    width: 284px;
    .projet-item-inner {
      flex-direction: column;
      grid-gap: 16px;
    }

    .project-item-img {
      width: 100%;
      height: auto;
      padding: 16px 16px 0;

      img {
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        object-fit: cover;
      }
    }
  }

  .project-info {
    height: auto;
    padding: 0 16px 16px;
    text-align: center;
    align-items: center;

    h3 {
      font-size: 22px;
    }
  }

  .my-description {
    display: none;
  }
}
</style>
