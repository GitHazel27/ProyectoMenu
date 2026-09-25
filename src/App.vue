<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import HelloSnipet from './components/HelloSnipet.vue';
import ObjectLiterals from './components/ObjectLiterals.vue';
import {alumno, profesor} from './constants/people.ts'
import './bases/functions.ts'
import fatherComponent from './components/fatherComponent.vue';
import Navbar from './components/Navbar.vue';

/*Definimos una variable de tipo reactiva*/
const number=ref(0)
const addOne=()=>{
  number.value++
}

const  myId="coffe"
let myCondition=false
let condition2=false
const movies=["Lord of the Rings", "Star Wars", "Dune", "Batman"]

const text =ref('')

/*Arreglo*/
const numberArray=[1,2,3,5,5]
numberArray.push(6)
console.log({numberArray})

/*Arreglo constante*/
const numberArrayAge=[20,25,22,35,40] as const;
console.log({numberArrayAge})

/*Copia de un arreglo*/
const numberArrayAge2=[...numberArray]
numberArrayAge2.push(43)
console.log({numberArrayAge2})

/*Arreglo combinación de tipos*/
const numberxStringArray:(number|string)[]=[12,'Alex',30,'Góngora']
console.log({numberxStringArray})
console.log(numberxStringArray[2].toString)
</script>

<template>
  <Navbar/>
  <RouterView></RouterView>

</template>

<style scoped>

.title{
  color:blueviolet
}

.highlight{
  color:antiquewhite
}

.red{
  color:red
}
</style>