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
      :title="$t('projects.project3.detail.designSystemEvolutionWithDesign')"
      :desc="$t('projects.project3.detail.businessOrchestrationPlatform')"
      scope="AI workflow, interaction design, system"
    />
    <CardSection
      :title="$t('projects.project3.detail.projectBackground')"
      :img-src="img1"
      main-with="40%"
      right-class="w-sm"
      :img-border="false"
    >
      <div class="flex flex-col gap-10">
        <div>
          {{$t('projects.project3.detail.asTheProductScalesThe')}}
        </div>
        <div>
          {{$t('projects.project3.detail.whenIJoinedTheTeam')}}
        </div>
        <div>{{$t('projects.project3.detail.thisCreatedAnOpportunityTo')}}</div>
        <div>
          {{$t('projects.project3.detail.weAlreadyHaveTheBasic')}}
        </div>
        <div>
          {{$t('projects.project3.detail.myInitialGoalWasTo')}}
        </div>
      </div>
    </CardSection>
    <CardSection :title="$t('projects.project3.detail.designPainPoints')" main-with="100%">
      <div class="flex flex-col items-center">
        <div class="mt-5 arrow-list flex flex-col gap-4 w-lg">
          <div class="flex flex-row items-start gap-4">
            <IconArrowRight class="shrink-0" />
            <div>
              <h3 class="text-base font-semibold">{{$t('projects.project3.detail.inconsistentExperience')}}</h3>
              <span class="text-sm text-gray-500"
                >{{$t('projects.project3.detail.thereIsNoSingleSource')}}</span
              >
            </div>
          </div>
          <div class="flex flex-row items-start gap-4">
            <IconArrowRight class="shrink-0" />
            <div>
              <h3 class="text-base font-semibold">{{$t('projects.project3.detail.highMaintenanceCosts')}}</h3>
              <span class="text-sm text-gray-500"
                >{{$t('projects.project3.detail.colorsShadowsAndSpacingAre')}}</span
              >
            </div>
          </div>
          <div class="flex flex-row items-start gap-4 mb-30">
            <IconArrowRight class="shrink-0" />
            <div>
              <h3 class="text-base font-semibold">{{$t('projects.project3.detail.manyCollaborationIssues')}}</h3>
              <span class="text-sm text-gray-500"
                >{{$t('projects.project3.detail.developersOftenHaveToGuess')}}</span
              >
            </div>
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project3.detail.architectureDefinition')"
      :img-border="false"
      :img-src="project2Img2"
      main-with="40%"
    >
      <div class="flex flex-col gap-10">
        <div>
          {{$t('projects.project3.detail.weStartedByReviewingExisting')}}
        </div>
        <div class="flex flex-row gap-4">
          <div>
            <h3 class="text-base font-semibold">{{$t('projects.project3.detail.foundations')}}</h3>
            <span class="text-sm text-gray-500"
              >{{$t('projects.project3.detail.basicElementsSuchAsColors')}}</span
            >
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <div>
            <h3 class="text-base font-semibold">
              {{$t('projects.project3.detail.globalComponents')}}
            </h3>
            <span class="text-sm text-gray-500"
              >{{$t('projects.project3.detail.uiModulesReusedAcrossProjects')}}</span
            >
          </div>
        </div>
        <div class="flex flex-row gap-4">
          <div>
            <h3 class="text-base font-semibold">
              {{$t('projects.project3.detail.projectSpecificComponents')}}
            </h3>
            <span class="text-sm text-gray-500"
              >{{$t('projects.project3.detail.experimentalModulesForSpecificBusiness')}}</span
            >
          </div>
        </div>
        <div class="mb-10">
          {{$t('projects.project3.detail.thisLayeredStructureMaintainsSystem')}}
        </div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project3.detail.validatingTheDesignSystemIn')"
      :right-bg="project2Bg1"
      main-with="40%"
    >
      <div class="flex gap-5 flex-col">
        <div>
          {{$t('projects.project3.detail.theDesignSystemTrulyEntered')}}
        </div>
        <div>
          {{$t('projects.project3.detail.weQuicklyValidatedTheSystem')}}
          <ul class="list-disc pl-6">
            <li>{{$t('projects.project3.detail.improveDeliveryEfficiency')}}</li>
            <li>{{$t('projects.project3.detail.maintainCrossPageConsistency')}}</li>
            <li>{{$t('projects.project3.detail.accelerateOldPageUpgrades')}}</li>
            <li>{{$t('projects.project3.detail.reduceRepeatedDesignInvestment')}}</li>
          </ul>
        </div>
        <div>{{$t('projects.project3.detail.theValueOfTheSystem')}}</div>
      </div>
    </CardSection>
    <CardSection
      :title="$t('projects.project3.detail.introducingDesignToken')"
      :img-src="project2Img3"
      :img-border="false"
      main-with="50%"
    >
      <div class="flex flex-col gap-6">
        <div>
          {{$t('projects.project3.detail.withTheReleaseOfFigma')}}
        </div>

        <div class="gap-4">
          <h3 class="text-base font-semibold">{{$t('projects.project3.detail.singleSourceOfTruth')}}</h3>
          <span class="text-sm text-gray-500"
            >{{$t('projects.project3.detail.designAndDevelopmentShareA')}}</span
          >
        </div>
        <div class="gap-4">
          <h3 class="text-base font-semibold">{{$t('projects.project3.detail.improveEfficiency')}}</h3>
          <span class="text-sm text-gray-500">{{$t('projects.project3.detail.theSpeedOfBuildingNew')}}</span>
        </div>
        <div class="gap-4">
          <h3 class="text-base font-semibold">{{$t('projects.project3.detail.smootherCollaboration')}}</h3>
          <span class="text-sm text-gray-500"
            >{{$t('projects.project3.detail.reduceDesignAndCommunicationCosts')}}</span
          >
        </div>
        <div class="gap-4">
          <h3 class="text-base font-semibold">{{$t('projects.project3.detail.oneClickSwitchLightDark')}}</h3>
          <span class="text-sm text-gray-500"
            >{{$t('projects.project3.detail.themeSwitchingHasBeenUpgraded')}}</span
          >
        </div>
        <div class="gap-4">
          <h3 class="text-base font-semibold">{{$t('projects.project3.detail.supportFutureBrandExpansion')}}</h3>
          <span class="text-sm text-gray-500">{{$t('projects.project3.detail.reserveCapabilitiesForMultiClient')}}</span>
        </div>
      </div>
    </CardSection>
    <CardSection :title="$t('projects.project3.detail.fromVariablesToTokenUnifying')" main-with="100%">
      <div class="flex flex-col gap-6">
        <p>
          {{$t('projects.project3.detail.designTokenIsAPractice')}}
        </p>

        <p>
          {{$t('projects.project3.detail.figmaVariablesAreASubset')}}
        </p>
        <ul class="list-disc pl-6">
          <li>{{$t('projects.project3.detail.designSideFigmaVariables')}}</li>
          <li>{{$t('projects.project3.detail.codeSideCssTailwindVariables')}}</li>
          <li>{{$t('projects.project3.detail.productionSideBuiltStylesheet')}}</li>
        </ul>

        <img :src="project2Img4" />
      </div>
    </CardSection>
    <CardSection :title="$t('projects.project3.detail.challengeGettingDevelopersToAdopt')" main-with="100%">
      <div class="flex flex-row gap-4">
        <div class="flex flex-col w-1/2 gap-4">
          <div>
            {{$t('projects.project3.detail.establishingATokenSystemIs')}}
          </div>
          <div>
            {{$t('projects.project3.detail.ourSolution')}}
            <div class="text-base font-semibold">
              {{$t('projects.project3.detail.establishMappingFromDesignTo')}}
            </div>
            <div>
              {{$t('projects.project3.detail.allowDesignVariablesToDirectly')}}
            </div>
            <div>
              Design Token <br />
              → <span class="text-blue-500">color.brand.primary</span> CSS
              Variable →
              <span class="text-blue-500">var(--mx-color.brand-primary)</span>
            </div>
          </div>
          <div class="text-base font-semibold">{{$t('projects.project3.detail.establishDeliveryAndTrainingMechanisms')}}</div>
          <div>
            {{$t('projects.project3.detail.organizeMeetingsBetweenDesignAnd')}}
            <ul class="list-disc pl-6">
              <li>{{$t('projects.project3.detail.newTokenNamingRules')}}</li>
              <li>{{$t('projects.project3.detail.componentUsageMethods')}}</li>
              <li>{{$t('projects.project3.detail.howToAutomaticallySyncAfter')}}</li>
            </ul>
          </div>
          <div>
            {{$t('projects.project3.detail.beyondTheSystemDesignItself')}}
          </div>
        </div>
        <div class="w-1/2 flex justify-center items-center">
          <img :src="project2Img5" style="width: 332px; height: 280px" />
        </div>
      </div>
    </CardSection>
    <CardSection :title="$t('projects.project3.detail.accessibilityConsiderations')" main-with="100%">
      <div class="flex flex-col items-start gap-6">
        <div>
          {{$t('projects.project3.detail.weIntegrateAccessibilityDesignInto')}}
        </div>
        <div class="flex flex-row gap-4 w-full">
          <div class="w-1/4">
            <h3 class="text-base font-semibold">{{$t('projects.project3.detail.contrast')}}</h3>
            <div>
              <ul class="list-disc pl-6">
                <li>{{$t('projects.project3.detail.wcag21AaStandard')}}</li>
                <li>{{$t('projects.project3.detail.normalText451')}}</li>
                <li>{{$t('projects.project3.detail.largeText31')}}</li>
              </ul>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-base font-semibold">{{$t('projects.project3.detail.navigation')}}</h3>
            <div>
              <ul class="list-disc pl-6">
                <li>{{$t('projects.project3.detail.focusableComponents')}}</li>
                <li>{{$t('projects.project3.detail.skipLinkShortcuts')}}</li>
              </ul>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-base font-semibold">{{$t('projects.project3.detail.semanticLayerNaming')}}</h3>
            <div class="tag-list">
              <code>&lt;header&gt;</code><br />
              <code>&lt;nav&gt;</code><br />
              <code>&lt;main&gt;</code><br />
              <code>&lt;section&gt;</code><br />
              <code>&lt;footer&gt;</code>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-base font-semibold">{{$t('projects.project3.detail.others')}}</h3>
            <div>
              <ul class="list-disc pl-6">
                <li>{{$t('projects.project3.detail.tooltips')}}</li>
                <li>{{$t('projects.project3.detail.helpText')}}</li>
                <li>{{$t('projects.project3.detail.labelsForForm')}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-base font-semibold">{{$t('projects.project3.detail.toolsWeUseForAccessibility')}}</h3>
          <div class="flex flex-row gap-4 mt-3">
            <img src="@/assets/soft.png" />
            <img src="@/assets/soft1.png" />
            <img src="@/assets/soft2.png" />
          </div>
        </div>
      </div>
    </CardSection>
    <CardSection :title="$t('projects.project3.detail.projectResultsAndSummary')" main-with="100%">
      <div class="flex flex-row gap-8 mb-20">
        <div class="w-1/2 flex flex-col gap-4">
          <p>{{$t('projects.project3.detail.afterIntroducingDesignTokensThe')}}</p>
          <div>
            <ul class="list-disc pl-6">
              <li>{{$t('projects.project3.detail.designConsistencyImproved')}}</li>
              <li>{{$t('projects.project3.detail.operationalEfficiencyImproved')}}</li>
              <li>{{$t('projects.project3.detail.collaborationExperienceImproved')}}</li>
              <li>{{$t('projects.project3.detail.futureGrowthScalability')}}</li>
              <li>{{$t('projects.project3.detail.externalRecognition')}}</li>
            </ul>
          </div>
          <p>
            {{$t('projects.project3.detail.theseResultsHighlightTheTransformative')}}
          </p>
          <p>{{$t('projects.project3.detail.leadingTheEvolutionOfThe')}}</p>
          <p>
            {{$t('projects.project3.detail.theValueOfADesign')}}
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
