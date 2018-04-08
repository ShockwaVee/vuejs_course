<template>
<div class="joke-card">
    <button @click="removeJoke(index)" class="remove">&times;</button>
    <p>{{joke.quote}}</p>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions(["removeJoke"]),
  props: ["joke", "index"]
};
</script>

<style lang="scss">
.joke-card {
  width: calc(50% - 42px);
  background: #ecf0f1;
  padding: 15px 5px;
  margin: 10px;
  border: 6px solid #2ecc71;
  .remove {
    float: right;
    border: none;
    background: transparent;
    font-size: 0.6em;
    padding: 0;
    color: #c0392b;
    font-weight: bold;
    margin-top: -14px;
    margin-right: 5px;
  }
  p {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
  }
}
</style>
