<template>
  <div class="main">
    <div class="create sec">
      <div class="img-container">
        <img
          src="https://images.collegexpress.com/article/How-to-Create-Your-Own-College-Major22.jpg"
          alt="create"
        />
      </div>
      <div class="p-container">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="share sec">
      <div class="img-container">
        <img
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/04/share-of-voice-what-it-is-why-it-matters-how-to-measure-it-5e985f3d6c8ae-760x400.png"
          alt="share"
        />
      </div>
      <div class="p-container">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="explore sec">
      <div class="img-container">
        <img
          src="https://innonbathcreek.com/wp-content/uploads/2018/06/explore-icon-300x232.jpg"
          alt="explore"
        />
      </div>
      <div class="p-container">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  height: 100%;
  width: 100vw;
  background-image: black;
  background-size: cover;

  justify-content: space-around;
  align-items: center;
  resize: none;
}

.sec {
  margin-top: 2%;
  margin-bottom: 2%;
  width: 30%;
  height: 70%;
  padding: 2rem;
  background-image: url("https://www.pngitem.com/pimgs/m/15-156895_blue-patterns-background-blue-triangle-pattern-background-background.png");
  border-radius: 2rem;
}

.img-container {
  width: 80%;
  height: 40%;
  box-sizing: border-box;
  margin: 0 auto;
}

img {
  border-radius: 2rem;
  width: 100%;
  height: 100%;
}

p {
  color: black;
  font-size: 2rem;
  margin-top: 25%;
}
</style>