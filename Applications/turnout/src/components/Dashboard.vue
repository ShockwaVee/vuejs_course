<template>
  <div>
    Dashboard component: {{$store.state}}
    <br>
    <hr>
    <AddEvent/>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
import {
  firebaseApp
} from '../firebaseApp';
import AddEvent from './AddEvent.vue';
export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent
  }
}

</script>

<style lang="scss">

</style>
