<template>
  <!-- <!DOCTYPE html> -->
  <div class="newRecipe">
    <form>
      <label for="title">Recipe Name</label>
      <input type="text" id="name" v-model="title" required />
      <label for="Ingredient">Description</label>
      <textarea
        class="gredients"
        v-model="desc"
        name="Ingredients"
        id="ingredients"
        cols="6955"
        rows="20"
        required
      ></textarea>
      <label for="Ingredient">List of Ingredients</label>
      <textarea
        class="gredients"
        v-model="ingred"
        name="Ingredients"
        id="ingredients"
        cols="6955"
        rows="20"
        required
      ></textarea>
      <label for="Instruction">Recipe Instructions</label>
      <textarea
        v-model="instruc"
        name="Instructions"
        id="instruction"
        cols="6955"
        rows="20"
        required
      ></textarea>
    </form>

    <Img />

    <button class="btn" @click.prevent="writeUserData">Complele</button>
  </div>
</template>

<script>
import { getDatabase, set, ref, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
import Img from "../components/new.vue";

import { useStore } from "vuex";
export default {
  components: {
    Img,
  },
  setup() {
    const route = useRouter();
    const auth = getAuth();
    const title = ``;
    const ingred = ``;
    const instruc = ``;
    const desc = ``;
    const store = useStore();
    const db = getDatabase();

    function writeUserData() {
      if (
        title !== null &&
        ingred !== null &&
        instruc !== null &&
        desc !== null
      ) {
        const postlistRef = ref(db, "recipe/");
        const newpostRef = push(postlistRef);

        set(newpostRef, {
          title: this.title,
          ingredientsRecipe: this.ingred,
          instructionsRecipe: this.instruc,
          descsRecipe: this.desc,
          id: newpostRef.key,
          author: auth.currentUser.email,
          img: store.state.imgPreview,
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

    return { title, ingred, instruc, writeUserData, desc };
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