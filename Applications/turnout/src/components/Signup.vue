<template>
    <div>
      <h2 class="signUpTitle">Sign up</h2>
      <p class="errorMessage">{{error.message}}</p>
      <div class="signUpWrapper">
      <input type="email" placeholder="Email" v-model="email"/>
      <input type="password" placeholder="Password" v-model="password"/>
      <button @click="signUp">Sign up</button>
      </div>
      <router-link class="signUp" to="/signin">Not a user? Create an account here</router-link>
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
h2.signUpTitle {
  text-align: center;
  font-size: 2em;
  margin: 0px;
  margin-bottom: 39px;
  font-family: "Quattrocento Sans", sans-serif;
}
.signUpWrapper {
  input,
  button {
    display: block;
    width: 400px;
    margin: 0px auto;
    padding: 0px;
    cursor: pointer;
  }
  input {
    border: none;
    border-bottom: 2px solid #2f3542;
    margin-bottom: 12px;
    font-family: "Quattrocento Sans", sans-serif;
    font-size: 1.2em;
    box-shadow: none;
    background: #dff9fb;
    color: #2f3542;
  }
  button {
    border: none;
    padding: 4px 12px;
    font-size: 1.1em;
    color: white;
    background: #00def7;
    border-radius: 3px;
  }
}
.signUp {
  width: 100%;
  display: inline-block;
  text-align: center;
  margin-top: 24px;
  font-family: "Quattrocento Sans", sans-serif;
  color: #1e3799;
  font-size: 1.4em;
  &:visited {
    color: #1e3799;
  }
}

</style>
