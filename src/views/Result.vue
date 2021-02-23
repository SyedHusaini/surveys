<template>
  <div
    v-if="survey === '1'"
    class="flex flex-col justify-center items-center w-full h-screen"
  >
    <div class="text-3xl font-semibold text-gray-600">
      Your Score: <span class="text-pink-600">{{ grandTotal }}</span>
    </div>
    <div class="text-center text-xl mt-3 w-3/5" v-if="grandTotal <= 15">
      Based on your assessment, you have generally negative thoughts or feelings
      about your ability, your personal qualities, and your self-concept.
    </div>
    <div class="text-center text-xl mt-3 w-3/5" v-else-if="grandTotal <= 25">
      Based on your assessment, you have normal or healthy self esteem.
    </div>
    <div class="text-center text-xl mt-3 w-3/5" v-else-if="grandTotal <= 30">
      Based on your assessment you are considered to have high self-esteem.
    </div>
    <router-link
      to="/"
      class="p-2 px-12 mt-5 self-center outline-none border border-pink-700 font-semibold text-pink-700 rounded hover:bg-pink-700 hover:text-white transition-colors duration-400"
    >
      Back To Home
    </router-link>
  </div>
  <div
    v-else-if="survey === '2'"
    class="flex flex-col justify-center items-center w-full h-screen"
  >
    <div class="text-3xl font-semibold text-gray-600">
      Your Score:
      <span class="text-pink-600">{{ parseFloat(grandTotal).toFixed(1) }}</span>
    </div>
    <div class="text-center text-xl mt-3 w-3/5" v-if="grandTotal <= 2.5">
      Your score indicates that you are low in self-compassion
    </div>
    <div class="text-center text-xl mt-3 w-3/5" v-else-if="grandTotal <= 3.5">
      You have a moderate level of self-compassion
    </div>
    <div class="text-center text-xl mt-3 w-3/5" v-else-if="grandTotal <= 5.0">
      You are high in self-compassion
    </div>
    <table class="w-80 mt-5">
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
    <div class="w-3/6 text-gray-600 mt-5">
      A score of 1-2.5 indicates you are low in self-compassion, 2.6-3.5
      indicates you are moderate, and 3.5 - 5.0 means you are high in
      self-compassion.
      <br />
      NOTE: higher means for Self-Judgment (SJ), Isolation (I), and
      over-identification (OI) subscales before reverse coding indicates less
      self-compassion.
    </div>
    <router-link
      to="/"
      class="p-2 px-12 mt-5 self-center outline-none border border-pink-700 font-semibold text-pink-700 rounded hover:bg-pink-700 hover:text-white transition-colors duration-400"
    >
      Back To Home
    </router-link>
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
    console.log(this.survey);
    console.log(this.grandTotal);
    // if (!this.params || !this.params.survey) {
    //   this.$router.push("/");
    // }
  },
};
</script>