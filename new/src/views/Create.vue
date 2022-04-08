<template>
  <div class="newRecipe">
    <form>
      <label for="title">Recipe Name</label>
      <input type="text" v-model="recipe.title" />
      <label for="Instruction">Recipe Instructions</label>
      <textarea
        v-model="recipe.instruc"
        name="Instructions"
        id="written"
        cols="6955"
        rows="20"
      ></textarea>
      <label for="Ingredient">List of Ingredients</label>
      <textarea
        v-model="recipe.ingred"
        name="Ingredients"
        id="written"
        cols="6955"
        rows="20"
      ></textarea>
      <button class="btn" @submit.prevent="">Complele</button>
    </form>
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
.newRecipe {
  background-color: pink;
  width: 60%;
  margin: 0 auto;
  padding: 2%;
  border-radius: 2rem;
}

textarea {
  box-sizing: border-box;
  width: 100%;
  font-size: 2rem;
}

.btn {
  margin-top: 1%;
  margin-left: 90%;
}
</style>