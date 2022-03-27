<template>
  <div>
    <router-link class="add" to="/create">
      <h2 class="sign">+</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
div {
  width: 98vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
}
a {
  width: 15%;
  height: 30%;
  font-size: 5rem;
  background-color: gray;
}
.sign {
  margin: 0 auto;
}
</style>