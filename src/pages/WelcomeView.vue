<template>
  <div>
    <h1>{{ t('welcome_title') }}</h1>
    <lg>{{ t('welcome_main_text') }}{{days}}{{ t('welcome_main_text_2') }}</lg>
    <img
      src="@/assets/welcome_image.png"
      alt="The Price is Right image"
      style="padding-top: 50px;"
      class="responsive-img"
    />
    <lg>{{ t('welcome_sub_title') }}</lg>
    <div class="explanation">
      <p>{{ t('welcome_sub_text') }}</p>
    </div>
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

var countDownDate = new Date("Feb 14, 2026 00:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
</script>
