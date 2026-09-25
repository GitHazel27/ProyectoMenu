<script setup lang="ts">
import {ref} from 'vue'
    const contador=ref<number>(0)
    const person ={
        name: 'Juan',
        apellido: 'Silva',
        age: 35,
        address: {
            city: 'New York',
            zip: '51323',
            lat: 14.3232,
            lng: 34.9232,
        }
    }

    const person2=person;
    person2.age=30

    console.log("El valor de la persona es:" + person.age);
    console.log("El valor de la persona2 es:" + person2.age);

    
    //Para clonar un objeto y evitar la referencia (modificar si afectar al original), se puede usar structuredClone() que crea una copia profunda del objeto, incluyendo sus propiedades anidadas.
    const person3=structuredClone(person);
    person3.age=25

    console.log(person3.age)

    function getApellido(ape: string){
        return ape;
    }
    contador.value=15
</script>

<template>
    <h4>El valor del apellido es: {{getApellido(person.apellido)}}</h4>
    <h5>El valor del contador es {{contador}}</h5>
</template>

<style scoped></style>