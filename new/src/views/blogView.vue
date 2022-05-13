<template>
  <div>
    <Blog
      :title="data.title"
      :img="data.img"
      :ingredient="data.ingredientsRecipe"
      :instruction="data.instructionsRecipe"
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
    return { data: computed(() => store.state.editRecipe) };
  },
};
</script>

<style lang="scss" scoped>
</style>