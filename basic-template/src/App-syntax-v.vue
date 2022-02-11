<!-- Syntax-v -->
<script setup>
//1.
const msg1_1 = 'get text {{ }} Mustache'
const msg1_2 = 'get text by v-text'
//2.
const headingStyle = 'color:purple; text-decoration:underline;'
//3.
const paraStyle = '<i><b>INT203 Web Client II</b></i>'
//4.
const noName = false
const yourName = 'Vichuta'
//5.
const depositAmt = 15000
// < 10000 = no interest
// 10000-49999 =10%
// 50000-99999 =20%
// >=100000 =25%

//6.
//6.1
const subjects = [
  'INT203-Web Client II',
  'INT204-Web Server II',
  'INT209-Devops'
]
//6.2
const myAccount = {
  accountId: 12345,
  accountName: 'Rapeepat Klamjeen',
  balance: 10000
}
//6.3
const courses = [
  { courseId: 'INT201', courseName: 'Client I', credit: 2 },
  { courseId: 'INT202', courseName: 'Client II', credit: 2 },
  { courseId: 'INT210', courseName: 'Architecture and Deployment', credit: 3 }
]

//x.
const imagePath = '../public/images/eevee.png'
const imageStyle = 'width: 50px;'

</script>

<template>



  <div class="m-10">
    <h1 class="text-4xl font-bold ">Vue Template Syntax</h1>
    <hr/>
    <h2 class="text-2xl font-bold pt-3 text-blue-900"> v-text 
      <span class="text-base text-blue-700"> : get value of varible</span>
    </h2>
<!-- 1. v-text : get value of varible -->
      <li>{{ msg1_1 }}</li>
      <li v-text="msg1_2"></li>
    
    <h2 class="text-2xl font-bold pt-3 text-pink-900"> v-bine
      <span class="text-base text-pink-700"> : add value of attribute</span>
    </h2>
<!-- 2. v-bine : add value of attribute -->
      <li :style="headingStyle">add style using " : "</li>
      <li v-bind:style="headingStyle">add style by v-bind</li>

    <h2 class="text-2xl font-bold pt-3 text-blue-900"> v-html
      <span class="text-base text-blue-700"> : add html tag</span>
    </h2>
<!-- 3. v-html : add html tag -->
      <li>{{ paraStyle }}</li>
      <li v-html="paraStyle"></li>

    <h2 class="text-2xl font-bold pt-3 text-pink-900"> v-show
      <span class="text-base text-pink-700"> : show when 'true' / hide when 'false'</span>
    </h2>
<!-- 4. v-show : show when 'true' / hide when 'false'-->
      <li v-show="noName">Hello,{{ noName }}</li>
  <!-- hide when yourName='', == false -->
      <li v-show="yourName">Hello,{{ yourName }}</li>

    <h2 class="text-2xl font-bold pt-3 text-blue-900"> v-if / v-else / v-else-if
      <span class="text-base text-blue-700"> : which condition is 'true' will show result</span>
    </h2>
<!-- 5. v-if / v-else / v-else-if : which condition is 'true' will show result-->
      <li>Deposit Amount: {{ depositAmt }}</li>
      <li v-if="depositAmt < 10000">Interest: 0</li>
      <li v-else-if="depositAmt <= 49999">Interest: {{ depositAmt * 0.1 }}</li>
      <li v-else-if="depositAmt <= 99999">Interest: {{ depositAmt * 0.2 }}</li>
      <li v-else>Interest: {{ depositAmt * 0.25 }}</li>

    <h2 class="text-2xl font-bold pt-3 text-pink-900"> v-for (Array)
      <span class="text-base text-pink-700"> : iterator element of Array (ต้องกำหนด :key " " เสมอ!!)</span>
    </h2>
<!-- 6. v-for (Array)-->
      <h4 class="text-base text-pink-800">
  <!-- 6.1 -->
      - ใช้ v-for เรียก value และ index
      </h4>
        <li v-for="(subject, index) in subjects" :key="index">
          #{{ index }}-{{ subject }}
        </li>
      <br />
      <h4 class="text-base text-pink-800">
  <!-- 6.2 -->
      - ใช้ v-for เรียก value index และ property key ของ object
      </h4>
        <!-- <li v-for="(value, propKey) in myAccount" :key="myAccount.accountId"> -->
        <li v-for="(value, propKey, index) in myAccount" :key="index">
          {{ index }}-{{ propKey }}: {{ value }}
        </li>

  <!-- 6.3 -->
      <h4 class="text-base text-pink-800">
        - ใช้ v-for เรียก value และ property key ของ object ที่อยู่ใน Array
      </h4>
        <li v-for="course in courses" :key="course.courseId">
          {{ course.courseId }}, {{ course.courseName }}, {{ course.credit }}
        </li>
     
    <h2 class="text-2xl font-bold pt-3 text-pink-900"> v-on
      <span class="text-base text-pink-700"> : ใช้เหมือน onclick</span>
    </h2>
     <h4 class="text-base text-blue-800">
        ...
      </h4>
   
    <h2 class="text-2xl font-bold pt-3 text-pink-900"> v-model
      <span class="text-base text-pink-700"> : ใช้รับค่าจาก html ส่งไปให้ js ประมวลผล</span>
    </h2>
     <h4 class="text-base text-blue-800">
        ...
      </h4>


    <h2 class="text-2xl font-bold pt-3 text-blue-900"> get image </h2>
    <!-- x. get image -->
    <img src="./assets/logo.png" :style="imageStyle" />
    <img :src="imagePath" :style="imageStyle" alt="" srcset="" />
  </div>
</template>

<style>
  li{font-family: Verdana, Geneva, Tahoma, sans-serif; opacity: 70%;}
</style>
