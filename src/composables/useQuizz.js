import { ref, computed } from 'vue';
import quizz from '@/assets/quizz.json'
import useAnsweredStore from '@/stores/answered'

export default function useQuizz() {

    const questionNumber = ref(0);
    const pregunta = computed(() => quizz.preguntas[questionNumber.value].pregunta);
    const respuestas = computed(() => quizz.preguntas[questionNumber.value].respuestas);

    const answer = ref();
    const result = ref('');
    const { addAnswer, reset, answered } = useAnsweredStore();
    const submitAnswer = () => {
        if (answer != null) {
            addAnswer(answer.value);
            if (quizz.preguntas.length - 1 === questionNumber.value) {
                gameOver();
                return;
            }
            questionNumber.value++;
            answer.value = null;
        }
    }

    const gameOver = () => {
        const occurences = answered.reduce((acc, curr, index) => {
            acc[curr] = (acc[curr] || 0) + quizz.scores[index][curr];
            return acc;
        }, {});

        const popularAnswer = Object
            .keys(occurences)
            .find(key => occurences[key] === Math.max(...Object.values(occurences)));

        result.value = quizz.resultados[popularAnswer];
        reset();
    }
    return {
        pregunta,
        respuestas,
        submitAnswer,
        answer,
        result,
    }
}

const countOccurences = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}