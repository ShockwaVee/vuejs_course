<template>
<div class="wrapper">
<div v-if="type === 'pokemon'" class="single-char pokemon" @click="switchItem">
  <h4 v-if="currentItem.name" class="name">{{capitalize(currentItem.name)}}</h4>
  <img v-if="currentItem.sprites" class="image" v-bind:src="currentItem.sprites.front_default">
  <div class="types">
      <span v-for="(type, index) in currentItem.types" :key="index" class="type">{{type.type.name}}</span>
    </div>
    <h5 class="hp-label">HP</h5>
    <h5 class="hp-value" v-for="(stat, index) in currentItem.stats" :key="index" v-if="stat.stat.name === 'hp'">{{stat.base_stat}}</h5>
    <h5 class="weight-label">Weight</h5>
    <h5 class="weight-value">{{currentItem.weight}}</h5>
    <h5 class="height-label">Height</h5>
    <h5 class="height-value">{{currentItem.height}}</h5>
  </div>
  <div v-if="type === 'ability'" class="single-char ability" @click="switchItem">
  <h4 v-if="currentItem.name" class="name">{{capitalize(currentItem.name)}}</h4>
  <p class="description">{{currentItem.effect_entries[0].effect}}</p>
  </div>
  <div v-if="type === 'item'" class="single-char item" @click="switchItem">
  <h4 v-if="currentItem.name" class="name">{{capitalize(currentItem.name)}}</h4>
  <img v-if="currentItem.sprites" class="image" v-bind:src="currentItem.sprites.default">
  <p class="description">{{currentItem.effect_entries[0].effect}}</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      currentItem: {}
    };
  },
  props: ["item", "type"],
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    switchItem() {
      let random_id = Math.ceil(Math.random() * 151) + 1;
      fetch(`https://pokeapi.co/api/v2/${this.type}/${random_id}/`, {
        method: "GET"
      }).then((response, error) => {
        response.json().then(json => {
          this.currentItem = json;
        });
      });
    }
  },
  created() {
    this.currentItem = this.item;
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

.single-char{
   width: 100%;
  background: #e63946;
  border: 2px solid #1d3557;
  border-radius: 11px;
  display: grid;
  cursor: pointer;
}
.pokemon {
  height: 250px;
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
.ability {
  grid-template-columns: 1fr;
  grid-template-rows: 25px auto;
  grid-template-areas:
    "name"
    "desc";
  grid-row-gap: 20px;
}
.item {
  grid-template-columns: 1fr;
  grid-template-rows: 25px 15px auto;
  grid-template-areas:
    "name"
    "image"
    "desc";
  grid-row-gap: 20px;
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
.description {
  grid-area: desc;
  font-size: 1.2em;
  padding: 10px;
}
</style>
