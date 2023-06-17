<script setup>
import { computed } from "vue";
const optionClass = "option";
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    modelValue: {
        type: Number,
    }
})

defineEmits(["update:modelValue"])
const selected = computed(() => props.modelValue === props.value)
console.log(typeof props.modelValue)
console.log(typeof props.value)
</script>

<template>
    <li :class="[{ selected }, optionClass]">
        <input :value="value" :checked="value === modelValue" @change="$emit('update:modelValue', Number($event.target.value))"
            :id="`answer-${value}`" name="answers" type="radio" />
        <label :for="`answer-${value}`" class="answer-label"> {{ label }} </label>
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