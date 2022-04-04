<template>
  <div class="new-recipe">
    <div class="side1">
      <div class="title">
        <div class="title2">
          <label for="title">Title</label>
          <textarea name="title" id="title" cols="50" rows="1.5"> </textarea>
        </div>
      </div>
      <form>
        <div class="steps box">
          <label for="steps">Instructions</label>
          <textarea name="steps" id="steps" cols="65" rows="30"></textarea>
        </div>
        <button class="submit">Complete</button>
      </form>
    </div>

    <div class="side2">
      <div class="ingredients">
        <label for="ingredients">Ingredients</label>
        <textarea
          name="ingredients"
          id="ingredi"
          cols="60"
          rows="30"
        ></textarea>
      </div>
      <div class="img">
        <label for="img-file-name">Paste Img link Here</label>
        <textarea name="img-file-name" id="img" cols="60" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  setup() {
    return {};
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

.steps {
  max-width: 100%;
  padding: 1%;
  border: solid;
  margin-top: 2%;
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

.submit {
  margin-top: 2%;
}
textarea {
  display: block;
  margin: 0 auto;
  font-size: 2rem;
}

.img {
  margin-top: 2%;
  margin-left: 3%;
  border: solid;
}
</style>