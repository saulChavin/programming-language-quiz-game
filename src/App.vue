<script setup>
import useQuizz from '@/composables/useQuizz'

const { pregunta, respuestas, submitAnswer, answer, result } = useQuizz()
const optionClass = "option";
</script>

<template>
  <header class="text-center">
    <h1>Programming Language Quizz</h1>
  </header>
  <main class="container">
    <div class="justify-center items-center flex">
      <form class="quizz-form" @submit.prevent="submitAnswer">
        <fieldset class="fieldset">
          <legend>{{ pregunta }}</legend>
          <ul class="answers">
            <li v-for="(respuesta, index) in  respuestas " :key="index"
              :class="[{ selected: answer === index, }, optionClass]">
              <input v-model="answer" name="answers" :value="index" :id="`answer-${index}`" type="radio" />
              <label :for="`answer-${index}`" class="answer-label"> {{ respuesta }} </label>
            </li>
          </ul>
        </fieldset>
        <button :disabled="answer == null" type="submit" class="main-button">Siguiente</button>
      </form>
    </div>
    <div id="result">
      <p>{{ result }}</p>
    </div>
  </main>
</template>

<style scoped>
.quizz-form {
  max-width: 600px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 2rem;
}

.answers {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option {
  background: #1f1f1f;
  border: 1px solid #47474745;
  border-radius: 8px;
  display: flex;
  transition: all 3s ease-in;
}

.selected {
  background: rgb(131, 58, 180);
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(171, 29, 253, 1) 38%, rgba(252, 176, 69, 1) 100%);
}

.answer-label {
  flex: 1;
  padding: 1rem;
  cursor: pointer;
}

.fieldset {
  border: none;
  padding: 0;
}

.fieldset>legend {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.main-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
}

input[type="radio"] {
  display: none;
}
</style>
