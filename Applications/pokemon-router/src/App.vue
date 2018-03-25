<template>
  <div id="app">
    <h3>Pokemon router</h3>
    <h4 class="navigation">
      <router-link class="link" to="/data/pokemon">Pokemons</router-link> |
      <router-link class="link" to="/data/ability">Abilities</router-link> |
      <router-link class="link" to="/data/item">Items</router-link>
    </h4>
    <router-view class="items-wrapper"></router-view>
  </div>
</template>

<style lang="scss">
body {
  background: #f1faee;
  font-family: "Reem Kufi", sans-serif;
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

.items-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.navigation {
  text-align: center;
  font-size: 1.5em;
  color: #1d3557;
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>
