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
      <div class="flex lg:flex-row max-lg:flex-col mt-10 gap-10">
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
        <h2>AI 如何在流程中发挥作用</h2>
        <div>What Moxo AI Actually Does</div>
      </div>
      <div class="mt-10 card-container">
        <div class="card-block">
          <img src="@/assets/card1.png" />
          <div class="card-body">
            <div class="card-title">提前准备工作</div>
            <div class="card-info">
              AI
              自动完成信息收集、表单预填与材料整理，使任务在到达人之前已经完整、可执行。
            </div>
          </div>
        </div>
        <div class="card-block">
          <img src="@/assets/card2.png" />
          <div class="card-body">
            <div class="card-title">提前发现问题</div>
            <div class="card-info">
              AI
              在提交时即时检查完整性、准确性与合规性，在问题影响流程前提前暴露。
            </div>
          </div>
        </div>
        <div class="card-block">
          <img src="@/assets/card3.png" />
          <div class="card-body">
            <div class="card-title">自动流转任务</div>
            <div class="card-info">
              AI
              根据角色与流程自动分配任务，触发后续步骤，确保任务始终在正确的人之间流转。
            </div>
          </div>
        </div>
        <div class="card-block">
          <img src="@/assets/card5.png" />
          <div class="card-body">
            <div class="card-title">预防流程阻塞</div>
            <div class="card-info">
              AI 持续监控流程状态，识别风险与延迟，并主动提醒或升级处理。
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>AI Copilot</h2>
        <div>Bringing AI into the flow</div>
      </div>
      <div class="flex lg:flex-row max-lg:flex-col gap-10 mt-10">
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
        <div class="video-container width-max">
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
      <div class="desc-container flex lg:flex-row max-lg:flex-col gap-10 mt-10">
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
      <div class="desc-container flex lg:flex-row max-lg:flex-col gap-10 mt-10">
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
        <div class="video-container lg:-mt-[120px]">
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
      <div class="desc-container flex lg:flex-row max-lg:flex-col mt-10">
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
        <div class="video-container lg:-mt-[120px]">
          <video width="450" loop muted playsinline>
            <source src="@/assets/human_in_loop.mp4" type="video/mp4" />
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
          <div class="mt-10 card-container">
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">人做决策</div>
                <div class="card-info">
                  AI 推动流程前进，但关键决策始终由人完成
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">AI 预处理行动</div>
                <div class="card-info">
                  所有任务在到达人之前，已完成准备、校验与整理
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">基于角色的治理机制</div>
                <div class="card-info">
                  AI Agent 仅在其角色权限范围内执行操作
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">效率与控制并存</div>
                <div class="card-info">
                  AI 提升流程效率，同时人仍对最终结果负责
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 text-xl font-bold">“AI 负责执行，人负责决策 ”</div>
          <div class="flex m-1 mb-2">
            <div>AI Agents（准备 / 执行 / 校验）</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <div>人类决策层</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
              ></path>
            </svg>
            <div>最终结果</div>
          </div>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>AI Governance</h2>
        <div>Al that adapts to your processes, rules, and playbooks</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          <p>
            Moxo AI 并不是自由运行的智能体，而是基于企业真实运作方式进行适配：
          </p>
          <p>包括流程、角色、权限、规则与审批逻辑。</p>
          <p>AI 在关键决策之外推动流程执行， 但始终在既定规则与边界内运行。</p>
          <br />
          <div class="mt-10 card-container">
            <div class="card-block border-box">
              <img src="@/assets/flow_img_1.svg" class="card-icon" />
              <div class="card-body">
                <div class="card-title">理解业务流程</div>
                <div class="card-info">
                  AI 学习流程步骤、角色分工与执行规则，确保行为符合既定 playbook
                </div>
              </div>
            </div>
            <div class="card-block border-box">
              <img src="@/assets/flow_img_2.svg" class="card-icon" />

              <div class="card-body">
                <div class="card-title">遵循规则与权限</div>
                <div class="card-info">
                  Agent 始终遵守权限控制、合规要求与升级路径
                </div>
              </div>
            </div>
            <div class="card-block border-box">
              <img src="@/assets/flow_img_3.svg" class="card-icon" />

              <div class="card-body">
                <div class="card-title">知道何时执行、何时等待</div>
                <div class="card-info">
                  AI 自动推进标准流程，但在关键节点暂停，交由人工处理
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>系统反馈与透明性</h2>
        <div>让 AI 行为可见、可理解</div>
      </div>
      <div class="desc-container flex lg:flex-row max-lg:flex-col mt-10">
        <div class="desc-info">
          AI系统往往具有“黑盒”特征，用户难以理解当前状态与执行过程。
          <br />
          我们需要构建统一的系统反馈机制，使 AI 执行过程清晰可见：
          <ul>
            <li>状态可视化（未开始 / 执行中 / 已完成 / 失败）</li>
            <li>明确提示与下一步操作</li>
            <li>支持多 Agent 的状态同步展示</li>
          </ul>
        </div>
        <div class="video-container lg:-mt-[120px]">
          <video width="450" loop muted playsinline>
            <source src="@/assets/human_in_loop.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>Live Workflow</h2>
      </div>
      <div class="flex flex-col mt-10">
        <div class="desc-info">
          AI Agent
          与人工在同一流程中协同工作，实现任务的自动推进与关键节点的人工决策。
          <br />
        </div>
        <div class="w-fit mt-10">
          <video width="100%" loop muted playsinline>
            <source src="@/assets/live_workflow.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>AI 驱动的业务成果</h2>
        <div>Outcomes, Not Features</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          Moxo
          的设计基于一个简单但关键的原则：关键决策必须由人来判断，并由人承担责任。
          AI Agent 负责推动流程，但不会取代决策者。
          <br />
          <div class="mt-10 card-container">
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">2.6x 效率提升</div>
                <div class="card-info">
                  流程平均完成速度提升 2.6 倍，显著缩短任务交付周期。
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">744 项流程任务自动完成</div>
                <div class="card-info">
                  AI Agents 累计完成 744 次任务执行，减少重复人工操作。
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">24 → 79 个活跃流程</div>
                <div class="card-info">
                  启用 AI 的业务流程数量增长超 3 倍，覆盖更多业务场景。
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 card-container">
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">每月新增 5–10 条业务线</div>
                <div class="card-info">
                  通过更高效的流程响应与协作体验，持续带来新增机会。
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">42.3% 转化率</div>
                <div class="card-info">
                  AI 驱动的自然流程转化表现优于传统付费获客路径。
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">51K → 375K 流程处理量</div>
                <div class="card-info">
                  系统支撑的业务处理规模快速增长，具备良好扩展能力。
                </div>
              </div>
            </div>
          </div>
          <div class="flex mt-10 text-sm">
            <div>
              通过将重复执行交给 AI，将关键判断保留给人，Moxo AI
              在效率、增长与可控性之间建立了可持续的业务价值模型。
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="glass-card bg-dot-small mt-10 normal-text">
      <div class="summary">
        <h2>设计反思与扩展</h2>
        <div>Designing for Human + AI Collaboration</div>
      </div>
      <div class="desc-container mt-10">
        <div class="desc-info">
          <div class="flex items-center gap-[10px] mb-[10px]">
            <IconMiaozhun />核心收获
          </div>
          <div class="card-container">
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">信任是 AI 产品的核心</div>
                <div class="card-info">
                  用户是否采纳
                  AI，取决于是否理解其行为，并能够在关键时刻进行控制
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">自动化必须与控制并存</div>
                <div class="card-info">
                  效率提升的前提，是用户始终掌握关键决策权
                </div>
              </div>
            </div>
            <div class="card-block">
              <div class="card-body">
                <div class="card-title">可解释性决定可用性</div>
                <div class="card-info">
                  只有当 AI 行为可见、可理解时，用户才会真正依赖系统
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col mt-10 text-sm gap-[10px]">
            <div class="flex items-center gap-[10px]">
              <IconMiaozhun />设计转变（Design Shift）
            </div>
            <div>
              <ul>
                <li>从「用户操作」到「系统协同」</li>
                <li>从「界面设计」到「流程设计」</li>
                <li>从「功能设计」到「规则与机制设计」</li>
              </ul>
            </div>
          </div>
          <div class="flex mt-10 text-sm flex-col gap-[10px]">
            <div class="flex items-center gap-[10px]">
              <IconBook />可优化方向
            </div>
            <div>
              <ul>
                <li>提供更直观的流程可视化能力</li>
                <li>降低复杂配置的学习成本</li>
                <li>引入更智能的默认策略，减少用户决策负担</li>
              </ul>
            </div>
          </div>
          <div class="flex mt-10 text-sm items-center justify-center">
            <IconStart></IconStart>
            <span>人与 AI 的协作方式，将成为下一代 UX 的核心命题</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.project-detail {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.card-container {
  display: flex;
  grid-gap: 20px;
  width: 100%;
  overflow: hidden;
  .card-title {
    font-size: 16px;
    font-weight: 600;
  }
  .card-info {
    font-size: 14px;
  }
  .card-block {
    flex: 1;
    img {
      width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      &.card-icon {
        width: 60px;
      }
    }
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    &.border-box {
      padding: 20px;
    }
  }
  .card-body {
    padding: 20px 10px;
  }
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
  p {
    margin-bottom: 10px;
  }
}
</style>
