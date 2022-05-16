<template>
  <div class="container">
    <div class="img-cont">
      <img :src="img" alt="" />
    </div>

    <h1 class="title">{{ title }}</h1>
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
container {
  background-color: pink;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  display: flex;
  width: 70vw;
  min-height: 95.95vh;
  height: 100%;
  justify-content: flex-start;
}
p {
  font-size: 2rem;
}

.img-cont {
  height: 20vh;
}
img {
}
</style>