<template>
  <div id="dash">
    <AddEvent/>
    <button @click="signOut" class="signOut">Sign out</button>
    <EventItem v-for="(event, index) in $store.state.events" :key="index" :event="event"></EventItem>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp";
import AddEvent from "./AddEvent.vue";
import EventItem from "./EventItem.vue";
export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted() {
    eventsRef.on("value", snap => {
      let events = [];
      snap.forEach(event => {
        events.push(event.val());
      });
      this.$store.dispatch("setEvents", events);
    });
  }
};
</script>

<style lang="scss">
#dash {
  font-family: "Quattrocento Sans", sans-serif;
}
.signOut {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 5px;
  border: none;
  padding: 4px 12px;
  font-size: 1.1em;
  color: white;
  background: #00def7;
  border-radius: 3px;
}
</style>
