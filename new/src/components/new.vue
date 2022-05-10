<template>
  <div>
    <input id="file" type="file" v-on:change="onFileChange" required />

    <img class="imagePreviewWrapper" id="img" :src="null" alt="" />
  </div>
</template>

<script>
import { ref /* watch */ } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    let usefile = ref(null);
    const store = useStore();
    console.log(store);

    /*  watch(store.state.upload, async (newCount, oldCount) => {
      console.log(newCount);
      console.log(oldCount);
      if (newCount > 1) {
        store.dispatch
      }
    }); */
    function onFileChange() {
      let urlFile = null;
      let input = ref(document.getElementById("file")).value;
      let use = input.files;
      if (use) {
        let reader = new FileReader();
        reader.onload = () => {
          document.getElementById("img").src = reader.result;
          store.commit("imgprv", reader.result);
        };
        reader.readAsDataURL(use[0]);
        usefile = use[0];

        usefile = use[0];
        console.log(urlFile);
      }
    }

    return {
      onFileChange,
      usefile,
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