<template>
<div class="wrapper">
  <div v-bind:style="{ display: isLoading ? 'none': '', 
  cursor: this.lastPokemonIndex === this.pokemonHistory.length - 1 ? 'pointer' : 'default' }" class="single-char"
       @click="switchPokemon" >
    <h4 v-if="pokemon.name" class="name">{{capitalize(pokemon.name)}}</h4>
    <img v-if="pokemon.sprites" class="image" v-bind:src="pokemon.sprites.front_default">
    <div class="types"><span v-for="(type, index) in pokemon.types" :key="index" class="type">{{type.type.name}}</span></div>
    <h5 class="hp-label">HP</h5>
    <h5 class="hp-value" v-for="(stat, index) in pokemon.stats" :key="index" v-if="stat.stat.name === 'hp'">{{stat.base_stat}}</h5>
    <h5 class="weight-label">Weight</h5>
    <h5 class="weight-value">{{pokemon.weight}}</h5>
    <h5 class="height-label">Height</h5>
    <h5 class="height-value">{{pokemon.height}}</h5>
  </div>
  <button v-bind:style="{ display: (lastPokemonIndex === 0 || isLoading) ? 'none': '' }" @click="setPreviousPokemon" class="nav-btn left">Back</button>
  <button v-bind:style="{ display: (lastPokemonIndex === pokemonHistory.length -1 || isLoading) ? 'none': '' }" @click="setNextPokemon" class="nav-btn right">Forwards</button>
  <div class="loader" v-bind:style="{ display: !isLoading ? 'none': '' }">{{'Loading' + dots}}</div>
</div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      pokemon: {},
      isLoading: true,
      dots: "",
      pokemonHistory: [],
      lastPokemonIndex: 0
    };
  },
  methods: {
    fetchPokemon(id) {
      this.isLoading = true;
      let interval = setInterval(() => {
        if (this.dots.length > 2) {
          this.dots = "";
          return;
        }
        this.dots += ".";
      }, 1000);
      fetch("https://pokeapi.co/api/v2/pokemon/" + id + "/", {
        method: "GET"
      }).then((response, error) => {
        clearInterval(interval);
        this.isLoading = false;
        response.json().then(json => {
          this.pokemon = json;
          this.pokemonHistory.push(this.pokemon);
          this.lastPokemonIndex = this.pokemonHistory.length - 1;
        });
      });
    },
    switchPokemon() {
      if (this.lastPokemonIndex === this.pokemonHistory.length - 1)
        this.fetchPokemon(Math.floor(Math.random() * 151) + 1);
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    setPreviousPokemon() {
      this.lastPokemonIndex = --this.lastPokemonIndex;
      this.pokemon = this.pokemonHistory[this.lastPokemonIndex];
    },
    setNextPokemon() {
      this.lastPokemonIndex = ++this.lastPokemonIndex;
      this.pokemon = this.pokemonHistory[this.lastPokemonIndex];
    }
  },
  created() {
    this.fetchPokemon(this.id);
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

@mixin justify-mixin {
  justify-self: stretch;
  align-self: stretch;
  text-align: center;
}

.loader {
  text-align: center;
  height: 100%;
  transform: translateY(50%);
  font-size: 2.2em;
  color: #1d3557;
}

%label-text {
  font-size: 1.3em;
  color: #1d3557;
}

.wrapper {
  width: calc(25% - 10px);
  height: 250px;
  .nav-btn {
    border: 2px solid #457b9d;
    background: #a8dadc;
    padding: 8px 24px;
    font-weight: bold;
    margin-top: 5px;
    font-size: 1.2em;
    text-transform: uppercase;
    color: #457b9d;
    cursor: pointer;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
}

.single-char {
  width: 100%;
  height: 250px;
  background: #e63946;
  border: 2px solid #1d3557;
  border-radius: 11px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25px 93px 36px 30px 30px 30px;
  grid-template-areas:
    "name name"
    "image image"
    "types types"
    "hp-label hp-value"
    "weight-label weight-value"
    "height-label height-value";
}

.hp-label,
.hp-value,
.weight-label,
.weight-value,
.height-label,
.height-value {
  @extend %label-text;
}

.hp-label,
.hp-value,
.weight-label,
.weight-value,
.height-label,
.height-value {
  @include justify-mixin();
}

.name {
  grid-area: name;
  justify-self: center;
  font-size: 1.8em;
  color: #1d3557;
}
.image {
  grid-area: image;
  justify-self: center;
}
.types {
  grid-area: types;
  @include justify-mixin();
  .type {
    border: 2px solid #457b9d;
    background: #a8dadc;
    padding: 0px 18px;
    border-radius: 20px;
    margin-right: 8px;
    margin-left: 2px;
    font-variant: small-caps;
    font-weight: bold;
  }
}
.hp-label {
  grid-area: hp-label;
  border-right: 2px solid #457b9d;
}
.hp-value {
  grid-area: hp-value;
}
.weight-label {
  grid-area: weight-label;
  border-right: 2px solid #457b9d;
}
.weight-value {
  grid-area: weight-value;
}
.height-label {
  grid-area: height-label;
  border-right: 2px solid #457b9d;
}
.height-value {
  grid-area: height-value;
}
</style>

