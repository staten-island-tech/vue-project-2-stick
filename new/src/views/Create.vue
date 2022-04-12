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
      <button class="btn" @submit.prevent="handleClick">Complele</button>
    </form>
  </div>
</template>





<script>
import { getDatabase, set, ref } from "firebase/database";
export default {
  setup() {
    const recipe = {
      title: "",
      instruc: "",
      ingred: "",
    };

    function writeRecipe() {
      const db = getDatabase();
      set(ref(db, "users/"), {
        title: this.recipe.title,
        instruction: this.recipe.instruc,
        ingred: this.recipe.ingred,
      });
    }

    const handleClick = writeRecipe();

    return { recipe, handleClick };
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