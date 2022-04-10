<template>
  <div class="card-container">
    <Card />
    <Card />
    <Card />
    <Card />
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

<style  scoped>
.card-container {
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  height: 100%;
  justify-content: flex-start;

  background-color: rgb(173, 216, 230);
}
</style>