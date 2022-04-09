<template>
  <div class="main">
    <div class="cont">
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beef-wellington-recipe-1605882724.jpg?crop=0.935xw:0.624xh;0.0646xw,0.257xh&resize=980:*"
        alt=""
      />
      <div>
        <p class="p1">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
    <div class="cont">
      <div>
        <p class="p2">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>

      <img
        src="https://t3.ftcdn.net/jpg/03/15/70/22/240_F_315702291_lLYi5FUYX2rWW1mZfMyQr7TbciCNOYrz.jpg"
        alt=""
      />
    </div>
    <div><Footer /></div>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  components: {
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.main {
  box-sizing: border-box;
  height: 100vh;
  width: 98.5vw;
  background-color: black;
}
.cont {
  background-color: black;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
}

.p1 {
  color: white;
  margin-top: 20%;
  text-align: center;
}
.p2 {
  color: white;
  margin-top: 7%;
}
.footer {
  color: gray;
  width: 100%;
}
</style>