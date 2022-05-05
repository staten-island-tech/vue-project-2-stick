<template>
  <div>
    <input ref="fileInput" type="file" @input="pickFile" />
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>
  </div>
</template>

<script>
export default {
  setup() {
    function selectImage() {
      this.$refs.fileInput.click();
    }

    return {};
  },
  /*    data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
}; */
};
</script>

<style lang="scss" scoped>
</style>