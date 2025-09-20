<template>
  <div class="motus">
    <h2>Guess the word!</h2>
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
      placeholder="Enter your guess"
    />
    <button @click="submitGuess">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const target = "Jumeaux";
const guesses = ref<string[][]>([]);
const currentGuess = ref<string>("");
const emit = defineEmits(["puzzle-solved"]);

onMounted(() => {
  guesses.value.push(".......".split(""));
});

function submitGuess(): void {
  const guess = currentGuess.value.trim();
  if (guess.length !== 7) return;
  guesses.value.push(guess.split(""));
  if (guess.toLowerCase() === target.toLowerCase()) {
    window.sessionStorage.setItem('currentStep', '4');
    emit("puzzle-solved", '4');
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
.win {
  color: #6aaa64;
  font-weight: bold;
  margin-top: 1em;
}
.lose {
  color: #d33;
  font-weight: bold;
  margin-top: 1em;
}
</style>