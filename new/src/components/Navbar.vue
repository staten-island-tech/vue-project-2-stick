<template>
  <nav>
    <h1 class="title">Recipe list</h1>

    <div class="displayName">
      <p v-if="user !== null">Logged in as: {{ user.email }}</p>
    </div>

    <div class="link">
      <router-link class="linked-route" to="/blog"> Recipe</router-link>
      <router-link class="linked-route" to="/"> Home </router-link>
      <router-link class="linked-route" to="/MyRecipe"> My Recipe </router-link>
    </div>

    <div>
      <button class="logout" v-if="user !== null" @click="handleClick">
        Logout
      </button>
    </div>
    <div>
      <router-link v-if="user === null" class="linked-route" to="/login">
        Login </router-link
      ><router-link v-if="user === null" class="linked-route" to="/signup">
        Signup
      </router-link>
    </div>
    <div class="end">
      <router-link v-if="user" class="linked-route" to="/create">
        Create Recipe
      </router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
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
nav {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1rem;
  flex-flow: row nowrap;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom: solid;
}

nav h1 {
  margin-right: auto;
}

nav a,
nav button,
nav span {
  margin-left: 2rem;
}

nav a {
  color: #131313;
  text-decoration: none;
  font-weight: bold;
  font-size: 4rem;
  font-size: 1.5vw;
}

nav span {
  color: gray;
}
.displayName {
  width: 30%;
}
p {
  font-size: 2.5rem;
}

.end {
  margin-right: 5%;
}
</style>