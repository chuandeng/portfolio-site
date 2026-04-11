<script setup lang="ts">
import FlipNote from "./FlipNote.vue";

// 生成柔和的随机颜色
const generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 85%)`;
};

// 生成随机旋转角度 (-20 到 20 度)
const generateRotation = () => {
  return (Math.random() - 0.5) * 40;
};

// 生成随机左右间距 (30-50px)
const generateColumnGap = () => {
  return 30 + Math.random() * 20;
};

interface Note {
  id: number;
  front: string;
  back: string;
  color: string;
  rotation: number;
  left: number;
  top: number;
}

const cardSize = 130;
const rowGap = 34;
const leftColumnOffset = 50;
const columnGap = generateColumnGap();

// 生成 notes 并计算位置
const generateNotes = (): Note[] => {
  const baseNotes = [
    { id: 1, front: "about.note1-front", back: "about.note1-back" },
    { id: 2, front: "about.note2-front", back: "about.note2-back" },
    { id: 3, front: "about.note3-front", back: "about.note3-back" },
    { id: 4, front: "about.note4-front", back: "about.note4-back" },
    { id: 5, front: "about.note5-front", back: "about.note5-back" },
    { id: 6, front: "about.note6-front", back: "about.note6-back" },
  ];

  return baseNotes.map((note, index) => {
    const isLeft = index % 2 === 0;
    const row = Math.floor(index / 2);
    
    const left = isLeft ? 0 : cardSize + columnGap;
    const top = isLeft ? leftColumnOffset + row * (cardSize + rowGap) : row * (cardSize + rowGap);
    
    return {
      ...note,
      color: generatePastelColor(),
      rotation: generateRotation(),
      left,
      top,
    };
  });
};

const notes = generateNotes();

// 计算容器高度
const maxTop = Math.max(...notes.map(n => n.top));
const containerHeight = maxTop + cardSize;
const containerWidth = cardSize * 2 + columnGap;
</script>

<template>
  <section class="notes-section">
    <SectionHeader :title="$t('about.title')" />
    <div class="notes-container" :style="{ width: `${containerWidth}px`, height: `${containerHeight}px` }">
      <div
        v-for="note in notes"
        :key="note.id"
        class="note-wrapper"
        :style="{
          left: `${note.left}px`,
          top: `${note.top}px`,
          transform: `rotate(${note.rotation}deg)`
        }"
      >
        <FlipNote :color="note.color">
          <template #front>
            <h3>{{ $t(note.front) }}</h3>
          </template>
          <template #back>
            <h3>{{ $t(note.back) }}</h3>
          </template>
        </FlipNote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.notes-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
}

.notes-container {
  position: relative;
  margin-top: 30px;
}

.note-wrapper {
  position: absolute;
  width: 130px;
  height: 130px;
  transition: transform 0.3s ease;
}

.note-wrapper:hover {
  z-index: 10;
}
</style>
