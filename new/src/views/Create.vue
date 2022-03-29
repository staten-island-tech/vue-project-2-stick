<template>
  <div class="new-recipe">
    <div class="title">
      <label for="title">Title</label>
      <input type="text" name="title" />
    </div>

    <!-- <div class="steps">
      <div>
        <label for="step1">Step 1</label>
        <input type="text" name="step1" />
      </div>

      <div>
        <label for="step3">Step 3</label>
        <input type="text" name="step3" />
      </div>
      <div>
        <button>Add Step</button>
      </div>
    </div> -->
    <div class="steps" v-for="step in steps" :key="step">
      <div v-html="step"></div>
    </div>
    <button @click="add">add step</button>
  </div>
</template>

<script>
export default {
  setup() {
    const steps = [
      '<div class="new"><label for="step1">Step 1</label><input type="text" name="step1" /></div>',
      '<div class"new"><label for="step2">Step 2</label><input type="text" name="step2" /></div>',
      '<div class"new"><label for="step3">Step 3</label><input type="text" name="step3" /></div>',
    ];
    function add() {
      const create = [
        '<div><label for="step3">Step 3</label><input type="text" name="step3" /></div>',
      ];
      console.log(steps);
      steps.push(create);
    }
    return { add, steps };
  },
};
</script>

<style scoped>
.new-recipe {
  max-width: 90%;
  margin: 0 auto;
  margin-top: 2%;
  background-color: pink;
  border-radius: 2rem;
  padding: 2%;
}
.title {
  width: 50%;
  height: 30%;
}
input {
  width: 100%;
  border-radius: 2rem;
  padding: 1%;
}

.steps {
  max-width: 60%;
}
.new {
  width: 80%;
}
</style>