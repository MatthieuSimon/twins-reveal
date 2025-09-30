<template>
  <ConfettiExplosion
    :particleCount="300"
    :particleSize="20"
    :duration="5000"
    :stageHeight="1200"
    :stageWidth="2000"
    :colors="['#3e38f8ff', '#928ffbff', '#eae9ffff']"
  />
  <img src="@/assets/Reveal_2.jpeg" alt="Baby 2 is a boy" class="responsive-img" />
  <h1>{{ t('reveal_two_title') }}</h1>
  <p class="lg">{{ t('reveal_two_main_text') }}</p>
  <div class="button-container pt-large">
    <a :href="$t('suggest_names_href')" @click="openNameSurvey" target="_blank"
      ><button>{{ t('suggest_names') }}</button></a
    >
  </div>
  <div class="button-container pt-large">
    <a href="https://ptitcolis.fr/liste/amelie-matthieu" @click="openList" target="_blank"
      ><button>{{ t('open_list') }}</button></a
    >
  </div>
  <p><i>{{ t('list_explanation') }}</i></p>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ConfettiExplosion from 'vue-confetti-explosion'
import { event } from 'vue-gtag'

// use global scope
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})

const openList = () => {
  event('click_button', { page: 'go_to_gift_list' })
};

const openNameSurvey = () => {
  event('click_button', { page: 'go_to_name_suggestions' })
};
</script>
