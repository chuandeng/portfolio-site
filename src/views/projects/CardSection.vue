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
    imgBorder?: boolean;
  }>(),
  {
    imgBorder: true,
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
      '--section-bg': props.rightBg ? `url(${props.rightBg})` : '',
      '--section-bg-width': props.bgWidth,
    }"
  >
    <div
      class="flex flex-col gap-1"
      :class="[props.titleClass ? props.titleClass : '']"
    >
      <h2 class="text-4xl font-semibold">{{ props.title }}</h2>
      <div v-if="props.desc" class="text-1xl pl-1">{{ props.desc }}</div>
    </div>
    <div class="desc-container flex lg:flex-row max-lg:flex-col mt-8 gap-5">
      <div
        class="desc-info text-sm"
        :style="{
          width: props.mainWith,
        }"
      >
        <slot />
      </div>
      <div
        v-if="props.videoSrc || props.imgSrc"
        :class="[
          'grow flex justify-center',
          {
            'img-container': !!props.imgSrc,
            'video-container': !!props.videoSrc,
          },
        ]"
      >
        <video
          v-if="props.videoSrc"
          loop
          muted
          playsinline
          :class="props.rightClass ? props.rightClass : ''"
        >
          <source :src="props.videoSrc" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
        <img
          v-if="props.imgSrc"
          :src="props.imgSrc"
          :class="[
            props.rightClass ? props.rightClass : '',
            { 'img-border': props.imgBorder },
          ]"
        />
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

  height: auto;
  > video {
    border-radius: 5px;
    display: block;
    max-height: 648px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}
.img-border {
  border: 1px solid rgb(128, 132, 157, 0.1);
}
.img-container {
  > img {
    border-radius: 6px;
    max-height: fit-content;
  }
}
</style>
