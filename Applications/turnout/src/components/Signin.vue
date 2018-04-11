<template>
  <div>
      <h3>Sign in</h3>
      <br>
      <input type="email" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <button @click="signIn">Sign in</button>
      <p>{{error.message}}</p>
  </div>
</template>

<script>
import {firebaseApp} from '../firebaseApp.js'

export default {
    data(){
        return{
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    },
    methods:{
        signIn(){
            firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password).catch((error)=>{
                this.error = error;
            })
        }
    }
}
</script>

<style lang="scss">

</style>
