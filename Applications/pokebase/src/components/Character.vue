<template>
<div class="single-char" @click="switchPokemon">
  <h4 class="name">{{capitalise(character.name)}}</h4>
  <img class="image" v-bind:src="character.sprites.front_default">
  <div class="types"><span v-for="(type, index) in character.types" :key="index" class="type">{{type.type.name}}</span></div>
  <h5 class="hp-label">HP</h5>
  <h5 class="hp-value" v-for="(stat, index) in character.stats" :key="index" v-if="stat.stat.name === 'hp'">{{stat.base_stat}}</h5>
  <h5 class="weight-label">Weight</h5>
  <h5 class="weight-value">{{character.weight}}</h5>
  <h5 class="height-label">Height</h5>
  <h5 class="height-value">{{character.height}}</h5>
</div>
</template>

<script>
export default {
  props: ["id"],
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
    switchPokemon() {
      this.fetchPokemon(Math.floor(Math.random() * 151) + 1);
    },
    capitalise(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
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

%label-text {
  font-size: 1.3em;
  color: #1d3557;
}

.single-char {
  width: calc(25% - 10px);
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

