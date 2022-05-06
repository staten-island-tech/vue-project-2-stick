<template>
  <div>
    <input type="file" ref="file" @input="run" />
  </div>
</template>

<script>
export default {
  setup() {
    const file = this.$ref.file;
    console.log(file);
    function name() {
      console.log(file);
    }
    const run = name();

    return { run };
  },
};
</script>

<style lang="scss" scoped>
</style>