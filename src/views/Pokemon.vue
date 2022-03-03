<template>
  <div class="poke-card" v-if="PokemonData">
    <h2 class="card-name">{{ PokemonData.name }}</h2>
    <ul class="card-image-list">
      <img class="card-image" :src="asdf" />
      <!-- <img class="card-image" :src="spriteBack" />
      <img class="card-image" :src="spriteShinyFront" />
      <img class="card-image" :src="spriteShinyBack" /> -->
    </ul>
    <ul class="types"></ul>
  </div>
</template>
  

<script>
export default {
  data() {
    return {
      PokemonData: {},
    };
  },
  mounted: function () {
    /* fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => (this.PokemonData = data))
      .catch((err) => console.log(err.message)); */
    this.fetchData().then((this.load = true));
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`
        );
        const data = await response.json();
        this.PokemonData = data;
        console.log(this.PokemonData);
        return this.PokemonData;
      } catch (error) {
        console.log(error);
      }
    },
  },
  /* computed: {
    spriteFront: function () {
      return `${this.PokemonData.sprites.front_default}`;
    },
    spriteBack: function () {
      return `${this.PokemonData.sprites.back_default}`;
    },
    spriteShinyFront: function () {
      return `${this.PokemonData.sprites.front_shiny}`;
    },
    spriteShinyBack: function () {
      return `${this.PokemonData.sprites.back_shiny}`;
    },
  }, */
};
</script>

<style scoped>
</style>