<template>
  <div class="container">
    <div class="img-cont">
      <img :src="img" alt="" />
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="recipe-info">
      <div class="other">
        <div class="blg-cont">
          <label for="Description">Description</label>
          <p class="desc" name="Description">{{ description }}</p>
        </div>

        <div class="blg-cont">
          <label for="Ingredient">Ingredients</label>
          <p class="ingred" name="Ingredient">{{ ingredient }}</p>
        </div>

        <div class="blg-cont">
          <label for="Instruction">Instruction</label>
          <p class="instruc" name="Instruction">{{ instruction }}</p>
        </div>
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
.blg-cont {
  width: 33%;
  position: relative;
  text-align: center;
}

p {
  font-size: 2rem;
  width: 98%;
  border-radius: 2rem;
}

.img-cont {
  position: relative;
  height: 40vh;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.recipe-info {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
}
.title {
  position: absolute;
  top: 34%;
  left: 41%;
  font-size: 4rem;
  font-size: 4vw;
}
.other {
  margin-top: 5%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
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
}
</style>