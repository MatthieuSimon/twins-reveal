<template>
    <div>
        <h1>{{ t('price_is_right_title') }}</h1>
        <h2>{{ t('price_is_right_main_text') }}</h2>
        <h2>{{ t('price_is_right_sub_text') }}</h2>
        <img src="@/assets/versiti-2-nacelles.png" alt="The Price is Right image" class="responsive-img" />
        <div style="margin-top: 20px;">
            <p>{{ t('price_is_right_instructions') }}</p>
            <input v-model.number="enteredPrice" type="number" />
            <button @click="checkPrice">{{ t('price_is_right_button') }}</button>
        </div>
        <div v-if="message" style="margin-top: 10px;">
            {{ message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const emit = defineEmits(["puzzle-solved"]);
const enteredPrice = ref<number>(0);
const message = ref<string>("");
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true
})
const router = useRouter();
const correctPrice = 1206;

function checkPrice() {
    if (enteredPrice.value === correctPrice) {
        router.push('/black-and-white');
    } else if (enteredPrice.value < correctPrice) {
        message.value = t("price_is_right_more");
    } else if (enteredPrice.value > correctPrice) {
        message.value = t("price_is_right_less");
    } else {
        message.value = "";
    }
}
    
</script>