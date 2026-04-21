<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import backgroundImg from "@/assets/project2_background.png";
import sectionBgImg from "@/assets/project2_section_bg.png";
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
      <div class="flex flex-row">
        <div><img src="@/assets/pt-left.png" /></div>
        <div class="flex flex-col gap-2">
          <div>通过分层架构，将复杂业务流程转化为标准化执行系统。</div>

          <div class="card-block border-box">
            <div class="card-body">
              <div class="card-title">理解业务流程</div>
              <div class="card-info">
                AI 学习流程步骤、角色分工与执行规则，确保行为符合既定 playbook
              </div>
            </div>
          </div>
          <div class="card-block border-box">
            <div class="card-body">
              <div class="card-title">遵循规则与权限</div>
              <div class="card-info">
                Agent 始终遵守权限控制、合规要求与升级路径
              </div>
            </div>
          </div>
          <div class="card-block border-box">
            <div class="card-body">
              <div class="card-title">知道何时执行、何时等待</div>
              <div class="card-info">
                AI 自动推进标准流程，但在关键节点暂停，交由人工处理
              </div>
            </div>
          </div>
        </div>
        <div><img src="@/assets/pt-right.png" /></div>
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
