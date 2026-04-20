<script setup lang="ts">
const props = defineProps<{
  title: string;
  desc: string;
  videoSrc?: string;
  imgSrc?: string;
  rightClass?: string;
  videoWidth?: 450;
}>();
</script>
<template>
  <section class="glass-card bg-dot-small mt-10 normal-text">
    <div class="flex flex-col gap-2">
      <h2 class="text-4xl font-semibold">{{ props.title }}</h2>
      <div class="text-1xl pl-1">{{ props.desc }}</div>
    </div>
    <div class="desc-container flex lg:flex-row max-lg:flex-col mt-10">
      <div class="desc-info text-base">
        <slot />
      </div>
      <div
        :class="[
          props.rightClass ? props.rightClass : '',
          {
            'img-container': !!props.imgSrc,
            'video-container': !!props.videoSrc,
          },
        ]"
      >
        <video
          v-if="props.videoSrc"
          :width="props.videoWidth"
          loop
          muted
          playsinline
        >
          <source :src="props.videoSrc" type="video/mp4" />
          您的浏览器不支持视频播放。
        </video>
        <img v-if="props.imgSrc" :src="props.imgSrc" />
      </div>
      <div v-if="props.imgSrc" class="img-container"></div>
    </div>
  </section>
</template>
<style lang="scss">
.glass-card {
  aspect-ratio: 1.77778 / 1;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.05) 0px 10px 40px 0px;
  display: flex;
  flex: 0 0 auto;
  flex-flow: column;
  gap: 10px;
  padding: 40px 60px;
  min-width: 768px;
}
.bg-dot-small {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle fill='rgb(234, 234, 241)' cx='10' cy='10' r='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-position: 10px 10px;
}
.desc-container {
  justify-content: space-between;
  ul {
    list-style-type: disc;
    margin-left: 20px;
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
</style>
