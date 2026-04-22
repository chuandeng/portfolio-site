<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import backgroundImg from "@/assets/project2_background.png";
import sectionBgImg from "@/assets/project2_section_bg.png";
import project2Img1 from "@/assets/project2-img1.png";
import project2Img2 from "@/assets/project2-img2.png";
import project2Img5 from "@/assets/project2-img5.png";
import project2Img6 from "@/assets/project2-img6.png";

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
      title="Moxo 业务流程平台设计"
      desc="Business Orchestration Platform"
      scope="AI workflow, interaction design, system"
    />
    <CardSection title="项目背景" :img-src="backgroundImg" widthScale="2/5">
      在企业服务场景中，一个完整流程通常涉及多个角色：内部团队、客户以及外部合作方。
      但现实执行中，流程通常被拆散在多个工具里：
      <ul>
        <li>邮件负责沟通</li>
        <li>表格负责收集信息</li>
        <li>云盘负责文件管理</li>
        <li>独立系统负责审批与签署</li>
      </ul>

      结果导致：
      <ul>
        <li>协作效率低</li>
        <li>流程状态不可见</li>
        <li>客户参与体验复杂</li>
        <li>高度依赖人工推进</li>
      </ul>

      项目的目标，是将这些碎片化动作整合为一个可执行流程系统。
    </CardSection>
    <CardSection
      title="设计目标"
      :right-bg="sectionBgImg"
      main-with="60%"
      bg-width="40%"
    >
      <div class="flex flex-col items-center">
        本项目聚焦于设计一套面向企业服务场景的统一操作平台，核心目标包括：
        <div class="mt-5 icon-list flex flex-col gap-4 w-sm">
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/list-icon1.png" />
            <div>
              <h3 class="text-base">提升流程执行效率</h3>
              <span class="text-sm text-gray-500"
                >通过流程自动推进减少人工协调</span
              >
            </div>
          </div>
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/list-icon2.png" />
            <div>
              <h3 class="text-base">优化客户参与体验</h3>
              <span class="text-sm text-gray-500">降低外部用户使用门槛</span>
            </div>
          </div>
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/list-icon3.png" />
            <div>
              <h3 class="text-base">实现跨平台一致体验</h3>
              <span class="text-sm text-gray-500"
                >Web、Mobile、Embedded 场景统一</span
              >
            </div>
          </div>
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/list-icon4.png" />
            <div>
              <h3 class="text-base">支持企业级治理能力</h3>
              <span class="text-sm text-gray-500"
                >满足权限、安全、审计需求</span
              >
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection title="平台能力架构" main-with="100%">
      <div class="flex flex-row justify-center">
        <div class="absolute float-left">
          <img src="@/assets/pt-left.png" />
        </div>
        <div class="flex flex-col gap-2">
          <div>通过分层架构，将复杂业务流程转化为标准化执行系统。</div>
          <ColorBox
            :radius="6"
            class="p-4 text-sm"
            color-from="#FD9DB3"
            color-to="#E399FC"
          >
            <div class="font-semibold">
              Participant Layer : 连接内部团队、客户与合作方
            </div>
            <div class="text-gray-500">Internal Teams / Client / Partners</div>
          </ColorBox>
          <ColorBox
            :radius="6"
            class="p-4 text-sm"
            color-from="#E399FC"
            color-to="#9EA1FD"
          >
            <div class="font-semibold">
              Experience Layer：提供多端一致体验入口
            </div>
            <div class="text-gray-500">Internal Portal / Client Portal</div>
          </ColorBox>
          <ColorBox
            :radius="6"
            class="p-4 text-sm"
            color-to="#9EA1FD"
            color-from="#9AE5FC"
          >
            <div class="font-semibold">Action Layer：承载沟通、任务执行</div>
            <div class="text-gray-500">
              Workspaces/ Human Actions / AI Automations...
            </div>
          </ColorBox>
          <ColorBox
            :radius="6"
            class="p-4 text-sm"
            color-to="#9AE5FC"
            color-from="#F9DA38"
          >
            <div class="font-semibold">
              Orchestration Layer：自动驱动流程流转
            </div>
            <div class="text-gray-500">
              Workflow Engine / Routing / SLA / Rules
            </div>
          </ColorBox>
          <ColorBox
            :radius="6"
            class="p-4 text-sm"
            color-to="#9AE5FC"
            color-from="#F4AA17"
          >
            <div class="font-semibold">
              Platform Layer：支持企业系统集成与扩展
            </div>
            <div class="text-gray-500">API / SDK / Integrations / Security</div>
          </ColorBox>
        </div>
        <div class="absolute float-right">
          <img src="@/assets/pt-right.png" />
        </div>
      </div>
    </CardSection>
    <CardSection title="核心系统能力" desc="Core Capabilities" main-with="100%">
      <div class="flex gap-5 flex-col">
        <div>
          通过统一流程引擎协调人与系统协作执行，让复杂业务流程实现标准化、可追踪与可规模化运行。
        </div>
        <img src="@/assets/image-19.png" />
        <div class="flex flex-row gap-4 v-line">
          <div>
            <div class="font-semibold">AI 驱动执行</div>
            <div class="text-gray-500 text-sm">
              AI
              agent可自动准备文档、校验输入内容、推动流程节点流转、发送提醒并确保
              SLA 达成
            </div>
          </div>
          <div>
            <div class="font-semibold">决策由人掌控</div>
            <div class="text-gray-500 text-sm">
              关键审核、审批及风险决策交由对应责任人处理，确保责任清晰与可追溯。
            </div>
          </div>
          <div>
            <div class="font-semibold">智能化自动编排</div>
            <div class="text-gray-500 text-sm">
              通过条件逻辑、流程模板、里程碑与系统联动，实现多方协作流程自动运行。
            </div>
          </div>
          <div>
            <div class="font-semibold">可视化与管控并存</div>
            <div class="text-gray-500 text-sm">
              所有动作完整记录，并通过角色权限控制，确保信息按需可见。
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection
      title="流程驱动的协作空间"
      desc="Drive measurable outcomes"
      :img-src="project2Img1"
      main-with="40%"
    >
      <p>我们将业务流程抽象为可复用的 Flow 模板，帮助企业实现标准化执行。</p>
      <p class="mt-4">流程不再依赖人工追踪，而由系统自动推进。</p>
    </CardSection>
    <CardSection
      title="流程编排"
      desc="Workflow Builder"
      :img-src="project2Img2"
      main-with="40%"
    >
      <div class="flex flex-col gap-4">
        <p>
          将沟通、任务、文件与审批整合进同一流程上下文中，不仅提升执行效率，也让流程结果可追踪、可分析、可优化。
        </p>

        <p>
          持续沉淀完整的运营记录，包括操作动作、文档、决策过程、消息沟通与时间戳信息。
        </p>
        <p>
          所有数据均与流程中的具体步骤关联，帮助企业衡量效率、识别瓶颈，并持续优化流程表现。
        </p>
      </div>
    </CardSection>
    <CardSection
      title="参与者体验"
      desc="Participant Experience"
      main-with="100%"
    >
      <p>
        根据不同角色的使用需求，强调不同角色在流程中的体验差异化设计。不同角色看到不同复杂度的信息。
      </p>

      <div class="flex flex-row gap-10 mt-5">
        <div class="w-1/2">
          <img src="@/assets/project2-img3.png" />
          <div class="green-box">
            <div class="font-semibold">客户专注于任务</div>
            <div class="text-gray-500 text-sm">
              只看到自己的任务，获取必要上下文信息，快速完成操作。
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <img src="@/assets/project2-img4.png" />
          <div class="blue-box">
            <div class="font-semibold">协调员全程掌控</div>
            <div class="text-gray-500 text-sm">
              全面了解整个流程的每个步骤、状态和参与者，让您始终掌握工作进展和需要关注的事项。
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection
      title="设计策略与方法论"
      main-with="50%"
      desc="Design Principles"
      :right-bg="project2Img6"
    >
      <div class="flex flex-col gap-8 mb-20">
        <div>
          <div class="font-semibold">Flow-first UX</div>
          <div class="text-gray-500 text-sm">
            围绕流程组织体验，而非页面结构。
          </div>
        </div>
        <div>
          <div class="font-semibold">Role-based Simplicity</div>
          <div class="text-gray-500 text-sm">
            不同角色看到不同复杂度的信息。
          </div>
        </div>
        <div>
          <div class="font-semibold">Action-oriented Interface</div>
          <div class="text-gray-500 text-sm">
            让用户始终清楚下一步要做什么。
          </div>
        </div>
        <div>
          <div class="font-semibold">Invisible Complexity</div>
          <div class="text-gray-500 text-sm">将复杂逻辑隐藏在系统背后。</div>
        </div>
      </div>
    </CardSection>
    <CardSection
      title="总结"
      desc="Conclusion"
      title-class="ml-30"
      main-with="85%"
    >
      <div class="flex flex-col gap-4 ml-30 mb-30">
        <div>
          参与 Moxo
          的设计过程，让我更加深入地理解了：复杂的业务流程，同样可以被设计成清晰、高效且可规模化的产品体验。
        </div>
        <div>
          通过将流程编排、协作体验与平台能力整合为统一系统，Moxo
          帮助团队提升执行效率，也让客户与合作方获得更顺畅的参与体验。
        </div>
        <div>
          这个项目让我更加确信，优秀的企业级产品设计，不仅是让界面更易用，更重要的是通过系统化思考，降低业务运作中的复杂度。随着企业协作方式不断演进，产品体验也需要持续进化。
        </div>
        <div>
          我也期待在未来的设计工作中，继续把复杂的问题梳理清晰，把流程体验设计得更加自然、高效。
        </div>
      </div>
    </CardSection>
  </div>
</template>

<style scoped>
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
.float-left {
  top: 60px;
  left: 0px;
}
.float-right {
  top: 50px;
  right: 0px;
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
