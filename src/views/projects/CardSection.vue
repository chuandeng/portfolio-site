<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string;
    desc?: string;
    videoSrc?: string;
    imgSrc?: string;
    rightClass?: string;
    mainWith?: string;
    rightBg?: string;
    bgWidth?: string;
    titleClass?: string;
  }>(),
  {
    mainWith: "50%",
    bgWidth: "50%",
  },
);
</script>
<template>
  <section
    class="glass-card bg-dot-small mt-10 normal-text !aspect-auto"
    :class="{
      'show-bg': props.rightBg,
    }"
    :style="{
      '--section-bg': `url(${props.rightBg})`,
      '--section-bg-width': props.bgWidth,
    }"
  >
    <div
      class="flex flex-col gap-2"
      :class="[props.titleClass ? props.titleClass : '']"
    >
      <h2 class="text-4xl font-semibold">{{ props.title }}</h2>
      <div v-if="props.desc" class="text-1xl pl-1">{{ props.desc }}</div>
    </div>
    <div class="desc-container flex lg:flex-row max-lg:flex-col mt-10 gap-5">
      <div
        class="desc-info text-base"
        :style="{
          width: props.mainWith,
        }"
      >
        <slot />
      </div>
      <div
        v-if="props.videoSrc || props.imgSrc"
        :class="[
          'grow',
          props.rightClass ? props.rightClass : '',
          {
            'img-container': !!props.imgSrc,
            'video-container': !!props.videoSrc,
          },
        ]"
      >
        <video v-if="props.videoSrc" width="100%" loop muted playsinline>
          <source :src="props.videoSrc" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
        <img v-if="props.imgSrc" :src="props.imgSrc" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.glass-card {
  position: relative;
}
.show-bg {
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--section-bg-width, 50%);
    background-image: var(--section-bg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
}

.desc-container {
  justify-content: space-between;
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  .desc-info {
    flex-shrink: 0;
  }
  .desc-info span {
    color: var(--color-highlight);
  }
}

.video-container {
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 450px;
  height: auto;
  &.width-max {
    width: 600px;
  }
}

video {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.img-container {
  img {
    border-radius: 6px;
    border: 1px solid rgb(128, 132, 157, 0.1);
  }
}
</style>
