<template>
  <div>
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
    </form>
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";
/* import { watch } from "vue"; */
export default {
  setup() {
    const store = useStore();
    let title = ``;
    let ingred = ``;
    let instruc = ``;

    watch(store.state.readyUp, function () {
      if (store.state.readyUp) {
        console.log("readys");
      }
    });

    return { title, ingred, instruc };
  },
};
</script>

<style  scoped>
textarea {
  box-sizing: border-box;
  width: 100%;
  font-size: 2rem;
}
</style>