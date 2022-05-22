<template>
  <div class="container">
    <EditCard
      v-for="food in recipe"
      :key="food"
      :id="food.id"
      :title="food.title"
      :img="food.img"
      :text="food.descsRecipe"
    />
  </div>
</template>

<script>
import EditCard from "../components/editRecipe.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { getDatabase, ref, onValue } from "firebase/database";
export default {
  components: { EditCard },

  setup() {
    const db = getDatabase();
    const blogREf = ref(db, "recipe/");
    const store = useStore();

    onValue(blogREf, (snapshot) => {
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.exportVal();
        console.log(childData);

        store.dispatch("userRecipe", childData);
      });
    });

    return { recipe: computed(() => store.state.thisUserRecipe) };
  },
};
</script>

<style  scoped>
.container {
  display: flex;
  flex-flow: row wrap;
}
</style>