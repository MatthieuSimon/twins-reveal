<template>
  <div>
    <h1>{{ t('welcome_title') }}</h1>
    <h2>{{ t('welcome_main_text') }}</h2>
    <h2>{{ t('welcome_main_text_2') }}</h2>
    <img
      src="@/assets/versiti-2-nacelles.png"
      alt="The Price is Right image"
      class="responsive-img"
    />
    <h2>{{ t('welcome_sub_title') }}</h2>
    <p>{{ t('welcome_sub_text') }}</p>
    <p>{{ t('welcome_sub_text_2') }}</p>
    <div class="button-container">
      <button @click="router.push('the-price-is-right')">{{ t('welcome_button') }}</button>
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
