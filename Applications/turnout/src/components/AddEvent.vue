<template>
  <div>
    <h3>Add an event
      <input type="checkbox" v-model="showForm" />
    </h3>
    <div v-if="showForm">
      <input type="text" v-model="event.title" placeholder="Event title..." />
      <br>
      <input type="text" v-model="event.description" placeholder="Event description..." />
      <br>
      <input type="date" v-model="event.date" />
      <br>
      <input type="text" v-model="event.location" placeholder="Event location..." />
      <br>
      <button @click="addEvent">Submit</button>
    </div>
  </div>
</template>



<script>
import {eventsRef} from '../firebaseApp';
export default {
 data() {
   return {
     event: {
       title: '',
       description: '',
       date: '',
       location: '',
       email: ''
     },
     showForm: false
   }
 },
 methods:{
     addEvent(){
         this.event.email = this.$store.state.user.email;
         eventsRef.push(this.event);
     }
 }

}
</script>

<style lang="scss">

</style>
