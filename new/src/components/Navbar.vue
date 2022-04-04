<template>
  <nav>
    <h1 class="title">Recipe list</h1>

    <div class="redirect">
      <router-link class="linked-route" to="/"> Home </router-link>
    </div>
    <div>
      <p>Logged in as {{ name }}</p>
    </div>
    <div class="redirect">
      <button class="logout" @click="handleClick">Logout</button>
    </div>
    <div class="redirect">
      <router-link class="linked-route" to="/login"> Login </router-link
      ><router-link class="linked-route" to="/signup"> Signup </router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
  setup() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
    }
    const store = useStore();
    const handleClick = () => {
      store.dispatch("logout");
    };
    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
};
</script>

<style scoped>
</style>