<template>
  <div class="card">
    <h2 class="recipe-name">{{ title }}</h2>
    <div class="img-cont">
      <img class="recipe-img" :src="img" alt="" />
    </div>

    <p class="description">{{ text }}</p>
    <div class="btn-cont">
      <div class="btn-cont2">
        <button class="btn" @click="goTo({ id })">Edit</button>
      </div>

      <div class="btn-cont2">
        <button class="btn" @click="clear({ id })">Delete</button>
      </div>
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
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  background-color: gray;
  width: 20vw;
  max-width: 40rem;
  height: 40vh;
  max-height: 40rem;
  padding: 1%;
  border-radius: 2rem;
  margin: 0.9%;
}
.recipe-name {
  margin: 0 auto;
  font-size: 2rem;
  font-size: 2vw;
}
.img-cont {
  width: 90%;
  height: 50%;
  margin: 0 auto;
}
.recipe-img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
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
  font-size: 2vw;
}

.btn {
  width: 100%;
  height: 100%;

  margin: 0 auto;
}
.btn-cont {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: auto;
  margin: 0 auto;
}
.btn-cont2 {
  width: 50%;
}

@media (max-width: 125rem) {
  .card {
    width: 30rem;
    height: 28rem;
  }
}

@media (max-width: 96rem) {
  .recipe-name {
    font-size: 3rem;
    font-size: 3vw;
  }
  .description {
    font-size: 3rem;
    font-size: 2.5vw;
  }
} ;
</style>
