<template>
  <h1>{{ t('sudoku_title') }}</h1>
  <div class="explanation">
    <p>{{ t('sudoku_main_text') }}</p>
  </div>
  <div class="sudoku-grid">
    <div v-for="(row, rowIndex) in 9" :key="rowIndex" class="sudoku-row">
      <div
        v-for="(col, colIndex) in 9"
        :key="colIndex"
        class="sudoku-cell"
        :class="[highlightClass(rowIndex, colIndex), boldBorderClass(rowIndex, colIndex)]"
      >
        <input
          class="sudoku-input"
          type="text"
          v-model="userGrid[rowIndex][colIndex]"
          maxlength="1"
          @input="onInput(rowIndex, colIndex)"
          :readonly="false"
        />
      </div>
    </div>
  </div>
  <div>
    <div class="date-verify-box">
      <p>{{ t('sudoku_instructions') }}</p>
      <input type="text" v-model="dateInput" maxlength="10" />
      <button @click="verifyDate">{{ t('sudoku_button') }}</button>
    </div>
    <div v-if="dateFeedback" class="date-feedback">{{ dateFeedback }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

// use global scope
const { t } = useI18n({
  useScope: 'global',
  inheritLocale: true,
})
const router = useRouter()

const initialGrid: (number | string)[][] = [
  [3, 4, 2, '', 8, 7, 1, 9, 5],
  [1, 9, 7, 2, 5, 4, 8, 6, 3],
  [5, 6, 8, 9, 1, 3, '', 4, 7],
  [6, 8, 5, 4, 7, 9, 3, 1, 2],
  [7, 3, '', 1, 6, '', 9, 5, 8],
  ['', 1, 9, 5, 3, 8, 6, 7, 4],
  [9, 2, 6, 3, 4, 5, 7, 8, 1],
  [8, 5, '', 7, 2, 6, 4, 3, 9],
  [4, 7, 3, 8, 9, 1, 5, 2, 6],
]

const userGrid = ref<(number | string)[][]>(initialGrid.map((row) => row.slice()))

const highlights: Array<[number, number]> = [
  [7, 2],
  [4, 2],
  [2, 6],
  [5, 0],
  [4, 5],
  [0, 3],
]

function highlightClass(row: number, col: number): string {
  return highlights.some(([r, c]) => r === row && c === col) ? 'highlight' : ''
}

function onInput(row: number, col: number): void {
  const val: any = userGrid.value[row][col]
  // Only allow 1-9
  if (!/^[1-9]$/.test(val)) {
    userGrid.value[row][col] = ''
  }
}

function boldBorderClass(row: number, col: number): string {
  const classes: string[] = []
  if (col % 3 === 0) classes.push('bold-left')
  if (row % 3 === 0) classes.push('bold-top')
  if (col === 8) classes.push('bold-right')
  if (row === 8) classes.push('bold-bottom')
  return classes.join(' ')
}
// Date input and verification
const dateInput = ref<string>('__/0_/_0__')
const dateFeedback = ref<string>('')

function verifyDate(): void {
  if (dateInput.value === '14/02/2026') {
    router.push('/congratulations')
  } else {
    dateFeedback.value = 'Try again.'
  }
}
</script>

<style scoped>
.sudoku-grid {
  display: flex;
  flex-direction: column;
  border: 2px solid #ccd2b8;
  background: #fff;
  margin: 24px;
}
.sudoku-row {
  display: flex;
}
.sudoku-cell {
  width: 32px;
  height: 32px;
  border: 1px solid #cacaca;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  position: relative;
}
.bold-left {
  border-left: 4px solid #ccd2b8 !important;
}
.bold-top {
  border-top: 4px solid #ccd2b8 !important;
}
.bold-right {
  border-right: 4px solid #ccd2b8 !important;
}
.bold-bottom {
  border-bottom: 4px solid #ccd2b8 !important;
}
.sudoku-input {
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  font-size: 1.2em;
  background: transparent;
  outline: none;
}
.highlight {
  background: #ac2f3e;
}
.legend {
  margin-top: 12px;
  font-size: 0.95em;
  color: #555;
}
.date-verify-box {
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 10px;
}
.date-input {
  font-size: 1.1em;
  padding: 4px 8px;
  width: 120px;
  border: 1px solid #aaa;
  border-radius: 4px;
}
.date-feedback {
  margin-top: 8px;
  font-size: 1em;
  color: #197d19;
}
</style>
