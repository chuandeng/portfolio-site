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
        <div class="normal-text">{{ $t("projects.project1.titlePrefix") }}</div>
      </div>
      <h1 class="normal-text text-large">
        {{ $t("projects.project1.title") }}
      </h1>
      <div class="normal-text pt-20 text-info color-secondary">
        <div><b>Role: </b>Product Designer (UE)</div>
        <div><b>Scope: </b>AI workflow, interaction design, system</div>
        <div><b>Platform: </b>Web，IOS, Android</div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>背景和设计目标</h2>
        <div>Designing for both automation and control</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          在企业协作中，业务流程分散在多个系统，<br />
          依赖大量人工操作，效率低且缺乏一致性。<br />
          <br />
          尽管生成式 AI 已具备强大能力，但在实际产品中仍主要作为：<br />
          工具，而非流程参与者。<br />
          <br />
          我们需要构建一套 Agentic AI Workflow System，<br />
          让 AI 从<span>“辅助工具”</span>转变为<span>“流程执行者”</span>，<br />
          同时确保关键决策始终由人掌控。
        </div>
        <div class="video-container">
          <video width="450" loop muted playsinline>
            <source src="@/assets/moxo-ai.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>机会（Opportunity）</h2>
        <div>From AI tools to AI systems</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          本项目的设计机会不在于增加一个 AI 功能，而在于构建一个让 AI
          能够在流程中运作的系统。 为此，我将整体能力拆分为四个核心模块：<br />
          <br />
          <br />
          <ul>
            <li>AI Copilot：用户与 AI 的交互入口</li>
            <li>Multi-Agent System：执行不同任务的 AI 单元</li>
            <li>Tooling：AI 调用的实际能力</li>
            <li>Human-in-the-Loop：保障可控性的机制</li>
          </ul>
          <br />
          <img src="@/assets/opportunity.png" />
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>AI Copilot</h2>
        <div>Bringing AI into the flow</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          AI Copilot 被设计为用户与 AI 的交互入口之一，是流程中的协作助手。
          <br />
          <br />
          设计重点包括：
          <ul>
            <li>将 AI 自然嵌入流程，而非打断用户任务</li>
            <li>基于上下文减少用户输入成本</li>
            <li>提供清晰反馈，使 AI 行为可理解、可预期</li>
          </ul>
        </div>
        <div class="video-container">
          <video width="450" loop muted playsinline>
            <source src="@/assets/ai-copilot.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </section>
    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>多 Agent 系统 (Multi-Agent)</h2>
        <div>Designing a multi-agent system</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          为了支持复杂业务场景，我将 AI 能力拆解为多个具备不同职责的 Agent。
          <br />
          <br />
          Action Agents：执行具体任务，数据提取，文件处理，流程流转等。
          <ul>
            <li>Automation Agent</li>
            <li>Custom Agent</li>
          </ul>

          Assist Agents：<br />
          总结信息，提供建议，帮助用户完成任务。
          <ul>
            <li>Review Agent：判断结果质量</li>
            <li>Advice Agent：提供决策建议</li>
            <li>Prepare Agent：完成信息预填</li>
          </ul>
          <br />
          通过模块化设计，使 AI 能够在流程中被灵活编排，实现协同工作。
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
        <div class="image-container">
          <img src="@/assets/tooling.png" alt="Tooling" />
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
