<script setup>
import { ref, computed} from 'vue';
const myList=ref([
    {name: 'ได้เงินจากพ่อ' , money: 100},
    {name: 'ซื้อขนม' , money: -50},
    {name: 'ขาย commission' , money: 70},
])
const newNameList = ref('')
const newMoneyList = ref('')
const checkMoney = ref()
const selectedIndex = ref()

const addNewList = ()=>{
    if(newNameList.value.length > 0 && newMoneyList.value != 0 && checkMoney.value != 0){
        myList.value.push({name: newNameList.value,  money: checkMoney.value})
        newNameList.value = ''
        newMoneyList.value = ''
        checkMoney.value = ''
    }
}
const sumTotal = computed(() => {
    return myList.value.reduce((total,alist)=> total+alist.money,0)
})
const sumTotalThis = computed(() => {
    return filterList.value.reduce((total,alist)=> total+alist.money,0)
})

const removeList = () => {
    if(selectedIndex.value >= 0){
        myList.value.splice(selectedIndex.value,1)
        selectedIndex.value = ''
    }}
const clearList = () => myList.value = []

const positiveValueStyle = "color:green; background-color: #C1FFC1;"
const negativeValueStyle = "color:red; background-color: #ffcccb;}"

const modePositive = ref(false)
const modeNegative = ref(false)
const filterList = computed(()=>{
    let list=''
    if(modePositive.value === true && modeNegative.value == false){
        list = myList.value.filter((alist) => alist.money > 0)
    }else if(modeNegative.value === true  && modePositive.value == false){
        list = myList.value.filter((alist) => alist.money < 0)
    }else{
        list = myList.value
    }
    return list 
})
</script>
 
<template>
<div>
    <h3>My Exercise : คิดโจทย์เอง</h3>
    <h5>บันทึกรายรับ-รายจ่าย</h5>
        <label>ชื่อรายการใหม่ : </label>   
        <input type="text" v-model="newNameList">
<br/>           
        <label>จำนวนเงิน : </label>
        <input type="number" v-model="newMoneyList">         
<br/>
        <input type="radio" :value="newMoneyList > 0 ? newMoneyList: false" v-model="checkMoney">
            <label>รายรับ(+)</label>
        <input type="radio" :value="-Math.abs(newMoneyList)" v-model="checkMoney">
            <label>รายจ่าย(-)</label>   
        <button @click="addNewList">เพิ่มรายการใหม่</button>
<br/>    
    <ul>รายการทั้งหมด ::
        <li v-for="(alist,index) in myList" :key="alist.name">
            <input type="radio" :value="index" v-model="selectedIndex">
            {{alist.name}} |    <span :style="alist.money > 0 ? positiveValueStyle:negativeValueStyle">{{alist.money}} </span>
        </li>
    </ul>
    <button @click="removeList">ลบรายการที่เลือก</button>
    <button @click="clearList">ลบรายการทั้งหมด</button>
    <p>ยอดคงเหลือ : {{sumTotal}}</p>
<br/>
        <input type="checkbox" v-model="modePositive"/>
        <label>แสดงรายการที่เป็น-รายรับ</label>
        <input type="checkbox" v-model="modeNegative"/>
        <label>แสดงรายการที่เป็น-รายจ่าย</label>
    
    <ul v-if="modeNegative || modePositive">
        show filter :: ยอดรวม : {{sumTotalThis}}
        <li v-for="(alist,index) in filterList" :key="alist.name">
            {{alist.name}} |    <span v-if="alist.money > 0" :style="positiveValueStyle">{{alist.money}} </span>
                                <span v-else :style="negativeValueStyle">{{alist.money}} </span>
        </li>

        
    </ul>
    
</div>
</template>
 
<style>

</style>