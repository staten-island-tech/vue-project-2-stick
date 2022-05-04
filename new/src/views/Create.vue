<template>
  <!DOCTYPE html>
  <div class="newRecipe">
    <form>
      <label for="title">Recipe Name</label>
      <input type="text" id="name" v-model="title" />
      <label for="Ingredient">List of Ingredients</label>
      <textarea
        class="gredients"
        v-model="ingred"
        name="Ingredients"
        id="ingredients"
        cols="6955"
        rows="20"
      ></textarea>
      <label for="Instruction">Recipe Instructions</label>
      <textarea
        v-model="instruc"
        name="Instructions"
        id="instruction"
        cols="6955"
        rows="20"
      ></textarea>

      <button class="btn" @click.prevent="writeUserData()">Complele</button>
    </form>
  </div>
</template>

<script>
import { getDatabase, set, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const route = useRouter();
    const auth = getAuth();
    const title = ``;
    const ingred = ``;
    const instruc = ``;
    function write() {
      console.log(title);
    }
    const db = getDatabase();
    function writeUserData() {
      if (title !== null && ingred !== null && instruc !== null) {
        const postlistRef = ref(db, "recipe/");
        const newpostRef = push(postlistRef);
        set(newpostRef, {
          title: this.title,
          ingredientsRecipe: this.ingred,
          instructionsRecipe: this.instruc,
          id: newpostRef.key,
          author: auth.currentUser.email,
        })
          .then(() => {
            console.log("Post logged");
          })
          .catch((error) => {
            console.log(error);
          });

        route.push("/blog");
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