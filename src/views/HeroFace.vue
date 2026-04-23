<script setup lang="ts">
import "@lottiefiles/lottie-player";
const imageSrc = new URL("../assets/me.json", import.meta.url).href;
</script>
<template>
  <div class="hero-face-container">
    <lottie-player
      class="cursor-pointer"
      autoplay
      loop
      mode="normal"
      :src="imageSrc"
    >
    </lottie-player>
  </div>
</template>
<style scoped>
.hero-face-container {
  width: 400px;
  height: 250px;
}
</style>
