<template>
  <div class="card">
    <h2 class="recipe-name">{{ title }}</h2>

    <img class="recipe-img" :src="img" alt="" />
    <p class="description">{{ text }}</p>
    <button class="btn" @click="goTo({ id })">Edit</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getDatabase, ref, onValue } from "firebase/database";
import { useStore } from "vuex";
export default {
  props: {
    title: String,
    text: String,
    img: String,
    description: String,
    id: String,
  },
  setup() {
    const store = useStore();
    const db = getDatabase();
    const router = useRouter();
    function goTo(id) {
      console.log("working");
      let idRef = id.id;
      const blog = ref(db, "recipe/" + idRef);
      onValue(blog, (snapshot) => {
        const data = snapshot.val();
        store.commit("edit", data);
      });
      router.push("/editView");
    }
    return { goTo };
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  background-color: gray;
  width: 18%;
  height: 32rem;
  border-radius: 2rem;
  margin: 0.9%;
  overflow: hidden;
}
.recipe-name {
  font-size: 5rem;
  margin: 0 auto;
}
.recipe-img {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
.description {
  background-color: rgb(228, 163, 163);
  border-radius: 2rem;
  width: 95%;
  padding: 2%;
  text-align: center;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 2rem;
}

.btn {
  width: 50%;
  height: 15%;
  margin: 0 auto;
}
</style>
