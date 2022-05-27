<template>
  <button class="card" @click="goTo({ id })">
    <h2 class="recipe-name">{{ title }}</h2>
    <div class="img-cont">
      <img class="recipe-img" :src="img" alt="" />
    </div>
    <div class="desc-cont">
      <p class="description">{{ text }}</p>
    </div>
    <div class="author">
      <h2 class="card-by">By: {{ creator }}</h2>
    </div>
  </button>
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
    creator: String,
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
        store.commit("view", data);
      });
      router.push("/BlogView");
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
  width: 20vw;
  height: 40vh;
  border-radius: 2rem;
  margin: 0.9%;
}
.recipe-name {
  font-size: 2rem;
  font-size: 2vw;
  margin: 0 auto;
}
.img-cont {
  width: 90%;
  height: 40%;
  margin: 0 auto;
}
.recipe-img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  margin: 0 auto;
}
.desc-cont {
  width: 90%;
  height: 40%;
  margin: 0 auto;
  margin-top: 3%;
  background-color: rgb(170, 219, 219);
  border-radius: 2rem;
  padding: 1rem;
  overflow: hidden;
}
.description {
  margin: 0 auto;
  font-size: 2rem;
}
.author {
  margin: 0 auto;
  padding: 2%;
}
.card-by {
  font-size: 1rem;
  font-size: 1vw;
}

@media screen and (max-width: 124rem) {
  .card {
    width: 20%;
  }
}

@media screen and (max-width: 88rem) {
  .card {
    width: 30%;
    height: 32rem;
  }
}

@media screen and (max-width: 66rem) {
  .card {
    width: 40%;
  }
  .recipe-name {
    font-size: 4rem;
    font-size: 4vw;
  }
}

@media screen and (max-width: 50rem) {
  .card {
    width: 60%;
  }
  .recipe-name {
    font-size: 5rem;
    font-size: 6vw;
  }
}
</style>
