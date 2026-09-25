<script setup lang="ts">
    import { ref } from 'vue'
    import childrenComponent from './childrenComponent.vue'
    const mensaje=ref("Hola desde el padre")
    const mensaje2=ref("Ejemplo de parámetro del padre al hijo")
    const mensaje3=ref('')
    const numero=ref(10)
    const total=ref(0)

    function sumarAlTotal(valor: number, mensaje: string){
        total.value+=valor;
        mensaje3.value=mensaje
    }

</script>

<template>
    <p>Total: {{ total }}</p>
    <p>El valor del mensaje del hijo es {{ mensaje3 }}</p>
    <childrenComponent :titulo="mensaje"
    :contador="numero" :mensaje2="mensaje2"
    @incrementar="sumarAlTotal" @texto=""/>
</template>

<style scoped>
</style>