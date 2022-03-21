<template>
  <form class="login" @submit.prevent="">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Login</button>
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
button {
  margin-top: 1rem;
}
</style>