<template>
  <div class="edit-blog-cont"><Form /></div>
</template>

<script>
import Form from "../components/form.vue";
export default {
  components: {
    Form,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.edit-blog-cont {
  background-color: rgb(200, 200, 223);
  width: 100vw;
  height: 100vh;
}
</style>