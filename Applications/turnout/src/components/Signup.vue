<template>
  <div>
      <h3>Sign up</h3>
      <br>
      <input type="email" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <button @click="signUp">Sign up</button>
      <p>{{error.message}}</p>
      <br>
      <router-link to="/signin">Already a user? Sign in here</router-link>
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
        signUp(){
            firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error)=>{
                this.error = error;
            })
        }
    }
}
</script>

<style lang="scss">

</style>
