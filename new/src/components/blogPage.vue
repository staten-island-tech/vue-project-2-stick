<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <img :src="img" alt="" />
    <p>{{ description }}</p>
    <p>{{ ingredient }}</p>
    <p>{{ instruction }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: String,
    description: String,
    instruction: String,
    ingredient: String,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
div {
  background-color: black;
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
p {
  font-size: 2rem;
}
</style>