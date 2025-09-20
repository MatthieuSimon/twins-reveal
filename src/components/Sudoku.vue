
<template>
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
  <div class="legend">Highlighted cells are numbers to find.</div>
  <div>
    <div class="date-verify-box">
      <input
        type="text"
        v-model="dateInput"
        maxlength="10"
        class="date-input"
      />
      <button @click="verifyDate">Verify</button>
    </div>
    <div v-if="dateFeedback" class="date-feedback">{{ dateFeedback }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const initialGrid: (number | string)[][] = [
  [3, '', 2, '', 8, '', 1, '', 5],
  ['', '', 7, 2, '', '', '', 6, ''],
  [5, '', 8, 9, '', '', '', 4, 7],
  ['', 8, '', 4, '', '', 3, '', 2],
  ['', 3, '', 1, 6, '', '', 5, 8],
  ['', 1, '', 5, '', '', 6, 7, ''],
  ['', 2, '', 3, 4, 5, '', '', 1],
  ['', '', '', '', 2, 6, '', '', 9],
  ['', '', '', '', 9, '', 5, 2, 6],
];

const userGrid = ref<(number | string)[][]>(initialGrid.map(row => row.slice()));

const highlights: Array<[number, number]> = [
  [7, 2], [4, 2], [2, 6], [5, 0], [4, 5], [0, 3]
];

const emit = defineEmits(["puzzle-solved"]);

function highlightClass(row: number, col: number): string {
  return highlights.some(([r, c]) => r === row && c === col) ? 'highlight' : '';
}

function onInput(row: number, col: number): void {
  const val: any = userGrid.value[row][col];
  // Only allow 1-9
  if (!/^[1-9]$/.test(val)) {
    userGrid.value[row][col] = '';
  }
}

function boldBorderClass(row: number, col: number): string {
  const classes: string[] = [];
  if (col % 3 === 0) classes.push('bold-left');
  if (row % 3 === 0) classes.push('bold-top');
  if (col === 8) classes.push('bold-right');
  if (row === 8) classes.push('bold-bottom');
  return classes.join(' ');
}
// Date input and verification
const dateInput = ref<string>('__/0_/_0__');
const dateFeedback = ref<string>('');

function verifyDate(): void {
  if (dateInput.value === '14/02/2026') {
    dateFeedback.value = 'Correct!';
    window.sessionStorage.setItem('currentStep', '2');
    emit("puzzle-solved", '2');
  } else {
    dateFeedback.value = 'Try again.';
  }
}
</script>

<style scoped>
.sudoku-grid {
  display: flex;
  flex-direction: column;
  border: 2px solid #333;
  background: #fff;
}
.sudoku-row {
  display: flex;
}
.sudoku-cell {
  width: 32px;
  height: 32px;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  position: relative;
}
.bold-left {
  border-left: 3px solid #222 !important;
}
.bold-top {
  border-top: 3px solid #222 !important;
}
.bold-right {
  border-right: 3px solid #222 !important;
}
.bold-bottom {
  border-bottom: 3px solid #222 !important;
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
  background: #ffe066;
  /* border: 2px solid #e1ad01; */
}
.legend {
  margin-top: 12px;
  font-size: 0.95em;
  color: #555;
}
.date-verify-box {
  margin-top: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
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