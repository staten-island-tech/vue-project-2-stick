<template>
  <div class="card">
    <h2 class="recipe-name">{{ title }}</h2>

    <img class="recipe-img" :src="img" alt="" />
    <p class="description">{{ text }}</p>
    <!-- <p class="ingredient">{{ item }}</p>
    <p class="instruction">{{ text }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    img: String,
    description: String,
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  background-color: gray;
  width: 18%;
  height: 32rem;
  border-radius: 2rem;
  margin: 0.9%;
  overflow: hidden;
}
.recipe-name {
  font-size: 5rem;
  margin: 0 auto;
}
.recipe-img {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
.description {
  margin: 0 auto;
  font-size: 2rem;
}
</style>
