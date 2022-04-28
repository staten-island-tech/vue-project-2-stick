<template>
  <div class="card-container">
    <Card
      v-for="food in recipes"
      :key="food"
      :title="food.title"
      :text="food.instructionsRecipe"
      :item="food.ingredientsRecipe"
    />
  </div>
</template>

<script>
import Card from "../components/card.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  components: { Card },

  setup() {
    const db = getDatabase();
    const blogREf = ref(db, "recipe/");
    const store = useStore();
    onMounted(() => {
      onValue(blogREf, (snapshot) => {
        /* store.dispatch("getRecipe", data); */
        snapshot.forEach(function (childSnapshot) {
          const key = childSnapshot.key;
          console.log(key);
          const childData = childSnapshot.exportVal();
          console.log(childData);
          store.dispatch("getRecipe", childData);
        });

        /* for (const recipe in data) {
          
        } */
        /* console.log(data); */
      });
    });

    return { recipes: computed(() => store.state.recipe), Card };
  },
};
</script>

<style  scoped>
.card-container {
  display: flex;
  flex-flow: row wrap;
  width: 99vw;
  min-height: 95.95vh;
  height: 100%;
  justify-content: flex-start;
  background-color: rgb(173, 216, 230);
}

button {
  margin: 0 auto;
}
</style>