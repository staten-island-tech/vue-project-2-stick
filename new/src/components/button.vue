<template>
  <div>
    <button class="btn" @click.prevent="change">Complele</button>
  </div>
</template>
  

<script>
import { useRouter } from "vue-router";
import { getDatabase, ref, set } from "firebase/database";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    function change() {
      const id = store.state.editRecipe.id;

      console.log(id);
      const db = getDatabase();
      set(ref(db, `recipe/` + id), {
        title: store.state.editRecipe.title,
        ingredientsRecipe: store.state.editRecipe.ingredientsRecipe,
        instructionsRecipe: store.state.editRecipe.instructionsRecipe,
        descsRecipe: store.state.editRecipe.descsRecipe,
        id: store.state.editRecipe.id,
        author: store.state.editRecipe.author,
        img: store.state.editRecipe.img,
      });

      router.push("/MyRecipe");
    }
    return { change };
  },
};
</script>

<style  scoped>
.btn {
  margin-top: 1%;
  margin-left: 90%;
}
</style>