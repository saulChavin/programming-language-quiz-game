<script setup>
import { ref, computed } from 'vue';
import quizz from '@/assets/quizz.json'
import useAnsweredStore from '@/stores/answered'

const questionNumber = ref(0);

const pregunta = computed(() => quizz.preguntas[questionNumber.value].pregunta);
const respuestas = computed(() => quizz.preguntas[questionNumber.value].respuestas);

const answer = ref();
const result = ref('');
const { addAnswer, reset, answered } = useAnsweredStore();
const submitAnswer = () => {
  if (answer != null) {
    if (quizz.preguntas.length - 1 === questionNumber.value) {
      gameOver();
      return;
    }
    questionNumber.value++;
    addAnswer(answer.value);
    answer.value = null;
  }
}

const gameOver = () => {
  const occurences = countOccurences(answered);
  const popularAnswer = Object
    .keys(occurences)
    .find(key => occurences[key] === Math.max(...Object.values(occurences)));

  result.value = quizz.resultados[popularAnswer];
  reset();
}

const countOccurences = (arr) => {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}
</script>

<template>
  <header class="text-center">
    <h1>Programming Language Quizz</h1>
  </header>
  <main class="container">
    <div class="justify-center items-center flex">
      <form @submit.prevent="submitAnswer">
        <fieldset>
          <legend>{{ pregunta }}</legend>
          <ul class="list">
            <li v-for="(respuesta, index) in respuestas" :key="index">
              <input v-model="answer" name="answers" :value="index" :id="`answer-${index}`" type="radio" />
              <label :for="`answer-${index}`"> {{ respuesta }} </label>
            </li>
          </ul>
        </fieldset>
        <button :disabled="answer == null" type="submit">Siguiente</button>
      </form>
    </div>
    <div id="result">
      <p>{{ result }}</p>
    </div>
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
