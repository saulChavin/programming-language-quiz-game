<script setup>
import useQuizz from '@/composables/useQuizz'
import AnswerCard from '@/components/AnswerCard.vue'
import CustomModal from './components/CustomModal.vue';
import ResultInfo from './components/ResultInfo.vue';
const { pregunta, respuestas, submitAnswer, answer, result } = useQuizz()

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
            <answer-card v-for="(respuesta, index) in  respuestas" :key="index" :label="respuesta" :value="index"
              v-model="answer" />
          </ul>
        </fieldset>
        <button :disabled="answer == null" type="submit" class="main-button my-1">Siguiente</button>
      </form>
    </div>
    <custom-modal>
      <template #modal-content>
        <result-info />
      </template>
    </custom-modal>
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
  padding: .85rem .85rem;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 24px;
  width: 100%;
}

.main-button:hover {
  background-color: #3e8e41;
}

.main-button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
</style>
