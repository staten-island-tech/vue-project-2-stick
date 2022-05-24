<template>
  <div>
    <label for="input">Insert Image Link</label>
    <input id="file" name="input" type="text" v-on:change="onFileChange" />
    <img class="imagePreviewWrapper" id="img" src="" alt="" />
  </div>
</template>

<script>
import { ref /* watch */ } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    console.log(store);

    function onFileChange() {
      let img = ref(document.getElementById("file")).value;
      let link = img.value;
      console.log(link);
      if (link !== null) {
        document.getElementById("img").src = link;
        store.commit("imgprv", link);
      } else {
        document.getElementById("img").src = null;
        store.commit("imgprv", null);
      }
    }
    return {
      onFileChange,
    };
  },
};
</script>

<style  scoped>
.imagePreviewWrapper {
  width: 250px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  margin-top: 2%;
  background-size: cover;
  background-position: center center;
}
</style>