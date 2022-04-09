<template>
  <nav>
    <h1 class="title">Recipe list</h1>

    <div>
      router
      <router-link class="linked-route" to="/"> Home </router-link>
    </div>
    <div>
      <p v-if="user !== null">Hello {{ user.email }}</p>
    </div>
    <div>
      <button class="logout" @click="handleClick">Logout</button>
    </div>
    <div>
      <router-link class="linked-route" to="/login"> Login </router-link
      ><router-link class="linked-route" to="/signup"> Signup </router-link>
    </div>
    <div>
      <router-link v-if="user" class="linked-route" to="/create">
        Create Recipe
      </router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed /* ref */ } from "vue";

export default {
  setup() {
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