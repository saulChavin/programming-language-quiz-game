import { defineStore } from "pinia";

const useAnsweredStore = defineStore('answered', () => {
    let answered = []
    /**
     * @param value number 
     * @returns void
     */
    const addAnswer = (value) => answered.push(value)
    const reset = () => answered = []

    return { answered, addAnswer, reset }
});

export default useAnsweredStore;