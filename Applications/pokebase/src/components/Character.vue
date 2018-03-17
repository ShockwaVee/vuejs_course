<template>
<div @click="switchPokemon">
  {{character}}
</div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: {}
    };
  },
  methods: {
    fetchPokemon(id) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/", {
        method: "GET"
      }).then((response, error) => {
        response.json().then(json => {
          this.character = json;
        });
      });
    },
    switchPokemon(){
        this.fetchPokemon(Math.floor(Math.random() * 151) + 1);
    }
  },
  created() {
    this.fetchPokemon(this.id);
  }
};
</script>
