<template>
  <div>
      Dashboard component:
      {{$store.state}}
      <br>
      <button @click="signOut">Sign out</button>
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp'
export default {
    methods:{
        signOut(){
            this.$store.dispatch('signOut');
            firebaseApp.auth().signOut();
        }
    }
}
</script>

<style lang="scss">

</style>
