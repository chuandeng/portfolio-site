<script setup lang="ts">
import FlipNote from "./FlipNote.vue";
const colors = [
  "rgb(184, 255, 198)",
  "rgb(255, 163, 163)",
  "rgb(255, 229, 163)",
  "rgb(255, 187, 0)",
  "rgb(205, 163, 255)",
];
// 生成柔和的随机颜色
let colorIndex = -1;
const generatePastelColor = () => {
  // const hue = Math.floor(Math.random() * 360);
  // return `hsl(${hue}, 70%, 85%)`;
  colorIndex++;
  return colors[colorIndex];
};

// 生成随机左右间距 (30-50px)
const generateColumnGap = () => {
  return 30 + Math.random() * 40;
};

interface Note {
  id: number;
  front: string;
  back: string;
  color: string;
  left: number;
  top: number;
}

const cardSize = 130;
const columnGap = generateColumnGap();

// 生成 notes 并计算位置
const generateNotes = (): Note[] => {
  const baseNotes = [
    {
      id: 1,
      front: "about.note1-front",
      back: "about.note1-back",
      color: generatePastelColor(),
      left: 20,
      top: 0,
    },
    {
      id: 2,
      front: "about.note2-front",
      back: "about.note2-back",
      color: generatePastelColor(),
      left: 188,
      top: 50,
    },
    {
      id: 3,
      front: "about.note3-front",
      back: "about.note3-back",
      color: generatePastelColor(),
      left: 0,
      top: 160,
    },
    {
      id: 4,
      front: "about.note4-front",
      back: "about.note4-back",
      color: generatePastelColor(),
      left: 220,
      top: 220,
    },
    {
      id: 5,
      front: "about.note5-front",
      back: "about.note5-back",
      color: generatePastelColor(),
      left: 40,
      top: 330,
    },
  ];
  return baseNotes;
  // return baseNotes.map((note, index) => {
  //   const isLeft = index % 2 !== 0;
  //   const row = Math.floor(index / 2);

  //   const left = isLeft ? 0 : cardSize + columnGap;
  //   const top = isLeft
  //     ? row * (cardSize + rowGap)
  //     : row * (cardSize + rowGap) + rightColumnOffset;

  //   return {
  //     ...note,
  //     color: generatePastelColor(),
  //     rotation: generateRotation(),
  //     left,
  //     top,
  //   };
  // });
};

const notes = generateNotes();

// 计算容器高度
const maxTop = Math.max(...notes.map((n) => n.top));
const containerHeight = maxTop + cardSize;
const containerWidth = cardSize * 2 + columnGap;
</script>

<template>
  <section class="notes-section">
    <SectionHeader :title="$t('about.title')" />

    <div
      class="notes-container"
      :style="{ width: `${containerWidth}px`, height: `${containerHeight}px` }"
    >
      <div
        v-for="note in notes"
        :key="note.id"
        class="note-wrapper"
        :style="{
          left: `${note.left}px`,
          top: `${note.top}px`,
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
