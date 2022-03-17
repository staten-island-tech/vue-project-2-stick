<template>
  <nav>
    <div class="redirect">
      <router-link class="linked-route" to="/"> Home </router-link>
    </div>

    <div class="redirect">
      <router-link class="linked-route" to=""> Login </router-link>
    </div>

    <div class="redirect">
      <router-link class="linked-route" to=""> Signup </router-link>
    </div>

    <div class="redirect">
      <button class="logout">Logout</button>
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