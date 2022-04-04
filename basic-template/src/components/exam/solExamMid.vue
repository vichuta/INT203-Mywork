<script setup>
import { ref,computed } from 'vue'
const randNumbers = ref([])
// generates random number in range (1-99)
const generateNumber = () => {
  let duplicate = false
  const rand = Math.floor(Math.random() * 99 + 1)
  duplicate = randNumbers.value.some((randNumber) => randNumber === rand)
  duplicate ? generateNumber() : randNumbers.value.push(rand)
}
//------------------------------------------------
const isError = ref(false)
const bingoSheet = ref([0,0,0,0,0,0,0,0,0])

const userNumberInBingo = (randNumber) => bingoSheet.value.some((cell)=> cell === randNumber)

const showNumber = (position) =>{
    if(!userNumberInBingo(randNumbers.value[randNumbers.value.length - 1])){
        bingoSheet.value[position] = randNumbers.value[randNumbers.value.length - 1]
        isError.value = false
    }else isError.value = true
}
//1.4
const bingoDone = computed(() => {
    return randNumbers.value.length === 99 || bingoSheet.value.every((cell) => cell !== 0)
    }
)
//1.7
const reset = () => {
    isError.value = false
    randNumbers.value = []
    bingoSheet.value = [0,0,0,0,0,0,0,0,0]
}
</script>

<template>
  <div class="top-container">
    <div class="action-button">
      <button @click="generateNumber" :disabled="bingoDone">Generate New Number</button>
      <button @click="reset">Reset</button>
    </div>
    <div class="error-message">
      <!-- show error message when a user adding the same number in the bingo sheet -->
      <p v-show="isError">show error message when a user adding the same number in the bingo sheet </p>
    </div>
    <div class="grid-container">
      <div class="grid-item" v-for="(cell, index) in bingoSheet" :key="index">
        <!-- show bingo 3 rows x 3 cols here -->
        <button
            v-if="cell === 0"
            :disabled="randNumbers.length === 0"
            @click = "showNumber(index)">
            Add Number</button>
        <p v-else>{{cell}}</p>
      </div>
    </div>
    <div class="generate-number">
      <!-- show the list of generated number here -->
      <ul>
        <li v-for="(num,index) in randNumbers" :key="index">
         Generate Number #{{index+1}} : '{{num}}'
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.top-container {
  width: 330px;
}
.action-button {
  padding: 10px;
  display: flex;
  gap: 5px;
}
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 80px 80px 80px;
  column-gap: 5px;
  row-gap: 5px;
  background-color: green;
  padding: 10px;
}
.grid-item {
  display: flex;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.generate-number {
  font-size: 20px;
}
.error-message {
  height: 40px;
  color: red;
}
</style>