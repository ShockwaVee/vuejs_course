<template>
  <div id="app">
    <h3>{{title}}</h3>
        <character :id="id" :key="id" v-for="id in initial_ids"/>
  </div>
</template>

<script>
import character from "./components/Character.vue";
export default {
  name: "app",
  data() {
    return {
      title: "Generate your team",
      initial_ids: [1, 4, 7]
    };
  },
  components: {
    character
  }
};
</script>

<style lang="scss">
body {
  background: #f1faee;
  font-family: "Titillium Web", sans-serif;
}

#app {
  h3 {
    font-size: 2.5em;
    text-align: center;
    color: #1d3557;
    margin-top: 5px;
    margin-bottom: 10px;
  }
}
</style>

