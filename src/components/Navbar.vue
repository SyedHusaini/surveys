<template>
  <div
    class="flex md:flex-row flex-col md:h-20 py-4 px-8 md:items-center md:justify-start justify-center shadow-md"
  >
    <div class="flex-grow flex justify-center">
      <!-- <router-link to="/"> -->
      <img src="../assets/logo.jpg" alt="logo" class="inline w-24" />
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menu: false,
    };
  },

  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style scoped>
.nav-height {
  height: 10%;
}
</style>
