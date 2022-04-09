<template>
  <div>
    <Card />
  </div>
</template>

<script>
import Card from "../components/card.vue";

export default {
  components: { Card },
  setup() {
    return {};
  },
};
</script>

<style scoped>
div {
  width: 90vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-top: 2%;
  padding: 2%;
}
</style>