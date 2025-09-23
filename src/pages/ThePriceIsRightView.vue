<template>
  <h1>{{ t('price_is_right_title') }}</h1>
  <div class="explanation">
    <p>{{ t('price_is_right_main_text') }}</p>
    <p>{{ t('price_is_right_sub_text') }}</p>
  </div>
  <img
    src="@/assets/versiti-2-nacelles.png"
    alt="The Price is Right image"
    class="responsive-img"
  />
  <div class="input-container">
    <p>{{ t('price_is_right_instructions') }}</p>
    <input v-model.number="enteredPrice" type="number" />
    <button @click="checkPrice">{{ t('price_is_right_button') }}</button>
  </div>
  <div v-if="message" style="margin-top: 10px">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const enteredPrice = ref<number>(0)
const message = ref<string>('')
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})
const router = useRouter()
const correctPrice = 1206

function checkPrice() {
  if (enteredPrice.value === correctPrice) {
    router.push('/black-and-white')
  } else if (enteredPrice.value < correctPrice) {
    message.value = t('price_is_right_more')
  } else if (enteredPrice.value > correctPrice) {
    message.value = t('price_is_right_less')
  } else {
    message.value = ''
  }
}
</script>

<style scoped>
input {
  border-radius: 4px;
  border: 1px solid #cfd2c7;
  background: #fafaf8;
}
</style>
