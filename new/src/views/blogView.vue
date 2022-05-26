<template>
  <div class="blog-container">
    <Blog
      :title="data.title"
      :img="data.img"
      :ingredient="data.ingredientsRecipe"
      :instruction="data.instructionsRecipe"
      :description="data.descsRecipe"
    />
  </div>
</template>

<script>
import Blog from "../components/blogPage.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Blog,
  },
  setup() {
    const store = useStore();

    /* let Author = data.author;
    let img = data.img;
    let ingredients = data.ingredientsRecipe;
    let instruction = data.instructions.editRecipe;
    let title = data.title; */
    return { data: computed(() => store.state.viewRecipe) };
  },
};
</script>

<style  scoped>
div .blog-container {
  display: flex;
  flex-flow: row wrap;
  width: 99vw;
  min-height: 95.95vh;
  height: 100%;
  justify-content: flex-start;
  background-color: rgb(238, 177, 221);
}
</style>