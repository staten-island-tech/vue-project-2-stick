<template>
  <div class="card-container">
    <Card
      v-for="food in recipe"
      :key="food"
      :id="food.id"
      :title="food.title"
      :img="food.img"
      :text="food.descsRecipe"
      :creator="food.author"
    />
  </div>
</template>

<script>
import Card from "../components/card.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  components: { Card },

  setup() {
    const db = getDatabase();
    const blogREf = ref(db, "recipe/");
    const store = useStore();
    let list = [];
    onMounted(() => {
      store.commit("clear");
      onValue(blogREf, (snapshot) => {
        snapshot.forEach(function (childSnapshot) {
          const childData = childSnapshot.exportVal();
          list.push(childData);
          console.log(childData);

          store.dispatch("getRecipe", childData);
        });
      });
    });
    console.log(list);
    return { recipe: computed(() => store.state.recipe), Card, list };
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