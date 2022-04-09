<template>
  <div class="card-container">
    <h2>Hello</h2>
    <img
      class="recipe-img"
      src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/50000454_302750660382847_5131520809503817728_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=111&ccb=1-5&_nc_sid=dd9801&_nc_ohc=VxP68C0-1AcAX-rRIyK&_nc_ht=scontent-lga3-2.xx&oh=00_AT8QLGPCxb9N0JHA01sVPtxLOwIxXRmnhIBKblQLHzsiRg&oe=6277FD03"
      alt=""
    />
    <p class="text">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </p>
  </div>
</template>

<script>
export default {
  /* props: {
    title: String,
    img: String,
    text: String,
  }, */
  setup() {
    return {};
  },
};
</script>

<style scoped>
.card-container {
  background-color: black;
  width: 23%;
  height: 70%;
  overflow: hidden;
  box-sizing: border-box;
}

.recipe-img {
  width: 80%;
  height: auto;
}

.text {
  color: white;
}
</style>
