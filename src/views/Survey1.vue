<template>
  <div class="p-8 mb-32">
    <div class="text-xl font-semibold mt-10 text-pink-700">
      SELF-ESTEEM ASSESSMENT
    </div>
    <div class="text-lg mb-10 mt-5 text-gray-600">
      Below is a list of statements dealing with your general feelings about
      yourself.
      <br />
      For each question choose the answer that you most relate to.
    </div>
    <div>
      <form v-on:submit.prevent="onSubmit" class="flex flex-col">
        <div
          v-for="(item, qIndex) in data"
          :key="qIndex"
          class="pb-2 border-b mt-5"
        >
          <div>
            <span>{{ qIndex + 1 }}. </span><span>{{ item.question }}</span>
          </div>
          <div class="my-3 cursor-pointer">
            <select
              class="p-2 border rounded-md appearance-none sm:w-80 w-full outline-none hover:shadow-md focus:ring-1 focus:ring-pink-600"
              v-model="data[qIndex].answer"
              title="Please select an answer"
              required
            >
              <option disabled hidden value="" class="text-gray-400">
                Please select an answer
              </option>
              <option
                v-for="(item, index) in normalQuestions.includes(qIndex + 1)
                  ? answers
                  : reverseAnswers"
                :key="index"
                :value="index"
              >
                {{ item }}
              </option>
            </select>
          </div>
        </div>

        <button
          class="p-2 mt-5 px-6 self-center border border-pink-700 font-semibold text-pink-700 rounded hover:bg-pink-700 hover:text-white transition-colors duration-400"
          type="submit"
        >
          Score My Assessment
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Data from "../data/survey1";
import { Answers, reverseAnswers } from "../data/survey1";
export default {
  name: "Survey1",
  data() {
    return {
      data: Data,
      answers: Answers,
      reverseAnswers: reverseAnswers,
      grandTotal: 0,
      normalQuestions: [1, 2, 4, 6, 7],
    };
  },
  methods: {
    onSubmit() {
      console.log("submitted", this.data);
      let sum = 0;
      this.data.forEach((item) => {
        sum += item.answer;
      });
      this.grandTotal = sum;
      console.log("Grand Total", this.grandTotal);

      this.$router.push({
        name: "Results",
        params: {
          grandTotal: this.grandTotal,
          survey: 1,
        },
      });
    },
  },
};
</script>

<style></style>
