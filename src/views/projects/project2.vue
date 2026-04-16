<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const videos = document.querySelectorAll(".project-detail video");
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 },
  );

  videos.forEach((video) => observer?.observe(video));
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div class="project-detail">
    <section class="glass-card bg-dot-small padding30">
      <div class="project-title">
        <img src="@/assets/moxo-logo.png" />
        <div class="normal-text">{{ $t("projects.project2.titlePrefix") }}</div>
      </div>
      <h1 class="normal-text text-large">
        {{ $t("projects.project2.title") }}
      </h1>
      <div class="normal-text pt-20 text-info color-secondary">
        <div><b>Role: </b>Product Designer (UE)</div>
        <div><b>Scope: </b>AI workflow, interaction design, system</div>
        <div><b>Platform: </b>Web，IOS, Android</div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>Introduction</h2>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          <p class="text-lg mb-4">
            When I joined inVibe Labs, the web app was
            <span class="text-blue-600">mainly in dark mode</span> and used a
            <span class="text-blue-600">simple style guide</span>, leading to
            <span class="text-red-500">inconsistent styles</span> and a
            <span class="text-red-500">less intuitive user experience</span>.
          </p>
          <p class="text-lg mb-4">
            This prompted an opportunity to
            <span class="text-blue-600">overhaul the design system</span> to
            better meet our users' needs.
          </p>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>Objectives</h2>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          <p class="text-lg mb-4">
            My arrival at inVibe coincided with an increasing demand for a
            design system that could support not just current needs but also
            future growth.
          </p>
          <p class="text-lg mb-4">
            We <span class="text-blue-600">had the basics</span>—color styles,
            typography, and drop shadows, spacing—but we
            <span class="text-blue-600"
              >needed a structure that could scale</span
            >.
          </p>
          <p class="text-lg mb-4">
            My initial goal was to
            <span class="text-blue-600">create a design system</span> that not
            only
            <span class="text-blue-600"
              >improved design consistency across our projects</span
            >
            but also
            <span class="text-blue-600">facilitated better workflow</span> among
            the teams.
          </p>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>Laying the Foundations</h2>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          <p class="text-lg mb-4">
            We started by examining our existing components and pages, creating
            a minimal yet scalable structure. This included three main files:
          </p>
          <ul class="text-lg mb-4 space-y-2">
            <li>
              <span class="text-blue-600 font-bold">Foundations:</span> Basic
              elements like colors, typography, icons, shadows, and spacing.
            </li>
            <li>
              <span class="text-blue-600 font-bold">Components:</span> Reusable
              UI elements such as checkboxes, toasts, and forms.
            </li>
            <li>
              <span class="text-blue-600 font-bold"
                >Project-Specific Components</span
              >
              (experimental): Commonly used components in our projects that we
              standardized for consistency across files.
            </li>
          </ul>
          <p class="text-lg mb-4">
            This foundational work set the stage for more significant changes.
          </p>
        </div>
      </div>
    </section>
    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>Laying the Foundations</h2>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          We started by examining our existing components and pages, creating a
          minimal yet scalable structure. This included three main files:
          <br />
          <br />
          Foundations: Basic elements like colors, typography, icons, shadows,
          and spacing. Components: Reusable Ul elements such as checkboxes,
          toasts, and forms. Project-Specific Components (experimental):
          Commonly used components in our projects that we standardized for
          consistency across files.
          <br />
          <br />This foundational work set the stage for more significant
          changes.
        </div>
        <div class="image-container">
          <img src="@/assets/mutiple-agents.png" alt="Multiple Agents" />
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>Tooling</h2>
        <div>Turning AI into an operator</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          为了让 AI 能够真正“执行任务”，我设计了一套 Tooling 机制，使 Agent
          可以调用实际业务能力：
          <br />
          <ul>
            <li>文件处理与管理</li>
            <li>数据操作</li>
            <li>第三方系统集成</li>
          </ul>
          <br />
          设计重点在于将复杂能力抽象为标准化接口，同时保持灵活性与可扩展性。
          <br />
          通过模块化设计，使 AI 能够在流程中被灵活编排，实现协同工作。
        </div>
        <div class="video-container">
          <video width="450" loop muted playsinline>
            <source src="@/assets/Tooling.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>Human-in-the-Loop</h2>
        <div>Balancing automation with human control</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          在关键节点引入 Human-in-the-Loop 机制，使用户能够对 AI
          的行为进行干预与控制。
          <br />
          支持多种触发方式：
          <ul>
            <li>基于置信度</li>
            <li>基于规则条件</li>
            <li>强制人工审核</li>
          </ul>

          该设计在提升效率的同时，确保流程的可靠性与安全性。
        </div>
        <div class="video-container">
          <video width="450" loop muted playsinline>
            <source src="@/assets/Tooling.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>以人为核心的责任设计</h2>
        <div>Human Accountability by Design</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          Moxo
          的设计基于一个简单但关键的原则：关键决策必须由人来判断，并由人承担责任。
          AI Agent 负责推动流程，但不会取代决策者。
          <br />
          <div class=""></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.project-detail {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

p {
  margin-bottom: 2rem;
  color: #666;
}
.desc-container {
  display: flex;
  grid-gap: 30px;
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
}

video {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.project-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  grid-gap: 30px;
  img {
    width: 60px;
  }
  div {
    flex-grow: 1;
    font-size: 60px;
    font-weight: 700;
  }
}
.padding30 {
  padding: 80px;
}
.text-info {
  font-size: 24px;
}
.summary {
  h2 {
    font-size: 40px;
    font-weight: 600;
  }
  div {
    font-size: 16px;
    font-weight: 400;
  }
}
.desc-info {
  font-size: 16px;
  font-weight: 400;
}
</style>
