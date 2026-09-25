<script setup lang="ts">
//Declaramos los emits que el hijo puede emitir
    const emit=defineEmits<{
        (x: 'incrementar',
        cont: Number,
        texto: String
        ): void
    }>()
    //Definimos los props que esperamos recibir del padre
    defineProps({
        titulo: String,
        contador: {
            type: Number,
            default: 0
        },
        mensaje2: {
            trype: String,
            default: 'Sin valor'
        }
    })

    function handleClick(){
        // Emitimos el evento y pasamos un parámetro (por ejemplo, el número 5, es conjunto con el valor de la cadena)
        emit('incrementar', 3, "Hola valor")
    }
</script>

<template>
    <div>
        <h3>{{ titulo }}</h3>
        <p>Valor recibido: {{ contador }}</p>
        <button @click="handleClick">Sumar 5</button>
        <p>{{ mensaje2 }}</p>
    </div>
</template>

<style scoped>
</style>