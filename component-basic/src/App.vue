<script setup>
//local register
import BasicButton from './components/BasicButton.vue';
import BasicButton2 from './components/BasicButton2.vue';
import BasicButton3 from './components/BasicButton3.vue';

console.clear()
const testMe1 = () => console.log('test me 1')
const testMe2 = (e) => console.log('test me 2', e)    // e = {Event Object}

const testMe3 = (e) => console.log('test me 3', e)    // e = undefined
const testMe4 = (a) => console.log('test me 4', a)    // a = {Event Object}

const testMe5 = (e, n) => console.log('test me 5', e, n) // e = {Event Object} , n = 999
const testMe6 = (e, n) => console.log('test me 6', e, n) // e = 999 , n = {Event Object}

//(วิธีแก้ปัญหาใน BasicButton2)
const updateMe1 = () => console.log('update me 1')
const updateMe2 = (e) => console.log('update me 2', e)
const updateMe3 = (e) => console.log('update me 3', e[0],e[1],e[2])
const updateMe4 = (e) => console.log('update me 4', e)
const updateMe5 = (e) => console.log('update me 5', e.result)
const updateMe6 = (e,x) => console.log('update me 6', e, x)
</script>

<template>
  <div>
    <div>
      <!-- ไม่มี handlers : ไม่มีการส่ง parameter ไปให้ -->
      <button @click="testMe1">Test Me1</button>
      <button @click="testMe2">Test Me2</button>

      <!-- มี handlers  -->
      <button @click="testMe3()">Test Me3</button>
      <button @click="testMe4($event)">Test Me4</button>

      <button @click="testMe5($event, 999)">Test Me5</button>
      <button @click="testMe6(999, $event)">Test Me6</button>
    </div>
    <div> 
      <!-- มี handlers v-on ส่ง parameter fn -->
      <BasicButton button-name="Click Me1" @clickMe="testMe1"/>
      <BasicButton button-name="Click Me2" @clickMe="testMe2"/> 

      <BasicButton button-name="Click Me3" @clickMe="testMe3()"/>
      <BasicButton button-name="Click Me4" @clickMe="testMe4($event)"/>   
                                                <!-- จะปริ้นท์ 200 แทน {Event Object} -->
      
      <BasicButton button-name="Click Me5" @clickMe="testMe5($event,999)"/>
      <BasicButton button-name="Click Me6" @clickMe="testMe6(999,$event)"/>  
    </div>
    <div>
      <BasicButton2 button-name="Like Me1" @likeMe="testMe1"/>    <!-- >> test me 1 -->
      <BasicButton2 button-name="Like Me2" @likeMe="testMe2"/>    <!-- >> test me 2 false -->

      <BasicButton2 button-name="Like Me3" @likeMe="testMe3()"/>  <!-- >> test me 3 undefined -->
      <BasicButton2 button-name="Like Me4" @likeMe="testMe4($event)"/>   <!-- >> test me 4 false -->
      
      <BasicButton2 button-name="Like Me5" @likeMe="testMe5($event,999)"/>  <!-- >> test me 5 false 999-->
      <BasicButton2 button-name="Like Me6" @likeMe="testMe6(999,$event)"/>  <!-- >> test me 6 test me 6 999 false -->
  
      <!--ปัญหา คือ button ใน BasicButton2 มี 4 parameter แต่ handle fn รับ param แค่ตัวเดียว = false -->    
    </div>
    <div>
      <BasicButton3 button-name="Update Me1" @updateMe="updateMe1"/>    <!-- >> test me 1 -->
      <BasicButton3 button-name="Update Me2" @updateMe="updateMe2($event)"/>    <!-- >> test me 2 false -->

      <BasicButton3 button-name="Update Me3" @updateMe="updateMe3($event)"/>  <!-- >> test me 3 undefined -->
      <BasicButton3 button-name="Update Me4" @updateMe="updateMe4($event)"/>  <!-- >> test me 4 false -->
      
      <BasicButton3 button-name="Update Me5" @updateMe="updateMe5($event)"/>  <!-- >> test me 5 false 999-->
      <BasicButton3 button-name="Update Me6" @updateMe="updateMe6($event,'DONE')"/>  <!-- >> test me 6 test me 6 999 false -->
  
    </div>
  </div>
</template>

<style scoped></style>

