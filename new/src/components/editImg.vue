<template>
  <div>
    <input id="file" type="text" v-on:change="onFileChange" />
    <img class="imagePreviewWrapper" id="img" src="" alt="" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    console.log(store);
    onMounted(() => {
      let prev = ref(store.state.editRecipe.img).value;
      document.getElementById("img").src = prev;
      document.getElementById("file").value = prev;
    });

    function onFileChange() {
      let img = ref(document.getElementById("file")).value;
      let link = img.value;
      console.log(link);
      if (link !== null) {
        document.getElementById("img").src = link;
        store.commit("imgCha", link);
      }
    }
    return {
      onFileChange,
    };
  },
};
</script>

<style  scoped>
input {
  margin-top: 2%;
}
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