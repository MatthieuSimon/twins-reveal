<template>
  <div>
    <h1>{{ t('baw_title') }}</h1>
    <h2>{{ t('baw_main_text') }}</h2>
    <img
      src="@/assets/versiti-2-nacelles.png"
      alt="The Price is Right image"
      class="responsive-img"
    />
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
