<template>
  <form class="login" @submit.prevent="">
    <h3>Signup</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const store = useStore();

    return { email, password, store };
  },
};
</script>

<style scoped>
button {
  margin-top: 1rem;
}
</style>