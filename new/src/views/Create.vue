<template>
  <div class="new-recipe">
    <div class="side1">
      <div class="title">
        <div class="title2">
          <label for="title">Title</label>
          <textarea name="title" id="title" cols="50" rows="1">
            <!-- <input type="text" name="title"  /> -->
            hello
          </textarea>
        </div>
      </div>
      <form @submit.prevent="">
        <div>
          <div class="step-container">
            <div
              class="steps"
              v-for="step in steps"
              :key="step"
              v-html="step"
            ></div>
          </div>

          <button @click="add" class="create" @submit.prevent="handleSubmit">
            add step
          </button>
        </div>
      </form>
    </div>

    <div class="side2">
      <div class="ingredients">
        <div class="ingredients2">
          <label for="ingredients">Ingredients List</label>
          <input class="ingre" type="text" name="ingredients " />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let numb = 3;
    const steps = ref([
      '<label for="step1">Step 1</label><input type="text" name="step1" />',
      '<label for="step2">Step 2</label><input type="text" name="step2" />',
      '<label for="step3">Step 3</label><input type="text" name="step3" />',
    ]).value;
    function add() {
      numb++;
      const create = [
        `<label for="Step${numb}">Step ${numb}</label><input type="text" name="step${numb}" />`,
      ];
      console.log(steps);
      steps.push(create);
    }
    const handleSubmit = () => {
      console.log("submit");
    };
    return { add, steps, handleSubmit };
  },
};
</script>

<style scoped>
.new-recipe {
  display: flex;
  flex-flow: row nowrap;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 2%;
  background-color: pink;
  border-radius: 2rem;
  padding: 2%;
  block-size: fit-content;
}
.side1 {
  width: 50%;
}
.title {
  width: 80%;
  height: 15rem;
  border: solid;
}
.title2 {
  padding: 2%;
}

.step-container {
  margin-top: 2%;
  border: solid;
}
.steps {
  max-width: 60%;
  padding: 1%;
}
.new {
  width: 80%;
}
.create {
  margin-top: 1%;
}

.side2 {
  width: 50%;
}
.ingredients {
  margin-left: 3%;
  border: solid;
}
.ingredients2 {
  padding: 2%;
}

textarea {
  font-size: 2rem;
}
</style>