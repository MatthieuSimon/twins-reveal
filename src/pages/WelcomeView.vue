<template>
  <div>
    <h1>{{ t('welcome_title') }}</h1>
    <p class="lg">{{ t('welcome_main_text') }}{{days}}{{ t('welcome_main_text_2') }}</p>
    <img
      src="@/assets/welcome_image.png"
      alt="The Price is Right image"
      style="padding-top: 50px;"
      class="responsive-img"
    />
    <p class="lg">{{ t('welcome_sub_title') }}</p>
    <div class="explanation">
      <p>{{ t('welcome_sub_text') }}</p>
    </div>
    <div class="button-container">
      <button @click="nextPage">{{ t('welcome_button') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { event } from 'vue-gtag'

const router = useRouter()

// use global scope
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})

const nextPage = () => {
  event('start_flow', { page: 'welcome_view' })
  router.push('the-price-is-right');
};

var countDownDate = new Date("Feb 14, 2026 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
</script>
