<script setup>

</script>
<template>
    <div class="modal-header">
        <h2>Resultados</h2>
    </div>
    <div class="modal-body">
        <p>Has respondido correctamente a preguntas</p>
    </div>
    <div class="modal-footer">
        <button @click="$emit('confirm')" class="btn btn-primary">Aceptar</button>
    </div>
</template>