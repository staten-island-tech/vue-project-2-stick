<template>
  <div v-if="true">
    <router-link class="add" to="/create">
      <h2 class="sign">+</h2>
    </router-link>
  </div>
</template>

<script>
import { useStore } from "vuex";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  setup() {
    const firebase = firebase;
    const auth = getAuth();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("hello");
      } else {
        console.log("no one here");
      }
    });
    const store = useStore();
    return { store, firebase };
  },
};
</script>

<style scoped>
div {
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-top: 2%;
  padding: 2%;
}
a {
  width: 15%;
  height: 40%;
  font-size: 5rem;
  background-color: gray;
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: 2rem;
}
.sign {
  margin: 0 auto;
}
</style>