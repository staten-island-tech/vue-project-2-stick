<template>
  <div class="card">
    <h2 class="recipe-name">{{ title }}</h2>
    <div class="img-cont">
      <img class="recipe-img" :src="img" alt="" />
    </div>

    <p class="description">{{ description }}</p>
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
      router.push("/MyRecipe");
      console.log("working");
      let idRef = id.id;
      const blog = ref(db, "recipe/" + idRef);

      remove(blog);
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
  width: 20%;
  height: 35rem;
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
  height: 20%;
  padding: 2%;
  text-align: center;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 2rem;
  overflow: hidden;
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
