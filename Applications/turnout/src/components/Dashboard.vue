<template>
  <div>
    Dashboard component: {{$store.state.events}}
    <br>
    <hr>
    <AddEvent/>
    <button @click="signOut">Sign out</button>
    <br>
    <EventItem v-for="(event, index) in $store.state.events" :key="index" :event="event"></EventItem>
  </div>
</template>

<script>
import {
  firebaseApp,
  eventsRef
} from '../firebaseApp';
import AddEvent from './AddEvent.vue';
import EventItem from './EventItem.vue';
export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted(){
    eventsRef.on('value', (snap)=>{
      let events = [];
      snap.forEach(event =>{
        events.push(event.val());
      });
      this.$store.dispatch('setEvents', events);
    });
  }
}

</script>

<style lang="scss">

</style>
