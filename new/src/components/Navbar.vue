<template>
  <nav>
    <h1 class="title">Recipe list</h1>

    <div>
      <router-link class="linked-route" to="/blog"> Blogs</router-link>
      <router-link class="linked-route" to="/"> Home </router-link>
    </div>

    <div>
      <button class="logout" @click="handleClick">Logout</button>
    </div>
    <div>
      <router-link v-if="user === null" class="linked-route" to="/login">
        Login </router-link
      ><router-link v-if="user === null" class="linked-route" to="/signup">
        Signup
      </router-link>
    </div>
    <div>
      <router-link v-if="user" class="linked-route" to="/create">
        Create Recipe
      </router-link>
    </div>
    <div class="displayName">
      <p v-if="user !== null">Hello {{ user.email }}</p>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed /* ref */ } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const handleClick = () => {
      store.dispatch("logout");
      router.push("/");
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
.displayName {
  margin-left: 1%;
}
p {
  font-size: 2.5rem;
}
</style>