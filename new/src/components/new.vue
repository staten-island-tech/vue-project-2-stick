<template>
  <div>
    <input id="file" type="file" v-on:change="onFileChange" />

    <img class="imagePreviewWrapper" id="img" :src="null" alt="" />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    let usefile = ref(null);
    const store = useStore();
    console.log(store);
    function onFileChange() {
      let urlFile = null;
      let input = ref(document.getElementById("file")).value;
      let use = input.files;
      if (use) {
        let reader = new FileReader();
        reader.onload = () => {
          document.getElementById("img").src = reader.result;
        };
        reader.readAsDataURL(use[0]);
        usefile = use[0];
        store.commit("imgprv", use[0]);
        usefile = use[0];
        console.log(urlFile);
      }
    }

    return {
      onFileChange,
      usefile,
      file: computed(() => store.state.preview),
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
  background-size: cover;
  background-position: center center;
}
</style>