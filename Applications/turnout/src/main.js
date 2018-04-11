import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import store from './store'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import {firebaseApp} from './firebaseApp'

Vue.use(VueRouter);

const routes = [{
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/signup',
    component: Signup
  }
];

firebaseApp.auth().onAuthStateChanged(user => {
  if (user){
    store.dispatch('signIn', user);
    router.push('/dashboard');
  }else{
    router.replace('/signin');
  }
});

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

