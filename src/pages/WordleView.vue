<template>
  <h1>{{ t('wordle_title') }}</h1>
  <div class="explanation">
    <p>{{ t('wordle_explanation') }}</p>
    <p><span class="cell correct">A</span>{{ t('wordle_right_spot') }}</p>
    <p><span class="cell present">A</span>{{ t('wordle_somewhere_else') }}</p>
    <p><span class="cell absent">A</span>{{ t('wordle_wrong_spot') }}</p>
  </div>
  <div class="motus">
    <div class="board">
      <div v-for="(guess, i) in guesses" :key="i" class="row">
        <span v-for="(letter, j) in guess" :key="j" :class="getLetterClass(letter, j)" class="cell">
          {{ letter }}
        </span>
      </div>
    </div>
    <div class="input-container">
      <p>{{ t('wordle_instructions') }}</p>
      <input v-model="currentGuess" maxlength="7" @keyup.enter="submitGuess" />
      <button @click="submitGuess">{{ t('wordle_button') }}</button>
    </div>
    <div v-if="message" class="message">
      {{ message }}
    </div>
    <div class="tooltip-wrapper" @mouseenter="showHint = true" @mouseleave="showHint = false">
      &#9432; {{ t('need_hint') }}
      <div v-if="showHint" class="tooltip">{{ t('hint_wordle') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const guesses = ref<string[][]>([])
const message = ref<string>('')
const currentGuess = ref<string>('')
const router = useRouter()
const { t, locale } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})

onMounted(() => {
  guesses.value.push('.......'.split(''))
})

const showHint = ref(false);


function getTargetWord(): string {
  return locale.value === 'fr-FR' ? 'Couches' : 'Diapers'
}

function submitGuess(): void {
  const guess = currentGuess.value.trim()
  console.log(submitGuess);
  if (guess.length !== 7) {
    message.value = t('word_length_incorrect');
    return;
  }
  message.value = '';
  guesses.value.push(guess.split(''))
  if (guess.toLowerCase() === getTargetWord().toLowerCase()) {
    router.push('reveal-one')
  }
  currentGuess.value = ''
}

function getLetterClass(letter: string, idx: number): string {
  const targetArr = getTargetWord().split('')
  if (letter.toLowerCase() === targetArr[idx].toLowerCase()) {
    return 'correct'
  } else if (
    targetArr.some(
      (l, i) =>
        l.toLowerCase() === letter.toLowerCase() &&
        guesses.value[guesses.value.length - 1][i] !== l,
    )
  ) {
    return 'present'
  } else {
    return 'absent'
  }
}
</script>

<style scoped>
.motus {
  margin: 2em auto;
  text-align: center;
}
.board {
  margin-bottom: 1em;
}
.row {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}
.cell {
  width: 32px;
  height: 32px;
  margin: 0 2px;
  font-size: 1.2em;
  line-height: 32px;
  text-transform: uppercase;
  color: #fff;
  border-radius: 64px;
  display: inline-grid;
  margin-right: 16px;
}
.correct {
  background: #596d1e;
  border: 2.56px solid #fafaf8;
}
.present {
  background: #fafaf8;
  color: #000;
  border: 2.56px solid #596d1e;
}
.absent {
  background: rgba(0, 0, 0, 0.1);
  border: 2.56px solid #cacaca;
}
</style>
