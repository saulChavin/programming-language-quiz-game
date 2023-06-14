<script setup>
import { defineProps, toRef } from 'vue';
const optionClass = "option";
const props = defineProps({
    respuesta: {
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    answer: {
        type: Number,
        required: true
    }
})

const answer = toRef(props, 'answer')
</script>

<template>
    <li :key="index" :class="[{ selected: answer === index }, optionClass]">
        <input v-model="answer" name="answers" :value="index" :id="`answer-${index}`" type="radio" />
        <label :for="`answer-${index}`" class="answer-label"> {{ respuesta }} </label>

        {{ selected }}
    </li>
</template>

<style scoped>
.option {
    border: 1px solid #47474745;
    border-radius: 8px;
    display: flex;
    position: relative;
    overflow: hidden;
}

.option::after {
    content: "";
    width: 100%;
    opacity: 0;
    z-index: -1;
    height: 100%;
    position: absolute;
    transition: opacity 0.5s ease-in-out;
    background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(171, 29, 253, 1) 38%, rgba(252, 176, 69, 1) 100%);
}

.option.selected::after {
    opacity: 1;
}

.answer-label {
    flex: 1;
    padding: 1rem;
    cursor: pointer;
}

input[type="radio"] {
    display: none;
}
</style>