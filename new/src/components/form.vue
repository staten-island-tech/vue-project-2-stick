<template>
  <div class="newRecipe">
    <form>
      <label for="title">Recipe Name</label>
      <input type="text" id="name" v-model="title" @change="titleChange" />
      <label for="Description">Description</label>
      <textarea
        class="descriptions"
        v-model="desc"
        name="Description"
        id="description"
        cols="6955"
        rows="20"
        @change="descChange"
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
        @change="ingredChange"
        required
      ></textarea>
      <label for="Instruction">Recipe Instructions</label>
      <textarea
        v-model="instruc"
        name="Instructions"
        id="instruction"
        cols="6955"
        rows="20"
        @change="instrucChange"
        required
      ></textarea>
    </form>

    <Img />
    <Btn />
  </div>
</template>

<script>
import Img from "../components/editImg.vue";
import Btn from "../components/button.vue";

import { ref } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Img,
    Btn,
  },
  setup() {
    const store = useStore();
    const desc = ref(store.state.editRecipe.descsRecipe);
    const title = ref(store.state.editRecipe.title);
    const ingred = ref(store.state.editRecipe.ingredientsRecipe);
    const instruc = ref(store.state.editRecipe.instructionsRecipe);

    function titleChange() {
      store.commit("titleCha", this.title);
      console.log("chnaged");
    }
    function descChange() {
      store.commit("descCha", this.desc);
      console.log("chnaged");
    }
    function ingredChange() {
      store.commit("ingredCha", this.ingred);
      console.log("chnaged");
    }
    function instrucChange() {
      store.commit("instrucCha", this.instruc);
      console.log("chnaged");
    }
    function change() {
      const recipe = store.state.editRecipe;
      console.log(recipe);
    }
    return {
      desc,
      title,
      ingred,
      instruc,
      titleChange,
      descChange,
      instrucChange,
      ingredChange,
      change,
    };
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