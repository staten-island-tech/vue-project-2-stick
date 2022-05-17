<template>
  <div class="container">
    <div class="img-cont">
      <img :src="img" alt="" />
    </div>
    <div class="recipe-info">
      <h1 class="title">{{ title }}</h1>
      <div class="other">
        <p class="desc">{{ description }}</p>
        <p class="ingred">{{ ingredient }}</p>
        <p class="instruc">{{ instruction }}</p>
      </div>
    </div>
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
.container {
  position: relative;
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
  height: 40vh;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.recipe-info {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
}
.title {
  font-size: 10rem;
  margin: 0 auto;
}
.other {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
p {
  width: 26%;
}
.desc {
  background-color: rgb(218, 218, 247);
  font-size: 2rem;
  margin: 0 auto;
}
.ingred {
  background-color: rgb(218, 218, 247);
  font-size: 2rem;
  margin: 0 auto;
}
.instruc {
  background-color: rgb(218, 218, 247);
  font-size: 2rem;
  margin: 0 auto;
  width: 80%;
}
</style>