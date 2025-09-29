<template>
  <ConfettiExplosion
    :particleCount="300"
    :particleSize="20"
    :duration="5000"
    :stageHeight="1200"
    :stageWidth="2000"
    :colors="['#ff0088ff', '#ff96ceff', '#f5dbecff']"
  />
  <img src="@/assets/Reveal_1.jpeg" alt="Baby 1 is a girl" class="responsive-img" />
  <h1>{{ t('reveal_one_title') }}</h1>
  <lg>{{ t('reveal_one_main_text') }}</lg>
  <div class="button-container pt-large">
    <button @click="router.push('sudoku')">{{ t('reveal_one_button') }}</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import ConfettiExplosion from 'vue-confetti-explosion'

const router = useRouter()

// use global scope
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})
</script>
