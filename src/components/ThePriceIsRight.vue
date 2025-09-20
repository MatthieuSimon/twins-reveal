<template>
    <div>
        <h1>Quel est le prix de cette poussette avec ses accessoires?</h1>
        <img src="@/assets/versiti-2-nacelles.png" alt="The Price is Right image" class="responsive-img" />
        <div style="margin-top: 20px;">
            <input v-model.number="enteredPrice" type="number" placeholder="Enter your price" />
            <button @click="checkPrice">Vérifier</button>
        </div>
        <div v-if="message" style="margin-top: 10px;">
            {{ message }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(["puzzle-solved"]);
const enteredPrice = ref<number>(0);
const message = ref<string>("");

function checkPrice() {
    if (enteredPrice.value === 1206) {
        window.sessionStorage.setItem('currentStep', '3');
        emit("puzzle-solved", '3');
    } else if (enteredPrice.value < 1206) {
        message.value = "C'est plus!";
    } else if (enteredPrice.value > 1206) {
        message.value = "C'est moins!";
    } else {
        message.value = "";
    }
}
    
</script>

<style scoped>
.responsive-img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}
</style>