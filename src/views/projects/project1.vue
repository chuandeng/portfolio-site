<template>
  <div class="project-detail">
    <section class="glass-card bg-dot-small mt-10">
      <h1>{{ $t("projects.item1-title") }}</h1>
      <p>{{ $t("projects.item1-desc") }}</p>
      <div>
        <div><b>Role: </b>Product Designer (UE)</div>
        <div><b>Scope: </b>AI workflow, interaction design, system</div>
        <div><b>design Duration: </b>2025.04-2026.05</div>
        <div><b>Platform: </b>Web，IOS, Android</div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10">
      <div>
        <div>背景和设计目标</div>
        <p>Designing for both automation and control</p>
      </div>
      <div class="desc-container">
        <div class="desc-info">
          <p>
            在企业协作场景中，业务流程通常涉及客户沟通、文件处理、审批决策等多个环节。这些流程往往分散在不同系统中，依赖大量人工操作，导致效率低下且缺乏一致性。生成式
            AI
            虽然具备强大的理解与生成能力，但在实际产品中仍主要以“工具”的形式存在，缺乏与真实业务流程的深度结合，难以参与任务执行与流程推进。
            本项目的核心目标是构建一套 AI
            工作流体系，在提升自动化能力的同时，确保用户对关键决策的掌控。
          </p>
          <div class="mt-10">
            具体目标包括：
            <ul>
              <li>拆分“人类决策”与“重复任务”</li>
              <li>让 AI 能够参与流程执行，而非仅提供辅助</li>
              <li>提供可配置、可理解的 AI 行为机制</li>
              <li>在自动化效率与人为控制之间建立平衡</li>
            </ul>
          </div>
        </div>
        <div class="video-container">
          <video controls width="450" autoplay="true" loop="true">
            <source src="@/assets/moxo-ai.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
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
  .desc-info {
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
</style>
