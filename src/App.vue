<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Select from "primevue/select";
import { ref } from "vue";

const { t, locale } = useI18n();

const languages = [
  { label: "简体中文", value: "zh-CN" },
  { label: "English", value: "en-US" },
];

const selectedLang = ref(
  languages.find((l) => l.value === locale.value) || languages[0],
);

function onLanguageChange(event: { value: { label: string; value: string } }) {
  locale.value = event.value.value;
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="px-8">
      <nav class="max-w-6xl mx-auto h-15 flex items-center justify-end">
        <div>
          <Select
            v-model="selectedLang"
            :options="languages"
            option-label="label"
            placeholder="Select Language"
            class="w-36"
            @change="onLanguageChange"
          />
        </div>
      </nav>
    </header>

    <main class="flex-1 max-w-6xl w-full mx-auto p-8">
      <RouterView />
    </main>

    <footer class="bg-gray-50 py-6 text-center text-gray-600">
      <p>&copy; 2024 Lulu. {{ t("footer.rights") }}</p>
    </footer>
  </div>
</template>
