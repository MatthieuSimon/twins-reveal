<template>
  <h1>{{ t('wordle_title') }}</h1>
  <div>
    <p>{{ t('wordle_explanation') }}</p>
    <p>{{ t('wordle_right_spot') }}</p>
    <p>{{ t('wordle_somewhere_else') }}</p>
    <p>{{ t('wordle_wrong_spot') }}</p>
  </div>
  <div class="motus">
    <div class="board">
      <div v-for="(guess, i) in guesses" :key="i" class="row">
        <span
          v-for="(letter, j) in guess"
          :key="j"
          :class="getLetterClass(letter, j)"
          class="cell"
        >
          {{ letter }}
        </span>
      </div>
    </div>
    <input
      v-model="currentGuess"
      maxlength="7"
      @keyup.enter="submitGuess"
    />
    <button @click="submitGuess">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const target = "Couches";
const guesses = ref<string[][]>([]);
const currentGuess = ref<string>("");
const router = useRouter();
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true
})

onMounted(() => {
  guesses.value.push(".......".split(""));
});

function submitGuess(): void {
  const guess = currentGuess.value.trim();
  if (guess.length !== 7) return;
  guesses.value.push(guess.split(""));
  if (guess.toLowerCase() === target.toLowerCase()) {
    router.push('reveal-one')
  }
  currentGuess.value = "";
}

function getLetterClass(letter: string, idx: number): string {
  const targetArr = target.split("");
  if (letter.toLowerCase() === targetArr[idx].toLowerCase()) {
    return "correct";
  } else if (
    targetArr.some(
      (l, i) =>
        l.toLowerCase() === letter.toLowerCase() &&
        guesses.value[guesses.value.length - 1][i] !== l
    )
  ) {
    return "present";
  } else {
    return "absent";
  }
}
</script>

<style scoped>
.motus {
  max-width: 350px;
  margin: 2em auto;
  text-align: center;
  font-family: sans-serif;
}
.board {
  margin-bottom: 1em;
}
.row {
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
}
.cell {
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  margin: 0 2px;
  line-height: 32px;
  font-size: 1.2em;
  text-transform: uppercase;
  background: #fff;
}
.correct {
  background: #6aaa64;
  color: #fff;
}
.present {
  background: #c9b458;
  color: #fff;
}
.absent {
  background: #787c7e;
  color: #fff;
}
</style>