<template>
  <ConfettiExplosion
    :particleCount="300"
    :particleSize="20"
    :duration="5000"
    :stageHeight="1200"
    :stageWidth="2000"
    :colors="['#3e38f8ff', '#928ffbff', '#eae9ffff']"
  />
  <img src="@/assets/Reveal_2.png" alt="Baby 2 is a boy" class="responsive-img" />
  <h1>{{ t('reveal_two_title') }}</h1>
  <p class="lg">{{ t('reveal_two_main_text') }}</p>
  <div class="button-container pt-large">
    <a href="https://ptitcolis.fr/liste/amelie-matthieu" target="_blank"
      ><button>{{ t('open_list') }}</button></a
    >
  </div>
  <div class="button-container pt-large">
    <a :href="$t('suggest_names_href')" target="_blank"
      ><button>{{ t('suggest_names') }}</button></a
    >
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ConfettiExplosion from 'vue-confetti-explosion'

// use global scope
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})
</script>
