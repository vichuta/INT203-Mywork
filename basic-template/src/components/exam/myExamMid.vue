<!-- 63130500106 Vichuta Pipoppinyo - Exam 15-feb-22 -->
<script setup>
import { ref ,computed, resolveDirective} from 'vue'
const randNumbers = ref([])
// generates random number in range (1-99)
const generateNumber = () => {
  let duplicate = false
  const rand = Math.floor(Math.random() * 99 + 1)
  duplicate = randNumbers.value.some((randNumber) => randNumber === rand)
  duplicate ? generateNumber() : randNumbers.value.push(rand)
}

// 1.1
const randNumbersInPage = ref([0,0,0,0,0,0,0,0,0])
const statusAddButton = ref(true)

// 1.2
const myName = '63130500106-Vichuta Pipoppinyo'
const colorMyname = 'color:blue'

// 1.3
const startRandom = () => {
  generateNumber()
  statusAddButton.value = false  //enable ปุ่ม Add Number
  count.value = 0 
}

// 1.4
const showInPage = (index) =>{
  if(count.value === 0){ 
    // 1.4 เพิ่มเลขล่าสุดได้  (แต่ไม่ได้ทำขีดฆ่าต้วเลขที่เพิ่ม)
          randNumbersInPage.value[index] = randNumbers.value[randNumbers.value.length-1]
          count.value++
        }else{
          count.value++
        }
}

// 1.5 count: ใช้กำหนดเงื่อนไขในการ add ตัวเลขลง Bingo sheet 
const count = ref(0)    //ถ้าเป็น 0 เพิ่มได้, 
                        // ถ้าเป็น 1 เพิ่มไม่ได้และจะบวกเพิ่ม , 
                        // ถ้าเป็น 2 หรือมากกว่า 2 จะแสดงข้อความ error

// 1.6 check ว่า randNumbersInPage มี element ที่ไม่ใช่ 0 ทั้งหมดหรือยัง
const statusPage = computed(() => {return randNumbersInPage.value.every((element)=>element!==0)})

// 1.7
const reset = ()=> location.reload()
</script>

<template>
  <div class="top-container">
    <div class="action-button">
<!-- 1.3 ส่วนของปุ่ม Generate New Number -->
                                    <!-- 1.6 ส่วนของ disabled เมื่อ add Bingo sheet เต็มแล้ว -->
      <button @click="startRandom" :disabled="statusPage">Generate New Number</button>
      <button @click="reset">Reset</button>
    </div>

<!-- 1.2 -->
    <p :style="colorMyname">{{myName}}</p>

<!-- 1.5 -->
    <div class="error-message" v-show="count >= 2">
      show error message when a user adding the same number in the bingo sheet
    </div>
    
    <div class="grid-container">

<!-- 1.1 -->
      <div class="grid-item" v-for="(num,index) in randNumbersInPage" >
              <!-- show bingo 3 rows x 3 cols here -->
      <!-- 1.4 --> 
        <span v-if="randNumbersInPage[index]===0">  
                <!-- 1.3 ส่วนของ disable/enable--> <!-- 1.4 ส่วนของfunction ปุ่ม Add Number -->
          <button :disabled="statusAddButton"       @click="showInPage(index)">Add Number</button>
        </span>
        <span v-else>
          {{num}}
        </span>

      </div>
    </div>

<!-- 1.3 ส่วนของแสดงผล หลังจากกดปุ่ม  Generate New Number-->
    <div class="generate-number">
      <!-- show the list of generated number here -->
      <ul>
        <li v-for="(num,index) in randNumbers" :key="index" :value="index">
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
