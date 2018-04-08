<template>
  <div id="app">
    <h3>Got jonkes? Too bad I
      <b>HATE</b> them.</h3>
    <button @click="initJokes">Get jonkes</button>
    <button @click="add10Jokes">Get 10 jonkes</button>
    <div class="filter">
      <span v-for="(type, index) in length" :key="index">
        <input type="checkbox" v-model="checkedLengths" :value="type" checked>
        <label>{{type}}</label>&nbsp;
      </span>
    </div>
    <div class="joke-container">
      <Joke v-for="(joke, index) in $store.state.jokes" :joke="joke" :key="index" :index="index" v-show="checkedLengths.includes(joke.length)"></Joke>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke";
export default {
  data() {
    return {
      length: ["short", "medium", "long"],
      checkedLengths: ["short", "medium", "long"]
    };
  },
  methods: mapActions(["initJokes", "add10Jokes"]),
  components: { Joke }
};
</script>



<style lang="scss">
html {
  background-color: #16a085;
}
#app {
  font-family: "Reem Kufi", sans-serif;
  text-align: center;
  font-size: 2.2em;
}
.joke-container {
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px;
  flex-wrap: wrap;
}
h3 {
  margin-bottom: 5px;
}
</style>