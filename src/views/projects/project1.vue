<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import moxoAiMp4 from "@/assets/moxo-ai.mp4";
import aiCopilotMp4 from "@/assets/ai-copilot.mp4";
import mutipleAgentsPng from "@/assets/mutiple-agents.png";
import toolingMp4 from "@/assets/Tooling.mp4";
import humanInLoopMp4 from "@/assets/human_in_loop.mp4";
import responsePng from "@/assets/response.png";
import liveWorkflowMp4 from "@/assets/live_workflow.mp4";

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
      :title="$t('projects.project1.title')"
      :desc="$t('projects.project1.description')"
    ></CoverSection>
    <CardSection
      :title="$t('projects.project1.detail.backgroundAndDesignGoals')"
      :desc="$t('projects.project1.detail.designingForBothAutomationAnd')"
      :videoSrc="moxoAiMp4"
      main-with="50%"
      right-class="w-sm"
    >
      {{
        $t(
          "projects.project1.detail.inEnterpriseCollaborationBusinessProcesses",
        )
      }}
      {{ $t("projects.project1.detail.relyingHeavilyOnManualOperations")
      }}<br />
      <br />
      {{ $t("projects.project1.detail.althoughGenerativeAiHasPowerful") }}
      {{ $t("projects.project1.detail.aToolRatherThanA") }}<br />
      <br />
      {{ $t("projects.project1.detail.weNeedToBuildAn") }}{{$t("projects.project1.detail.allowingAiToTransitionFrom")
      }}&nbsp;<span> {{ $t("projects.project1.detail.auxiliaryTool") }}</span
      >&nbsp;{{ $t("projects.project1.detail.to") }}&nbsp;<span>
        {{ $t("projects.project1.detail.processExecutor") }}</span
      >,
      {{ $t("projects.project1.detail.whileEnsuringThatKeyDecisions") }}
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.opportunity')"
      :desc="$t('projects.project1.detail.fromAiToolsToAi')"
      main-with="100%"
    >
      {{ $t("projects.project1.detail.theDesignOpportunityLiesNot") }}<br />
      <br />

      <ul>
        <li>
          {{ $t("projects.project1.detail.aiCopilotTheInteractionGateway") }}
        </li>
        <li>{{ $t("projects.project1.detail.multiAgentSystemAiUnits") }}</li>
        <li>
          {{ $t("projects.project1.detail.toolingTheActualCapabilitiesThat") }}
        </li>
        <li>{{ $t("projects.project1.detail.humanInTheLoopThe") }}</li>
      </ul>
      <br />
      <img src="@/assets/opportunity.png" />
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.howAiWorksInWorkflows')"
      :desc="$t('projects.project1.detail.whatMoxoAiActuallyDoes')"
      main-with="100%"
    >
      <div class="card-container">
        <div class="card-block">
          <img src="@/assets/card1.png" />
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.proactivePreparation") }}
            </div>
            <div class="card-info">
              {{
                $t(
                  "projects.project1.detail.aiAutomaticallyCompletesInformationCollection",
                )
              }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <img src="@/assets/card2.png" />
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.earlyProblemDetection") }}
            </div>
            <div class="card-info">
              {{
                $t(
                  "projects.project1.detail.aiInstantlyChecksCompletenessAccuracy",
                )
              }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <img src="@/assets/card3.png" />
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.automaticTaskRouting") }}
            </div>
            <div class="card-info">
              {{
                $t("projects.project1.detail.aiAutomaticallyAssignsTasksBased")
              }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <img src="@/assets/card5.png" />
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.preventingWorkflowBlockages") }}
            </div>
            <div class="card-info">
              {{
                $t(
                  "projects.project1.detail.aiContinuouslyMonitorsWorkflowStatus",
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.aiCopilot')"
      :desc="$t('projects.project1.detail.bringingAiIntoTheFlow')"
      :videoSrc="aiCopilotMp4"
      rightClass="w-lg"
      main-with="40%"
    >
      <div class="mt-1">
        {{ $t("projects.project1.detail.aiCopilotIsDesignedAs") }}
        <br />
        <br />
        {{ $t("projects.project1.detail.designFocusesInclude") }}
        <ul>
          <li>
            {{
              $t("projects.project1.detail.embeddingAiNaturallyIntoWorkflows")
            }}
          </li>
          <li>
            {{ $t("projects.project1.detail.reducingUserInputCostsBased") }}
          </li>
          <li>
            {{ $t("projects.project1.detail.providingClearFeedbackToMake") }}
          </li>
        </ul>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.multiAgentSystem')"
      :desc="$t('projects.project1.detail.designingAMultiAgentSystem')"
      :imgSrc="mutipleAgentsPng"
      rightClass="width-max"
      main-with="50%"
    >
      <div class="flex flex-col gap-4">
        <div>
          {{ $t("projects.project1.detail.toSupportComplexBusinessScenarios") }}
        </div>
        <div>
          <div class="font-semibold">
            {{ $t("projects.project1.detail.actionAgents") }}
          </div>
          {{ $t("projects.project1.detail.actionAgentsExecuteSpecificTasks") }}
          <ul>
            <li>{{ $t("projects.project1.detail.automationAgent") }}</li>
            <li>{{ $t("projects.project1.detail.customAgent") }}</li>
          </ul>
        </div>
        <div>
          <div class="font-semibold">
            {{ $t("projects.project1.detail.assistAgents") }}<br />
          </div>
          {{
            $t(
              "projects.project1.detail.summarizeInformationProvideSuggestionsAnd",
            )
          }}
          <ul>
            <li>
              {{
                $t("projects.project1.detail.reviewAgentAssessesResultQuality")
              }}
            </li>
            <li>
              {{
                $t(
                  "projects.project1.detail.adviceAgentProvidesDecisionRecommendations",
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "projects.project1.detail.prepareAgentCompletesInformationPre",
                )
              }}
            </li>
          </ul>
        </div>
        <div>
          {{ $t("projects.project1.detail.throughModularDesignAiCan") }}
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.tooling')"
      :desc="$t('projects.project1.detail.turningAiIntoAnOperator')"
      :videoSrc="toolingMp4"
      rightClass="lg:-mt-[120px]"
    >
      <div class="flex flex-col gap-4">
        {{ $t("projects.project1.detail.toEnableAiToTrulyExecute") }}
        <br />
        <ul>
          <li>
            {{ $t("projects.project1.detail.fileProcessingAndManagement") }}
          </li>
          <li>{{ $t("projects.project1.detail.dataOperations") }}</li>
          <li>
            {{ $t("projects.project1.detail.thirdPartySystemIntegration") }}
          </li>
        </ul>
        {{ $t("projects.project1.detail.theDesignFocusIsOn") }}
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.humanInTheLoop')"
      :desc="$t('projects.project1.detail.balancingAutomationWithHumanControl')"
      :videoSrc="humanInLoopMp4"
      rightClass="lg:-mt-[120px]"
    >
      <div class="flex flex-col gap-4">
        <div>
          {{ $t("projects.project1.detail.introducingHumanInTheLoop") }}
        </div>
        {{ $t("projects.project1.detail.supportsMultipleTriggerMethods") }}
        <ul>
          <li>{{ $t("projects.project1.detail.basedOnConfidenceLevel") }}</li>
          <li>{{ $t("projects.project1.detail.basedOnRuleConditions") }}</li>
          <li>{{ $t("projects.project1.detail.mandatoryHumanReview") }}</li>
        </ul>

        {{ $t("projects.project1.detail.thisDesignImprovesEfficiencyWhile") }}
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.humanAccountabilityByDesign')"
      :desc="$t('projects.project1.detail.humanAccountabilityByDesign_1')"
      main-with="100%"
    >
      {{ $t("projects.project1.detail.moxoDesignIsBasedOnA") }}
      <br />
      <div class="mt-10 grid grid-cols-2 gap-4 board-box">
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.humansMakeDecisions") }}
            </div>
            <div class="card-info">
              {{ $t("projects.project1.detail.aiPushesWorkflowsForwardBut") }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.aiPreprocessingActions") }}
            </div>
            <div class="card-info">
              {{ $t("projects.project1.detail.allTasksArePreparedVerified") }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.roleBasedGovernanceMechanism") }}
            </div>
            <div class="card-info">
              {{ $t("projects.project1.detail.aiAgentsOnlyOperateWithin") }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.efficiencyAndControlCoexist") }}
            </div>
            <div class="card-info">
              {{
                $t("projects.project1.detail.aiImprovesWorkflowEfficiencyWhile")
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 font-bold">
        {{ $t("projects.project1.detail.aiExecutesHumansDecide") }}
      </div>
      <div class="flex m-1 mb-2 items-center">
        <div>
          {{ $t("projects.project1.detail.aiAgentsPrepareExecuteVerify") }}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <div>{{ $t("projects.project1.detail.humanDecisionLayer") }}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <div>{{ $t("projects.project1.detail.finalResult") }}</div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.aiGovernance')"
      :desc="$t('projects.project1.detail.aiThatAdaptsToYour')"
      main-with="100%"
    >
      <p>{{ $t("projects.project1.detail.moxoAiIsNotA") }}</p>
      <p>
        {{
          $t("projects.project1.detail.includingWorkflowsRolesPermissionsRules")
        }}
      </p>
      <p>
        {{ $t("projects.project1.detail.aiDrivesWorkflowExecutionOutside") }}
      </p>
      <div class="mt-10 grid grid-flow-col gap-4">
        <ColorBox
          :radius="6"
          class="p-4 text-sm basic-1/3"
          color-from="#F9DA38"
          color-to="#9AE5FC"
        >
          <img src="@/assets/flow_img_1.svg" class="card-icon" />
          <div class="font-semibold">
            {{ $t("projects.project1.detail.understandingBusinessProcesses") }}
          </div>
          <div class="card-info mt-2">
            {{ $t("projects.project1.detail.aiLearnsWorkflowStepsRole") }}
          </div>
        </ColorBox>
        <ColorBox
          :radius="6"
          class="p-4 text-sm basic-1/3"
          color-from="#9AE5FC"
          color-to="#E399FC"
        >
          <img src="@/assets/flow_img_2.svg" class="card-icon" />

          <div class="font-semibold">
            {{ $t("projects.project1.detail.followingRulesAndPermissions") }}
          </div>
          <div class="card-info mt-2">
            {{ $t("projects.project1.detail.agentsAlwaysAdhereToPermission") }}
          </div>
        </ColorBox>
        <ColorBox
          :radius="6"
          class="p-4 text-sm basic-1/3"
          color-to="#FD9DB3"
          color-from="#E399FC"
        >
          <img src="@/assets/flow_img_3.svg" class="card-icon" />
          <div class="font-semibold">
            {{ $t("projects.project1.detail.knowingWhenToExecuteAnd") }}
          </div>
          <div class="card-info mt-2">
            {{
              $t(
                "projects.project1.detail.aiAutomaticallyAdvancesStandardWorkflows",
              )
            }}
          </div>
        </ColorBox>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.systemFeedbackAndTransparency')"
      :desc="$t('projects.project1.detail.makingAiBehaviorVisibleAnd')"
      :imgSrc="responsePng"
      :imgBorder="false"
      main-with="40%"
    >
      <div class="flex flex-col gap-4">
        <div>{{ $t("projects.project1.detail.ai_1") }}</div>
        <div class="flex flex-col gap-2">
    
          <div>{{ $t("projects.project1.detail.weNeedToBuildA") }}</div>
          <ul>
            <li>
              {{
                $t("projects.project1.detail.statusVisualizationNotStartedIn")
              }}
            </li>
            <li>
              {{ $t("projects.project1.detail.clearPromptsAndNextSteps") }}
            </li>
            <li>
              {{
                $t(
                  "projects.project1.detail.supportsMultiAgentStatusSynchronization",
                )
              }}
            </li>
          </ul>
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.liveWorkflow')"
      main-with="100%"
    >
      <div class="desc-info">
        {{ $t("projects.project1.detail.aiAgentCollaboratesWithHumans") }}
        <br />
      </div>
      <div class="w-fit mt-10">
        <video width="100%" loop muted playsinline>
          <source :src="liveWorkflowMp4" type="video/mp4" />
          {{ $t("projects.project1.detail.yourBrowserDoesNotSupport") }}
        </video>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.aiDrivenBusinessOutcomes')"
      :desc="$t('projects.project1.detail.outcomesNotFeatures')"
      main-with="100%"
    >
      <div class=" card-container">
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.26xEfficiencyImprovement") }}
            </div>
            <div class="card-info">
              {{
                $t(
                  "projects.project1.detail.averageWorkflowCompletionSpeedImproved",
                )
              }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{
                $t(
                  "projects.project1.detail.744WorkflowTasksCompletedAutomatically",
                )
              }}
            </div>
            <div class="card-info">
              {{ $t("projects.project1.detail.aiAgentsHaveCompleted744") }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.24To79ActiveWorkflows") }}
            </div>
            <div class="card-info">
              {{ $t("projects.project1.detail.theNumberOfBusinessWorkflows") }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 card-container">
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.510NewBusinessLines") }}
            </div>
            <div class="card-info">
              {{
                $t(
                  "projects.project1.detail.bringingNewOpportunitiesContinuouslyThrough",
                )
              }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.423ConversionRate") }}
            </div>
            <div class="card-info">
              {{
                $t("projects.project1.detail.aiDrivenNaturalWorkflowConversion")
              }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.51kTo375kWorkflowProcessing") }}
            </div>
            <div class="card-info">
              {{
                $t(
                  "projects.project1.detail.theBusinessProcessingScaleSupported",
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-10 text-sm items-center justify-center">
        <div>
          {{ $t("projects.project1.detail.byDelegatingRepetitiveExecutionTo") }}
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project1.detail.designReflectionAndExpansion')"
      :desc="$t('projects.project1.detail.designingForHumanAiCollaboration')"
      main-with="100%"
    >
      <div class="flex items-center gap-[10px] mb-[10px]">
        <IconMiaozhun />
        <div class="font-semibold">
          {{ $t("projects.project1.detail.coreTakeaways") }}
        </div>
      </div>
      <div class="card-container">
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{ $t("projects.project1.detail.trustIsTheCoreOf") }}
            </div>
            <div class="card-info">
              {{ $t("projects.project1.detail.whetherUsersAdoptAiDepends") }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{
                $t("projects.project1.detail.automationMustCoexistWithControl")
              }}
            </div>
            <div class="card-info">
              {{
                $t("projects.project1.detail.thePrerequisiteForEfficiencyGains")
              }}
            </div>
          </div>
        </div>
        <div class="card-block">
          <div class="card-body">
            <div class="card-title">
              {{
                $t("projects.project1.detail.explainabilityDeterminesUsability")
              }}
            </div>
            <div class="card-info">
              {{ $t("projects.project1.detail.onlyWhenAiBehaviorIs") }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col mt-10 text-sm gap-[10px]">
        <div class="flex items-center gap-[10px]">
          <IconBook />
          <div class="font-semibold">
            {{ $t("projects.project1.detail.designShift") }}
          </div>
        </div>
        <div>
          <ul>
            <li>
              {{ $t("projects.project1.detail.fromUserOperationsToSystem") }}
            </li>
            <li>
              {{ $t("projects.project1.detail.fromInterfaceDesignToWorkflow") }}
            </li>
            <li>
              {{ $t("projects.project1.detail.fromFeatureDesignToRules") }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex mt-10 text-sm flex-col gap-[10px]">
        <div class="flex items-center gap-[10px]">
          <IconMessage />
          <div class="font-semibold">
            {{ $t("projects.project1.detail.areasForImprovement") }}
          </div>
        </div>
        <div>
          <ul>
            <li>
              {{
                $t(
                  "projects.project1.detail.provideMoreIntuitiveWorkflowVisualization",
                )
              }}
            </li>
            <li>
              {{ $t("projects.project1.detail.reduceLearningCostsForComplex") }}
            </li>
            <li>
              {{
                $t(
                  "projects.project1.detail.introduceSmarterDefaultStrategiesTo",
                )
              }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex mt-10 text-sm items-center justify-center">
        <IconStart></IconStart>
        <span>{{
          $t("projects.project1.detail.theCollaborationModelBetweenHumans")
        }}</span>
      </div>
    </CardSection>
  </div>
</template>

<style scoped lang="scss">
.project-detail {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
.board-box {
  .card-title {
    font-size: 16px;
    font-weight: 600;
  }
  .card-info {
    font-size: 14px;
  }
  .card-block {
    border: 1px solid #b2b2b2;
    padding: 10px 16px;
    border-radius: 6px;
  }
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
    padding: 16px;
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
  .desc-info {
    font-size: 14px;
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
