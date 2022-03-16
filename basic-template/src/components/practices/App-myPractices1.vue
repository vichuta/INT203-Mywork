<script setup>
const myAccount = [
    {name: 'salary',amount:10000},
    {name: 'rent',amount: -2500},
    {name: 'parking fee',amount: 0},
    {name: 'rent',amount: -600},
    {name: 'comission',amount: 5500}
]
const hidden = false

function sumTotal(){
    let sum = 0 ;
    for(let i=0; i<myAccount.length; i++){
        sum = sum + myAccount[i].amount
    }
    return sum;
}
// อาจารย์แนะนำให้ใช้ reduce หาค่า sum ดีกว่า^
// let sum = myAccount.reduce(function (total, currentValue) {
//   return total + currentValue.amount
// }, startValue)

const imagePath = "../public/images/Practices1.png"

</script>
 
<template>
<h2>My account</h2>

<div class="mx-24">
    <div class="columns-2">
        <div class="font-bold text-center">Name</div>
        <div class="font-bold">Amount</div>
    </div>
    <hr/>
    <div v-for="action in myAccount" :key="action.name" class="columns-2">
        <div v-if="action.amount < 0">
            {{ action.name }} <div><span class="bg-red-200">{{ action.amount }}</span></div>
        </div>
        <div v-else-if="action.amount > 0" >
            {{ action.name }} <div><span class="bg-green-200" >{{ action.amount }}</span></div>
        </div>
        <div v-else="action.amount = 0" v-show="hidden">
            {{ action.name }} {{action.amount}}
         </div>
    </div>
    <div class="columns-2">
        <div class="text-right font-bold">Net Total : </div>
        <div class="font-bold">{{sumTotal()}}</div>
    </div>  
        <a :href="imagePath" ><img :src="imagePath" style="width: 300px;" alt="" srcset="" /></a>

</div>
</template>
 
<style>
</style>