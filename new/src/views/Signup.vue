<template>
  <form class="login" @submit.prevent="handleSubmit">
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
import { useRouter } from "vue-router";
import { getDatabase, set } from "firebase/database";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch("signup", {
          email: email.value,
          password: password.value,
        });
        writeUserData();
        router.push("/");
      } catch (err) {
        error.value = err.message;
      }
    };

    function writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase();
      set(ref(db, "users/" + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
      console.log(db);
    }

    return { email, password, store, handleSubmit };
  },
};
</script>

<style scoped>
button {
  margin-top: 1rem;
}
</style>