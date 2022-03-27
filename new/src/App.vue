<template>
  <body>
    <div class="container">
      <Navbar />
    </div>
    <div>
      <router-view />
    </div>
  </body>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
</style>
