<template>
  <div class="card">
    <h2 class="recipe-name">{{ title }}</h2>
    <div class="img-cont">
      <img class="recipe-img" :src="img" alt="" />
    </div>

    <p class="description">{{ text }}</p>
    <div class="btn-cont">
      <button class="btn" @click="goTo({ id })">Edit</button>
      <button class="btn" @click="clear({ id })">Delete</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getDatabase, ref, onValue, remove } from "firebase/database";
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
    function clear(id) {
      console.log("working");
      let idRef = id.id;
      const blog = ref(db, "recipe/" + idRef);
      remove(blog);
      location.reload();
    }
    return { goTo, clear };
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  background-color: gray;
  width: 20%;
  height: 10%;
  border-radius: 2rem;
  margin: 0.9%;
  overflow: hidden;
}
.recipe-name {
  font-size: 5rem;
  margin: 0 auto;
}
.img-cont {
  width: 80%;
  height: 40%;
  margin: 0 auto;
}
.recipe-img {
  width: 100%;
  height: 100%;
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
.btn-cont {
  display: flex;
  flex-flow: row nowrap;
}
</style>
