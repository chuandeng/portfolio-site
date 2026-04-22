<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import img1 from "@/assets/project3-img1.png";
import project2Img2 from "@/assets/project3-img2.png";
import project2Img3 from "@/assets/project3-img3.png";
import project2Img4 from "@/assets/project3-img4.png";
import project2Img5 from "@/assets/project3-img5.png";
import project2Bg1 from "@/assets/project3-bg1.png";

import ciscoLogo from "@/assets/cisco-logo.png";
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
    <CoverSection
      :logo="ciscoLogo"
      title="Design System Evolution with Design Tokens"
      desc="Business Orchestration Platform"
      scope="AI workflow, interaction design, system"
    />
    <CardSection
      title="项目背景"
      :img-src="img1"
      main-with="40%"
      right-class="w-sm"
      :img-border="false"
    >
      <div class="flex flex-col gap-10">
        <div>
          随着产品规模增长，原有样式指南已无法支撑复杂产品需求，界面逐渐出现体验不一致、维护低效与扩展受限的问题。
        </div>
        <div>
          当我加入团队时，产品正进入快速扩张阶段，新的业务线、多端体验与品牌定制需求同步增长，原有设计方式已成为增长瓶颈。
        </div>
        <div>这催生了一个彻底重构设计系统的机会，以更好地满足用户需求。</div>
        <div>
          我们已具备基础要素，颜色样式、排版、投影、间距，但需要一个可扩展的结构。
        </div>
        <div>
          我的初始目标是创建一个设计系统，不仅要改善跨项目的设计一致性，还要促进团队间更好的工作流程。
        </div>
      </div>
    </CardSection>
    <CardSection title="设计痛点" main-with="100%">
      <div class="flex flex-col items-center">
        <div class="mt-5 arrow-list flex flex-col gap-4 w-lg">
          <div class="flex flex-row items-start gap-4">
            <IconArrowRight class="shrink-0" />
            <div>
              <h3 class="text-base font-semibold">体验不一致</h3>
              <span class="text-sm text-gray-500"
                >设计与代码之间缺乏单一真实来源，同一按钮、输入框、卡片，在不同页面存在多个版本，无法保持一致性。</span
              >
            </div>
          </div>
          <div class="flex flex-row items-start gap-4">
            <IconArrowRight class="shrink-0" />
            <div>
              <h3 class="text-base font-semibold">维护成本高</h3>
              <span class="text-sm text-gray-500"
                >颜色、阴影、间距散落在设计稿和代码中，修改一次需要多处同步。不可扩展，更新和维护花费大量时间。</span
              >
            </div>
          </div>
          <div class="flex flex-row items-start gap-4 mb-30">
            <IconArrowRight class="shrink-0" />
            <div>
              <h3 class="text-base font-semibold">协作问题多</h3>
              <span class="text-sm text-gray-500"
                >开发常要猜测设计意图，没有明确规则。</span
              >
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection
      title="架构定义"
      :img-border="false"
      :img-src="project2Img2"
      main-with="40%"
    >
      <div class="flex flex-col gap-10">
        <div>
          我们从审查现有组件和页面开始，创建了一个最小但可扩展的结构。这包括三个主要文件：
        </div>
        <div class="flex flex-row gap-4">
          <div>
            <h3 class="text-base font-semibold">基础层（Foundations）</h3>
            <span class="text-sm text-gray-500"
              >基本元素，如颜色、排版、图标、投影和间距。这是整个系统的"元数据"，所有上层组件都从这里派生，确保一处修改、全局同步。</span
            >
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <div>
            <h3 class="text-base font-semibold">
              通用组件（Gloabl Components）
            </h3>
            <span class="text-sm text-gray-500"
              >按钮、复选框、Toast、表单等跨项目复用的 UI 模块。从 Foundations
              获取属性，不允许随意突破规范。</span
            >
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <div>
            <h3 class="text-base font-semibold">
              项目专属组件（Project-Specific）
            </h3>
            <span class="text-sm text-gray-500"
              >针对特定业务场景的实验性模块，我们对其进行了标准化，受
              Foundations 约束。</span
            >
          </div>
        </div>
        <div class="mb-10">
          这套分层结构既保持了系统的统一性，也为后续引入 Design Token
          和更复杂的组件变体管理，打下了可扩展的地基。
        </div>
      </div>
    </CardSection>
    <CardSection
      title="真实项目中验证设计系统"
      :right-bg="project2Bg1"
      main-with="40%"
    >
      <div class="flex gap-5 flex-col">
        <div>
          设计系统真正进入快速发展阶段，是在新项目启动之后。该项目需要在较短周期内完成全新的视觉体验升级，这成为推动设计系统升级的重要契机。
        </div>
        <div>
          我们快速验证了系统价值：
          <ul class="list-disc pl-6">
            <li>提升交付效率</li>
            <li>保持跨页面一致性</li>
            <li>加速旧页面升级</li>
            <li>减少重复设计投入</li>
          </ul>
        </div>
        <div>系统的价值，只有在真实业务压力下才会被证明。</div>
      </div>
    </CardSection>
    <CardSection
      title="引入 Design Token"
      :img-src="project2Img3"
      :img-border="false"
      main-with="50%"
    >
      <div class="flex flex-col gap-6">
        <div>
          随着 Figma Variables 发布，我们正式将 Design Token 引入系统。
          建立了一套简洁但可扩展的 Token 体系，并逐步覆盖全产品体验。
        </div>

        <div class="gap-4">
          <h3 class="text-base font-semibold">单一真实来源</h3>
          <span class="text-sm text-gray-500"
            >设计与开发共享统一变量体系。</span
          >
        </div>
        <div class="gap-4">
          <h3 class="text-base font-semibold">提升效率</h3>
          <span class="text-sm text-gray-500">新页面搭建速度显著提升。</span>
        </div>
        <div class="gap-4">
          <h3 class="text-base font-semibold">更顺畅协作</h3>
          <span class="text-sm text-gray-500"
            >减少设计还原偏差与沟通成本。</span
          >
        </div>
        <div class="gap-4">
          <h3 class="text-base font-semibold">一键切换 Light / Dark Mode</h3>
          <span class="text-sm text-gray-500"
            >主题切换由页面级调整升级为系统级切换。</span
          >
        </div>
        <div class="gap-4">
          <h3 class="text-base font-semibold">支持未来品牌扩展</h3>
          <span class="text-sm text-gray-500">为多客户品牌定制预留能力</span>
        </div>
      </div>
    </CardSection>
    <CardSection title="从变量到 Token：跨平台设计语言的统一" main-with="100%">
      <div class="flex flex-col gap-6">
        <p>
          Design Token
          是一种将设计决策（颜色、字体、间距等）抽象为命名变量的实践。
          它让设计定义可以跨平台（Figma / Web / iOS /
          Android）保持一致，且易于集中更新。
        </p>

        <p>
          Figma Variables 是 Token 在设计工具中的子集呈现。真正的 Token
          体系需要贯通：
        </p>
        <ul class="list-disc pl-6">
          <li>设计侧（Figma 变量）</li>
          <li>代码侧（CSS / Tailwind 变量）</li>
          <li>生产侧（构建后的样式表）</li>
        </ul>

        <img :src="project2Img4" />
      </div>
    </CardSection>
    <CardSection title="挑战：让设计系统真正被开发采用" main-with="100%">
      <div class="flex flex-row gap-4">
        <div class="flex flex-col w-1/2 gap-4">
          <div>
            建立 Token
            体系只是成功的一半。真正的挑战在于，如何让研发团队理解新的规则，并顺利融入现有开发流程。
          </div>
          <div>
            我们的解决方式：
            <div class="text-base font-semibold">
              建立从设计到代码的映射关系
            </div>
            <div>
              让设计变量能够直接对应代码变量，减少二次翻译与实现偏差。例如：
            </div>
            <div>
              Design Token <br />
              → <span class="text-blue-500">color.brand.primary</span> CSS
              Variable →
              <span class="text-blue-500">var(--mx-color.brand-primary)</span>
            </div>
          </div>
          <div class="text-base font-semibold">开展交付与培训机制</div>
          <div>
            组织设计与研发的会议，确保设计与研发在同一认知体系内协作。
            <ul class="list-disc pl-6">
              <li>新 Token 命名规则</li>
              <li>组件使用方式</li>
              <li>更新 Token 后如何自动同步</li>
            </ul>
          </div>
          <div>
            除了系统设计本身，我也承担了跨团队推动者的角色，在设计语言与工程语言之间建立桥梁。
          </div>
        </div>
        <div class="w-1/2 flex justify-center items-center">
          <img :src="project2Img5" style="width: 332px; height: 280px" />
        </div>
      </div>
    </CardSection>
    <CardSection title="无障碍考量" main-with="100%">
      <div class="flex flex-col items-start gap-6">
        <div>
          我们将无障碍设计融入设计系统，以使其尽可能适用于更多用户。我们在设计中考虑的一些高影响、低投入的实践包括：
        </div>
        <div class="flex flex-row gap-4 w-full">
          <div class="w-1/4">
            <h3 class="text-base font-semibold">对比度</h3>
            <div>
              <ul class="list-disc pl-6">
                <li>WCAG 2.1 AA 标准</li>
                <li>常规文本：4.5:1</li>
                <li>大字号文本：3:1</li>
              </ul>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-base font-semibold">导航</h3>
            <div>
              <ul class="list-disc pl-6">
                <li>可聚焦组件</li>
                <li>跳过链接快捷键</li>
              </ul>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-base font-semibold">语义层命名</h3>
            <div class="tag-list">
              <code>&lt;header&gt;</code><br />
              <code>&lt;nav&gt;</code><br />
              <code>&lt;main&gt;</code><br />
              <code>&lt;section&gt;</code><br />
              <code>&lt;footer&gt;</code>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-base font-semibold">其他</h3>
            <div>
              <ul class="list-disc pl-6">
                <li>工具提示（Tooltips）</li>
                <li>帮助文本（Help text）</li>
                <li>表单标签（Labels for form）</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold">我们用于测试无障碍的工具：</h3>
          <div class="flex flex-row gap-4 mt-3">
            <img src="@/assets/soft.png" />
            <img src="@/assets/soft1.png" />
            <img src="@/assets/soft2.png" />
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection title="项目成果与总结" main-with="100%">
      <div class="flex flex-row gap-8 mb-20">
        <div class="w-1/2 flex flex-col gap-4">
          <p>引入 Design Token 后，设计系统显著提升了效率与一致性：</p>
          <div>
            <ul class="list-disc pl-6">
              <li>设计一致性提升</li>
              <li>运营效率提高</li>
              <li>协作体验改善</li>
              <li>未来增长可扩展性</li>
              <li>外部认可</li>
            </ul>
          </div>
          <p>
            这些成果凸显了设计系统带来的变革性影响，为Moxo的持续创新奠定了基础。
          </p>
          <p>主导设计系统的演进，让我认识到：</p>
          <p>
            设计系统的价值在于建立设计与研发的共同语言。
            当工具持续进化时，设计方法论也必须保持适应性与前瞻性。
          </p>
        </div>
        <div class="w-1/2 flex items-center justify-center">
          <img src="@/assets/project3-img6.png" width="336" />
        </div>
      </div>
    </CardSection>
  </div>
</template>

<style scoped>
.tag-list code {
  line-height: 11px;
}
.project-detail {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.green-box,
.blue-box {
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  padding: 20px;
  margin: -60px 20px 0 20px;
  z-index: 1;
  position: relative;
}
.green-box {
  background: linear-gradient(101.32deg, #ebffea 34.64%, #c7ffe0 100%);
}
.blue-box {
  background: linear-gradient(101.42deg, #f2faff 5.43%, #cceaff 100%);
}
.v-line {
  position: relative;
  > div:not(:first-child)::after {
    content: " ";
    border-left: 1px solid rgb(128, 132, 157, 0.4);
    height: 100%;
    position: absolute;
    top: 0;
    margin-left: -10px;
  }
}
.img-rest {
  height: inherit;
}
.float-left {
  top: 60px;
  left: 0px;
}
.float-right {
  top: 50px;
  right: 0px;
}
.arrow-list {
  > div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
  }
  .shrink-0 {
    margin-top: 6px;
  }
}
.icon-list {
  > div {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    overflow: hidden;
  }
  img {
    width: 80px;
  }
}
</style>
