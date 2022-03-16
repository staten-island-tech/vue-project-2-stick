<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      pokemons: [],
    };
  },
  methods: {
    fetchData: async function () {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
        );
        const data = await response.json();
        this.pokemons = data.results;
        console.log(this.pokemons)
      } catch (error) {
        console.log("oops");
      }
    },
  },
  created: function () {
    this.fetchData()
  },
};
</script>
