
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Sudoku from './components/Sudoku.vue';
import ThePriceIsRight from './components/ThePriceIsRight.vue';
import Motus from './components/Motus.vue';

const currentStep = ref<string | null>(null);

onMounted(() => {
  currentStep.value = window.sessionStorage.getItem('currentStep');
});

function resetStep() {
  window.sessionStorage.removeItem('currentStep');
  currentStep.value = null;
}

function receiveEmit(stepFinished: string) {
  currentStep.value = stepFinished;
}
</script>

<template>
  <h1>Twin reveal</h1>
  <div class="game-container">
    <Sudoku v-if="!currentStep" @puzzle-solved="receiveEmit"/>
    <ThePriceIsRight v-if="currentStep === '2'" @puzzle-solved="receiveEmit"/>
    <Motus v-if="currentStep === '3'" @puzzle-solved="receiveEmit"/>
  </div>
  <button @click="resetStep" style="margin-top: 24px;">Reset Progress</button>
</template>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
