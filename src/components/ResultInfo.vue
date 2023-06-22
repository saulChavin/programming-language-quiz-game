<script setup>
import { defineProps } from 'vue'

defineProps({
    resultText: { type: String, required: true },
    resultImage: { type: String },
})
</script>
<template>
    <div class="modal-header">
        <h2>Resultados</h2>
    </div>
    <div class="modal-body">
        {{ resultText }}
    </div>
    <div class="modal-footer">
        <button @click="$emit('confirm')" class="btn btn-primary">Aceptar</button>
    </div>
</template>