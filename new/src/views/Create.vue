<template>
  <!DOCTYPE html>
  <div class="newRecipe">
    <form>
      <label for="title">Recipe Name</label>
      <input type="text" v-model="title" />
      <label for="Instruction">Recipe Instructions</label>
      <textarea
        v-model="instruc"
        name="Instructions"
        id="written"
        cols="6955"
        rows="20"
      ></textarea>
      <label for="Ingredient">List of Ingredients</label>
      <textarea
        v-model="ingred"
        name="Ingredients"
        id="written"
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
    const title = ref("");
    const ingred = ref("");
    const instruc = ref("");

    function write() {
      console.log(title);
    }
    const db = getDatabase();
    function writeUserData() {
      if (title !== null && ingred !== null && instruc !== null) {
        set(ref(db, "recipe/" + title), {
          nameRecipe: title,
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