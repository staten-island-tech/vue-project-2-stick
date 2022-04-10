<template>
  <div class="card">
    <h2 class="recipe-name">Hello</h2>
    <img
      class="recipe-img"
      src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/50000454_302750660382847_5131520809503817728_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=111&ccb=1-5&_nc_sid=dd9801&_nc_ohc=VxP68C0-1AcAX-rRIyK&_nc_ht=scontent-lga3-2.xx&oh=00_AT8QLGPCxb9N0JHA01sVPtxLOwIxXRmnhIBKblQLHzsiRg&oe=6277FD03"
      alt=""
    />
    <p class="text">
      lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk
      lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk
      lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk lakjsdlfk
    </p>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  background-color: gray;
  width: 18%;
  height: 32rem;
  border-radius: 2rem;
  margin: 0.9%;
  overflow: hidden;
}
.recipe-name {
  font-size: 5rem;
  margin: 0 auto;
}
.recipe-img {
  width: 80%;
  height: auto;
  margin: 0 auto;
}

.text {
  color: white;
  font-size: 2rem;
}
</style>
