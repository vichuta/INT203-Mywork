<script setup>
//1.
const msg1_1="get text {{ }} Mustache"
const msg1_2="get text by v-text"
//2.
const headingStyle = 'color:red; text-decoration:underline;'
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
const imagePath = "../public/images/eevee.png"
const imageStyle = "width: 50px;"
</script>
 
<template>

<h1>Vue Template Syntax</h1><hr>
<ul>
<br><span>v-text</span>
<br><span class="desc">: get value of varible</span>
<!-- 1. v-text : get value of varible -->
  <li>{{msg1_1}}</li>
  <li v-text="msg1_2"></li>

<br><span>v-bine</span>
<br><span class="desc">: add value of attribute</span>
<!-- 2. v-bine : add value of attribute -->
  <li :style="headingStyle">add style using  " : "</li>
  <li v-bind:style="headingStyle">add style by v-bind</li>

<br><span>v-html</span>
<br><span class="desc">: add html tag</span>
<!-- 3. v-html : add html tag -->
  <li>{{paraStyle}}</li>
  <li v-html="paraStyle"></li>

<br><span>v-show</span>
<br><span class="desc">: show when 'true' / hide when 'false'</span>
<!-- 4. v-show : show when 'true' / hide when 'false'-->
  <li v-show="noName">Hello,{{ noName }}</li>
  <!-- 4.1 hide when yourName='', == false -->
  <li v-show="yourName">Hello,{{ yourName }} </li>

<br><span>v-if / v-else / v-else-if</span>
<br><span class="desc">: which condition is 'true' will show result</span>
<!-- 5. v-if / v-else / v-else-if : which condition is 'true' will show result-->
  <li>Deposit Amount: {{ depositAmt }}</li>
  <li v-if="depositAmt < 10000">Interest: 0</li>
  <li v-else-if="depositAmt <= 49999">Interest: {{ depositAmt * 0.1 }}</li>
  <li v-else-if="depositAmt <= 99999">Interest: {{ depositAmt * 0.2 }}</li>
  <li v-else>Interest: {{ depositAmt * 0.25 }}</li>

<br><span>v-for (Array)</span>
<br><span class="desc">: iterator element of Array <i style="color: red">ต้องกำหนด :key" " เสมอ!!</i></span>
<!-- 6. v-for (Array)-->
<li>ใช้ v-for เรียก value และ index</li>
  <ul class="list-disc">
    <li v-for="(subject, index) in subjects" :key="index">
      #{{ index }}-{{ subject }}
    </li>
  </ul>
  <br><li>ใช้ v-for เรียก value index และ property key ของ object </li>
  <ul>
    <!-- <li v-for="(value, propKey) in myAccount" :key="myAccount.accountId"> -->
    <li v-for="(value, propKey, index) in myAccount" :key="index">
      {{ index }}-{{ propKey }}: {{ value }}
    </li>
  </ul>
  <br><li>ใช้ v-for เรียก value และ property key ของ object ที่อยู่ใน Array </li>
  <ul>
    <li v-for="(course) in courses" :key="course.courseId">
      {{ course.courseId }}, {{ course.courseName }}, {{ course.credit }}
    </li>
  </ul>
</ul>



<span>get image</span><br>
<!-- x. get image -->
<img src="./assets/logo.png" :style="imageStyle">
<img :src="imagePath" :style="imageStyle" alt="" srcset="">


<p></p>
</template>

<style>
  body{ font-family: Sans-serif; }
  span{ font-size: 24px; color: blue; }
  .desc{ font-size: 16px; color: rgb(118, 118, 250);}
</style>
