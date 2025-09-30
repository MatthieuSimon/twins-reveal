<template>
  <h1>{{ t('price_is_right_title') }}</h1>
  <div class="explanation">
    <p>{{ t('price_is_right_main_text') }}</p>
    <p>{{ t('price_is_right_sub_text') }}</p>
  </div>
  <img
    src="@/assets/poussette.png"
    alt="The Price is Right image"
    class="responsive-img"
  />
  <div class="input-container">
    <p class="question">{{ t('price_is_right_instructions') }}</p>
    <input v-model.number="enteredPrice" type="number" />
    <button @click="checkPrice">{{ t('price_is_right_button') }}</button>
  </div>
  <div v-if="message" class="message">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { event } from 'vue-gtag'

const enteredPrice = ref<number>(0)
const message = ref<string>('')
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})
const router = useRouter()
const correctPrice = 1206

function checkPrice() {
  event('the_price_is_right', { enteredPrice: enteredPrice.value });
  if (enteredPrice.value === correctPrice) {
    router.push('/black-and-white')
  } else if (enteredPrice.value < correctPrice) {
    message.value = t('price_is_right_more') + enteredPrice.value + ' € !'
  } else if (enteredPrice.value > correctPrice) {
    message.value = t('price_is_right_less') + enteredPrice.value + ' € !'
  } else {
    message.value = ''
  }
}
</script>
