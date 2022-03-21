<template>
  <nav>
    <h1 class="title">Recipe list</h1>

    <div class="redirect">
      <router-link class="linked-route" to="/"> Home </router-link>
    </div>
    <div class="redirect">
      <button class="logout">Logout</button>
    </div>
    <div class="redirect">
      <router-link class="linked-route" to="/login"> Login </router-link
      ><router-link class="linked-route" to="/signup"> Signup </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>