<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SelectButton from "primevue/selectbutton";
import { ref, watch } from "vue";

const { locale } = useI18n();

const languages = [
  { label: "中文", value: "zh-CN" },
  { label: "En", value: "en-US" },
];

const selectedLang = ref(locale.value);

watch(selectedLang, (newValue) => {
  locale.value = newValue;
  localStorage.setItem("locale", newValue);
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="px-8">
      <nav class="mx-auto h-15 flex items-center justify-end">
        <div>
          <SelectButton
            v-model="selectedLang"
            size="small"
            :options="languages"
            option-label="label"
            option-value="value"
          />
        </div>
      </nav>
    </header>

    <main class="flex-1 max-w-6xl w-full mx-auto p-8">
      <RouterView />
    </main>

    <footer class="py-6 text-center text-gray-600">
      <p>&copy; 2026 Lulu</p>
    </footer>
  </div>
</template>
