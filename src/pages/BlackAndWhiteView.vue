<template>
  <div>
    <h1>{{ t('baw_title') }}</h1>
    <p class="lg">{{ t('baw_main_text') }}</p>
    <img
      src="@/assets/Gender_reveal.jpeg"
      alt="Gender reveal image en noir et blanc"
      class="responsive-img"
    />
  <p>{{ t('reveal_one_explanation_muisjes') }}</p>
    <div class="button-container">
      <button @click="router.push('wordle')">{{ t('baw_button') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()

// use global scope
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})
</script>
