<template>
  <!DOCTYPE html>
  <div class="newRecipe">
    <form>
      <label for="title">Recipe Name</label>
      <input type="text" id="name" />
      <label for="Instruction">Recipe Instructions</label>
      <textarea
        v-model="instruc"
        name="Instructions"
        id="instruction"
        cols="6955"
        rows="20"
      ></textarea>
      <label for="Ingredient">List of Ingredients</label>
      <textarea
        class="gredients"
        v-model="ingred"
        name="Ingredients"
        id="ingredients"
        cols="6955"
        rows="20"
      ></textarea>
      <button class="btn" @click.prevent="writeUserData()">Complele</button>
    </form>
  </div>
</template>





<script>
import { getDatabase, set, ref } from "firebase/database";
export default {
  setup() {
    const title = document.getElementById(`name`).value;
    const ingred = document.getElementById(`ingredients`).value;
    const instruc = document.getElementById(`instruction`).value;
    function write() {
      console.log(title);
    }
    const db = getDatabase();
    function writeUserData() {
      if (title !== null && ingred !== null && instruc !== null) {
        set(ref(db, "recipe/" + title), {
          ingredientsRecipe: ingred,
          instructionsRecipe: instruc,
        });
      }
    }

    return { title, ingred, instruc, write, writeUserData };
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