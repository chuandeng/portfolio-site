<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const props = defineProps<{
  color?: string;
}>();

// 将 HSL 颜色变淡30%（增加亮度）
const fadedColor = computed(() => {
  if (!props.color) return undefined;

  // 解析 HSL: hsl(hue, saturation%, lightness%)
  const match = props.color.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
  if (!match) return props.color;

  const h = match[1];
  const s = match[2];
  const l = parseFloat(match[3]);

  // 增加亮度30%，但不超过95%
  const newL = Math.min(l + 30, 95);

  return `hsl(${h}, ${s}%, ${newL}%)`;
});

const hasNoShadow = ref(false);
let timeoutId: ReturnType<typeof setTimeout> | null = null;

const onMouseEnter = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  hasNoShadow.value = true;
};

const onMouseLeave = () => {
  timeoutId = setTimeout(() => {
    hasNoShadow.value = false;
  }, 300);
};
</script>
<template>
  <div
    class="flip-container"
    :class="[locale, { 'no-shadow': hasNoShadow }]"
    @click="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="flipper">
      <div
        class="front normal-text"
        :style="color ? { backgroundColor: color } : undefined"
      >
        <slot name="front" />
      </div>
      <div
        class="back normal-text"
        :style="fadedColor ? { backgroundColor: fadedColor } : undefined"
      >
        <slot name="back" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  -ms-transform: perspective(1000px);
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-container,
.front,
.back {
  width: 130px;
  height: 130px;
}

.front,
.back {
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  text-align: center;
}

.back {
  color: var(--color-primary);
  padding: 10px;
  font-size: 12px;
  line-height: 12px;
}

span .h3,
.back h3 {
  text-transform: uppercase;
}

.front h3 {
  font-weight: normal;
  margin-top: 0;
}

.front h3:after {
  content: "";
  height: 2px;
  width: 20px;
  display: block;
  margin: 8px auto;
}

.block-content {
  padding: 8px;
}

/* flip speed goes here */
.flipper {
  transition: 0.4s;
  transform-style: preserve-3d;

  position: relative;
}
.zh-CN {
  .front,
  .back {
    font-size: 14px;
  }
}

/* hide back of pane during swap */
.front,
.back {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
}

/*  UPDATED! front pane, placed above back */
.front {
  z-index: 2;
  transform: rotateY(0deg);
  font-size: 16px;
}

/* back, initially hidden pane */
.back {
  transform: rotateY(-180deg);
  font-size: 14px !important;
  line-height: 16px !important;
}
.no-shadow {
  box-shadow: none !important;
}
/*  UPDATED! flip the pane when hovered */

.flip-container:hover .back {
  transform: rotateY(0deg);
}
.flip-container:hover .front {
  transform: rotateY(180deg);
}
</style>
