<template>
  <div class="py-16 px-4 mb-32">
    <div class="relative bg-pink-100 h-full p-8 rounded-lg shadow-sm">
      <div
        class="relative bg-white -my-16 m-auto p-8 shadow-2xl rounded-lg border"
      >
        <div class="text-xl font-semibold mt-10 text-pink-700">
          SELF-COMPASSION ASSESSMENT
        </div>
        <div class="text-lg mb-10 mt-5 text-gray-600">
          Please read each statement carefully before answering. Indicate how
          often you behave in the stated manner, using the indicated options
        </div>
        <div>
          <form v-on:submit.prevent="onSubmit" class="flex flex-col">
            <div
              v-for="(item, index) in data"
              :key="index"
              class="pb-2 border-b mt-5"
            >
              <div>
                <span>{{ index + 1 }}. </span><span>{{ item.question }}</span>
              </div>
              <div class="my-3">
                <select
                  class="p-2 border rounded-md appearance-none sm:w-80 w-full outline-none hover:shadow-md focus:ring-1 focus:ring-pink-600"
                  v-model="data[index].answer"
                  title="Please select an answer"
                  required
                >
                  <option disabled hidden value="" class="text-gray-400">
                    Please select an answer
                  </option>
                  <option
                    v-for="(item, index) in answers"
                    :key="index"
                    :value="index + 1"
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
    </div>
  </div>
</template>

<script>
import Data from "../data/survey2";
import { Answers } from "../data/survey2";
export default {
  name: "Survey2",
  data() {
    return {
      data: Data,
      answers: Answers,
      result: {
        selfKindness: 0,
        selfJudgement: 0,
        reverseSelfJudgement: 0,
        commonHumanity: 0,
        isolation: 0,
        reverseIsolation: 0,
        mindfulness: 0,
        overIdentification: 0,
        reverseOverIdentification: 0,
        grandTotal: 0,
      },
      calculationIndexes: {
        selfKindness: [5, 12, 19, 23, 26],
        selfJudgement: [1, 8, 11, 16, 21],
        commonHumanity: [3, 7, 10, 15],
        isolation: [4, 13, 18, 25],
        mindfulness: [9, 14, 17, 22],
        overIdentification: [2, 6, 20, 24],
      },
    };
  },
  mounted() {
    document.title = "Self-Compassion Assessment";
  },
  methods: {
    calculationHelper() {
      Object.keys(this.calculationIndexes).forEach((type) => {
        let indexes = this.calculationIndexes[type];
        let sum = 0;
        let n = indexes.length;
        for (let i = 0; i < n; i++) {
          sum += this.data[indexes[i] - 1].answer;
        }
        this.result[type] = sum / n;
      });
    },

    onSubmit() {
      // console.log("submitted", this.data);

      //Calculation Helper
      this.calculationHelper();
      this.result.reverseSelfJudgement = this.result.selfJudgement - 6;
      this.result.reverseIsolation = this.result.isolation - 6;
      this.result.reverseOverIdentification =
        this.result.overIdentification - 6;

      this.result.grandTotal =
        (this.result.selfKindness +
          this.result.selfJudgement +
          this.result.commonHumanity +
          this.result.isolation +
          this.result.mindfulness +
          this.result.overIdentification) /
        6;

      console.log(this.result);
      this.$router.push({
        name: "Results",
        params: {
          ...this.result,
          survey: 2,
        },
      });
    },
  },
};
</script>

<style></style>
