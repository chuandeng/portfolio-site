<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import backgroundImg from "@/assets/project2_background.png";
import sectionBgImg from "@/assets/project2_section_bg.png";
import project2Img1 from "@/assets/project2-img1.png";
import project2Img2 from "@/assets/project2-img2.png";
import project2Img6 from "@/assets/project2-img6.png";
import crossPlatformVideo from "@/assets/cross-platform.mp4";
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
      :title="$t('projects.project2.detail.moxoBusinessProcessPlatformDesign')"
      :desc="$t('projects.project2.detail.businessOrchestrationPlatform')"
      scope="AI workflow, interaction design, system"
    />
    <CardSection :title="$t('projects.project2.detail.projectBackground')" :img-src="backgroundImg" widthScale="2/5">
      {{$t('projects.project2.detail.inEnterpriseServiceScenariosA')}}
      <ul>
        <li>{{$t('projects.project2.detail.emailHandlesCommunication')}}</li>
        <li>{{$t('projects.project2.detail.spreadsheetsHandleInformationCollection')}}</li>
        <li>{{$t('projects.project2.detail.cloudDrivesHandleFileManagement')}}</li>
        <li>{{$t('projects.project2.detail.independentSystemsHandleApprovalAnd')}}</li>
      </ul>

      {{$t('projects.project2.detail.thisResultsIn')}}
      <ul>
        <li>{{$t('projects.project2.detail.lowCollaborationEfficiency')}}</li>
        <li>{{$t('projects.project2.detail.workflowStatusIsNotVisible')}}</li>
        <li>{{$t('projects.project2.detail.complexClientParticipationExperience')}}</li>
        <li>{{$t('projects.project2.detail.highlyDependentOnManualPushing')}}</li>
      </ul>

      {{$t('projects.project2.detail.theGoalOfTheProject')}}
    </CardSection>
    <CardSection
      :title="$t('projects.project2.detail.designObjectives')"
      :right-bg="sectionBgImg"
      main-with="60%"
      bg-width="40%"
    >
      <div class="flex flex-col items-center">
        {{$t('projects.project2.detail.thisProjectFocusesOnDesigning')}}
        <div class="mt-5 icon-list flex flex-col gap-4 w-sm">
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/list-icon1.png" />
            <div>
              <h3 class="text-base">{{$t('projects.project2.detail.improveWorkflowExecutionEfficiency')}}</h3>
              <span class="text-sm text-gray-500"
                >{{$t('projects.project2.detail.reduceManualCoordinationThroughAutomated')}}</span
              >
            </div>
          </div>
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/list-icon2.png" />
            <div>
              <h3 class="text-base">{{$t('projects.project2.detail.optimizeClientParticipationExperience')}}</h3>
              <span class="text-sm text-gray-500">{{$t('projects.project2.detail.lowerTheBarrierForExternal')}}</span>
            </div>
          </div>
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/list-icon3.png" />
            <div>
              <h3 class="text-base">{{$t('projects.project2.detail.achieveConsistentCrossPlatformExperience')}}</h3>
              <span class="text-sm text-gray-500"
                >{{$t('projects.project2.detail.unifiedWebMobileAndEmbedded')}}</span
              >
            </div>
          </div>
          <div class="flex flex-row items-center gap-4">
            <img src="@/assets/list-icon4.png" />
            <div>
              <h3 class="text-base">{{$t('projects.project2.detail.supportEnterpriseLevelGovernanceCapabilities')}}</h3>
              <span class="text-sm text-gray-500"
                >{{$t('projects.project2.detail.meetPermissionSecurityAndAudit')}}</span
              >
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection :title="$t('projects.project2.detail.platformCapabilityArchitecture')" main-with="100%">
      <div class="flex flex-row justify-center">
        <div class="absolute float-left">
          <img src="@/assets/pt-left.png" />
        </div>
        <div class="flex flex-col gap-2">
          <div>{{$t('projects.project2.detail.throughLayeredArchitectureComplexBusiness')}}</div>
          <ColorBox
            :radius="6"
            class="p-4 text-sm"
            color-from="#FD9DB3"
            color-to="#E399FC"
          >
            <div class="font-semibold">
              {{$t('projects.project2.detail.participantLayerConnectInternalTeams')}}
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
              {{$t('projects.project2.detail.experienceLayerProvideConsistentMulti')}}
            </div>
            <div class="text-gray-500">Internal Portal / Client Portal</div>
          </ColorBox>
          <ColorBox
            :radius="6"
            class="p-4 text-sm"
            color-to="#9EA1FD"
            color-from="#9AE5FC"
          >
            <div class="font-semibold">{{$t('projects.project2.detail.actionLayerSupportCommunicationAnd')}}</div>
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
              {{$t('projects.project2.detail.orchestrationLayerAutomaticallyDriveWorkflow')}}
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
              {{$t('projects.project2.detail.platformLayerSupportEnterpriseSystem')}}
            </div>
            <div class="text-gray-500">API / SDK / Integrations / Security</div>
          </ColorBox>
        </div>
        <div class="absolute float-right">
          <img src="@/assets/pt-right.png" />
        </div>
      </div>
    </CardSection>
    <CardSection :title="$t('projects.project2.detail.coreSystemCapabilities')" :desc="$t('projects.project2.detail.coreCapabilities')" main-with="100%">
      <div class="flex gap-5 flex-col">
        <div>
          {{$t('projects.project2.detail.throughAUnifiedWorkflowEngine')}}
        </div>
        <img src="@/assets/image-19.png" />
        <div class="flex flex-row gap-4 v-line">
          <div>
            <div class="font-semibold">{{$t('projects.project2.detail.aiDrivenExecution')}}</div>
            <div class="text-gray-500 text-sm">
              {{$t('projects.project2.detail.aiAgentsCanAutomaticallyPrepare')}}
            </div>
          </div>
          <div>
            <div class="font-semibold">{{$t('projects.project2.detail.decisionsControlledByHumans')}}</div>
            <div class="text-gray-500 text-sm">
              {{$t('projects.project2.detail.keyReviewsApprovalsAndRisk')}}
            </div>
          </div>
          <div>
            <div class="font-semibold">{{$t('projects.project2.detail.intelligentAutomatedOrchestration')}}</div>
            <div class="text-gray-500 text-sm">
              {{$t('projects.project2.detail.throughConditionalLogicWorkflowTemplates')}}
            </div>
          </div>
          <div>
            <div class="font-semibold">{{$t('projects.project2.detail.visualizationAndControlCoexist')}}</div>
            <div class="text-gray-500 text-sm">
              {{$t('projects.project2.detail.allActionsAreFullyRecorded')}}
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project2.detail.processDrivenCollaborationSpace')"
      :desc="$t('projects.project2.detail.driveMeasurableOutcomes')"
      :img-src="project2Img1"
      main-with="40%"
      right-class="lg:-mt-[80px]"
    >
      <p>{{$t('projects.project2.detail.weAbstractBusinessProcessesInto')}}</p>
      <p class="mt-4">{{$t('projects.project2.detail.workflowsNoLongerRelyOn')}}</p>
    </CardSection>
    <CardSection
      :title="$t('projects.project2.detail.workflowOrchestration')"
      :desc="$t('projects.project2.detail.workflowBuilder')"
      :img-src="project2Img2"
      main-with="40%"
      right-class="lg:-mt-[80px]"
    >
      <div class="flex flex-col gap-4">
        <p>
          {{$t('projects.project2.detail.integratingCommunicationTasksDocumentsAnd')}}
        </p>

        <p>
          {{$t('projects.project2.detail.continuouslyAccumulateCompleteOperationalRecords')}}
        </p>
        <p>
          {{$t('projects.project2.detail.allDataIsAssociatedWith')}}
        </p>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project2.detail.participantExperience')"
      :desc="$t('projects.project2.detail.participantExperience_1')"
      main-with="100%"
    >
      <p>
        {{$t('projects.project2.detail.basedOnTheUsageNeeds')}}
      </p>

      <div class="flex flex-row gap-10 mt-5">
        <div class="w-1/2">
          <img src="@/assets/project2-img3.png" />
          <div class="green-box">
            <div class="font-semibold">{{$t('projects.project2.detail.clientsFocusOnTasks')}}</div>
            <div class="text-gray-500 text-sm">
              {{$t('projects.project2.detail.onlySeeTheirOwnTasks')}}
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <img src="@/assets/project2-img4.png" />
          <div class="blue-box">
            <div class="font-semibold">{{$t('projects.project2.detail.coordinatorsHaveFullControl')}}</div>
            <div class="text-gray-500 text-sm">
              {{$t('projects.project2.detail.fullyUnderstandEveryStepStatus')}}
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project2.detail.multiTouchpointDeliveryCapability')"
      main-with="50%"
      :video-src="crossPlatformVideo"
      right-class="lg:-mt-[80px]"
    >
      <div class="flex flex-col items-center">
        {{$t('projects.project2.detail.thisProjectFocusesOnDesigning')}}
        <div class="mt-5 icon-list flex flex-col gap-4 w-sm">
          <div class="flex flex-row items-center gap-4 px-4 py-3 bg-white">
            <IconCompute />
            <div>
              <h3 class="text-base">{{$t('projects.project2.detail.improveWorkflowExecutionEfficiency')}}</h3>
              <span class="text-sm text-gray-500"
                >{{$t('projects.project2.detail.reduceManualCoordinationThroughAutomated')}}</span
              >
            </div>
          </div>
          <div class="flex flex-row items-center gap-4 px-4 py-3 bg-white">
            <IconPhone />
            <div>
              <h3 class="text-base/7">{{$t('projects.project2.detail.optimizeClientParticipationExperience')}}</h3>
              <span class="text-sm text-gray-500">{{$t('projects.project2.detail.lowerTheBarrierForExternal')}}</span>
            </div>
          </div>
          <div class="flex flex-row items-center gap-4 py-3 px-4 bg-white">
            <IconEmbed />
            <div>
              <h3 class="text-base/6">{{$t('projects.project2.detail.achieveConsistentCrossPlatformExperience')}}</h3>
              <span class="text-sm text-gray-500"
                >{{$t('projects.project2.detail.unifiedWebMobileAndEmbedded')}}</span
              >
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project2.detail.designStrategyAndMethodology')"
      main-with="50%"
      :desc="$t('projects.project2.detail.designPrinciples')"
      :right-bg="project2Img6"
    >
      <div class="flex flex-col gap-8 mb-20">
        <div>
          <div class="font-semibold">Flow-first UX</div>
          <div class="text-gray-500 text-sm">
            {{$t('projects.project2.detail.organizeExperienceAroundWorkflowsNot')}}
          </div>
        </div>
        <div>
          <div class="font-semibold">Role-based Simplicity</div>
          <div class="text-gray-500 text-sm">
            {{$t('projects.project2.detail.differentRolesSeeInformationOf')}}
          </div>
        </div>
        <div>
          <div class="font-semibold">Action-oriented Interface</div>
          <div class="text-gray-500 text-sm">
            {{$t('projects.project2.detail.letUsersAlwaysKnowWhat')}}
          </div>
        </div>
        <div>
          <div class="font-semibold">Invisible Complexity</div>
          <div class="text-gray-500 text-sm">{{$t('projects.project2.detail.hideComplexLogicBehindThe')}}</div>
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project2.detail.summary')"
      :desc="$t('projects.project2.detail.conclusion')"
      title-class="ml-30"
      main-with="85%"
    >
      <div class="flex flex-col gap-4 ml-30 mb-30">
        <div>
          {{$t('projects.project2.detail.participatingInTheDesignProcess')}}
        </div>
        <div>
          {{$t('projects.project2.detail.byIntegratingWorkflowOrchestrationCollaboration')}}
        </div>
        <div>
          {{$t('projects.project2.detail.thisProjectHasFurtherConvinced')}}
        </div>
        <div>
          {{$t('projects.project2.detail.iAlsoLookForwardTo')}}
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
