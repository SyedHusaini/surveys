<template>
  <div class="py-8 flex flex-col items-center p-2">
    <div class="text-4xl font-light text-pink-700">
      Choose an assesment to proceed with
    </div>
    <div class="w-full flex flex-wrap justify-center mt-5">
      <router-link
        to="/survey1"
        class="lg:w-1/3 w-full py-24 rounded-md m-3 text-center border border-gray-600 hover:shadow-lg hover:text-pink-700 hover:border-pink-600"
      >
        ROSENBERG SELF-ESTEEM ASSESSMENT
      </router-link>
      <router-link
        to="/survey2"
        class="lg:w-1/3 w-full py-24 rounded-md m-3 text-center border border-gray-600 hover:shadow-lg hover:text-pink-700 hover:border-pink-600"
      >
        SELF-COMPASSION ASSESSMENT
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style></style>
