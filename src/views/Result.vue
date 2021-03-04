<template>
  <div class="py-16 px-8">
    <div
      class="relative flex flex-col justify-center items-center p-16 space-y-2"
    >
      <div
        v-if="survey"
        style="z-index: -10"
        class="absolute w-full h-full bg-gray-200 opacity-90 rounded-2xl"
      ></div>
      <div
        v-if="survey"
        style="z-index: -10"
        class="absolute w-full h-full transform -rotate-2 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl"
      ></div>
      <div
        v-if="survey"
        class="font-semibold text-3xl text-pink-600 pb-10 select-none"
      >
        {{
          survey === "1"
            ? "Self-Esteem Assessment"
            : "Self-Compassion Assessment"
        }}
      </div>
      <div
        v-if="survey === '1'"
        class="p-4 bg-white rounded-lg flex flex-col justify-center items-center w-full"
      >
        <div class="text-3xl font-semibold text-gray-600">
          Your Score: <span class="text-pink-600">{{ grandTotal }}</span>
        </div>
        <div
          class="text-center text-xl mt-3 lg:w-3/5 w-full"
          v-if="grandTotal <= 15"
        >
          Based on your assessment, you have generally negative thoughts or
          feelings about your ability, your personal qualities, and your
          self-concept.
        </div>
        <div
          class="text-center text-xl mt-3 lg:w-3/5 w-full"
          v-else-if="grandTotal <= 25"
        >
          Based on your assessment, you have normal or healthy self esteem.
        </div>
        <div
          class="text-center text-xl mt-3 lg:w-3/5 w-full"
          v-else-if="grandTotal <= 30"
        >
          Based on your assessment you are considered to have high self-esteem.
        </div>
      </div>
      <div
        v-if="survey === '2'"
        class="p-4 bg-white rounded-lg flex flex-col justify-center items-center w-full"
      >
        <div class="text-3xl font-semibold text-gray-600">
          Your Score:
          <span class="text-pink-600">{{
            parseFloat(grandTotal).toFixed(1)
          }}</span>
        </div>
        <div
          class="text-center text-xl mt-3 lg:w-3/5 w-full"
          v-if="grandTotal <= 2.5"
        >
          Your score indicates that you are low in self-compassion
        </div>
        <div
          class="text-center text-xl mt-3 lg:w-3/5 w-full"
          v-else-if="grandTotal <= 3.5"
        >
          You have a moderate level of self-compassion
        </div>
        <div
          class="text-center text-xl mt-3 lg:w-3/5 w-full"
          v-else-if="grandTotal <= 5.0"
        >
          You are high in self-compassion
        </div>
      </div>

      <div
        v-if="survey === '1'"
        class="p-4 bg-white rounded-lg flex-grow flex flex-col justify-center items-center w-full"
      >
        <div class="lg:w-3/6 w-full text-gray-600 mt-5">
          SCORE KEY
          <br />
          The scale ranges from 0-30, with 30 indicating the highest score
          possible. Scores between 0-15 indicate that you have generally
          negative thoughts or feelings about your ability, your personal
          qualities, and your self-concept. The range for normal or "healthy"
          self esteem is 16-25, while any score over 25 is considered to be high
          self-esteem
        </div>

        <a
          class="p-2 mt-5 px-6 self-center border border-pink-700 font-semibold text-pink-700 rounded hover:bg-pink-700 hover:text-white transition-colors duration-400"
          :href="`/survey${survey}`"
        >
          Retake Assessment
        </a>
      </div>
      <div
        v-if="survey === '2'"
        class="p-4 bg-white rounded-lg flex flex-col justify-center items-center w-full"
      >
        <table class="lg:w-3/6 w-full mt-5">
          <tr>
            <th colspan="2" class="border">
              <div class="text-gray-500 text-lg">Summary</div>
            </th>
          </tr>
          <tr>
            <td class="p-1 border">
              <div>Your Self-Kindness Score</div>
            </td>
            <td class="border text-center text-pink-600">
              <div>{{ selfKindness }}</div>
            </td>
          </tr>
          <tr>
            <td class="p-1 border">
              <div>Your Self-Judgement Score</div>
            </td>
            <td class="border text-center text-pink-600">
              <div>{{ selfJudgement }}</div>
            </td>
          </tr>
          <tr>
            <td class="p-1 border">
              <div>Your Common Humanity Score</div>
            </td>
            <td class="border text-center text-pink-600">
              <div>{{ commonHumanity }}</div>
            </td>
          </tr>
          <tr>
            <td class="p-1 border">
              <div>Your Isolation Score</div>
            </td>
            <td class="border text-center text-pink-600">
              <div>{{ isolation }}</div>
            </td>
          </tr>
          <tr>
            <td class="p-1 border">
              <div>Your Mindfulness Score</div>
            </td>
            <td class="border text-center text-pink-600">
              <div>{{ mindfulness }}</div>
            </td>
          </tr>
          <tr>
            <td class="p-1 border">
              <div>Your Over-Identification Score</div>
            </td>
            <td class="border text-center text-pink-600">
              <div>{{ overIdentification }}</div>
            </td>
          </tr>
        </table>
        <div class="lg:w-3/6 w-full lg:px-0 px-2 text-gray-600 mt-5">
          A Self-Kindness (K), a Common Humanity (CH), and a Mindfulness (M)
          score of 1-2.5 indicates you are low in self-compassion. A score of
          2.6-3.5 indicates you are moderate, A score of 3.5 - 5.0 means you are
          high in self-compassion.
          <br class="mb-2" />
          A Self-Judgment (SJ), Isolation (I), and Over-Identification (OI)
          score of 1-2.5 indicates high self-compassion, 2.6-3.5 is moderate,
          and 3.5-5.0 means low self-compassion.
        </div>
        <div class="mt-5 bg-pink-200 lg:w-3/6 w-full flex flex-col">
          <div
            class="relative h-8 bg-yellow-300 font-bold max-w-max pl-3 pr-0.5 py-1"
          >
            HOW DID YOU DO?
            <div
              class="w-0 h-0 absolute -right-2.5 top-0 border-l-4 border-t-2 border-b-2"
              style="
                border-top: 16px solid transparent;
                border-left: 10px solid rgba(252, 211, 77);
                border-bottom: 16px solid transparent;
              "
            ></div>
          </div>
          <div class="pl-3 pr-10 py-2">
            <span class="font-semibold italic">Self-kindness</span>
            is the capacity to be warm and understanding toward ourselves when
            we suffer, fail, or feel inadequate. The opposite of self-kindness
            is
            <span class="font-semibold italic">Self-judgment</span>; this is the
            tendency to ignore personal emotional pain and beat yourself up with
            self-criticism.
          </div>
          <div class="pl-3 pr-10 py-2">
            <span class="font-semibold italic">Common humanity</span>
            is the capacity to recognize that suffering and personal inadequacy
            are part of the shared human experience. Conversely,
            <span class="font-semibold italic">Isolation</span>
            is characterized by the pervasive sense that you are the only person
            who suffers or makes mistakes.
          </div>
          <div class="pl-3 pr-10 py-2">
            <span class="font-semibold italic">Mindfulness</span>
            is the ability to observe negative emotions with openness and
            clarity for a more balanced approach. Feelings are neither
            suppressed nor exaggerated.
            <span class="font-semibold italic">Over identification</span>
            is the opposite and suggests that you are caught up by and swept
            away in your own negative reactions.
          </div>
        </div>

        <a
          class="p-2 mt-5 px-6 self-center border border-pink-700 font-semibold text-pink-700 rounded hover:bg-pink-700 hover:text-white transition-colors duration-400"
          :href="`/survey${survey}`"
        >
          Retake Assessment
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "grandTotal",
    "survey",
    "selfKindness",
    "selfJudgement",
    "reverseSelfJudgement",
    "commonHumanity",
    "isolation",
    "reverseIsolation",
    "mindfulness",
    "overIdentification",
    "reverseOverIdentification",
  ],
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
    console.log(this.survey);
    console.log(this.grandTotal);
    // if (!this.params || !this.params.survey) {
    //   this.$router.push("/");
    // }
  },
};
</script>