<template>
  <div class="formWrapper">
    <h2 @click="showForm">Add an event <span class="caret" :class="isShown ? 'down' : 'right'">&#9658;</span></h2>
    <div class="eventForm" ref="eventForm">
      <input ref="title" required type="text" v-model="event.title" placeholder="Event title..." />
      <input ref="description" required type="text" v-model="event.description" placeholder="Event description..." />
      <input ref="date" required type="date" v-model="event.date" />
      <input ref="location" required type="text" v-model="event.location" placeholder="Event location..." />
      <button @click="addEvent">Submit</button>
    </div>
  </div>
</template>



<script>
import { eventsRef } from "../firebaseApp";
export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      isShown: false
    };
  },
  methods: {
    addEvent(evt) {
      if (evt) {
        evt.preventDefault();
      }
      if (this.event.title === "") this.$refs.title.classList.add("invalid");
      else this.$refs.title.classList.remove("invalid");
      if (this.event.description === "")
        this.$refs.description.classList.add("invalid");
      else this.$refs.description.classList.remove("invalid");
      if (this.event.date === "") this.$refs.date.classList.add("invalid");
      else this.$refs.date.classList.remove("invalid");
      if (this.event.location === "")
        this.$refs.location.classList.add("invalid");
      else this.$refs.location.classList.remove("invalid");
      if (
        this.event.title !== "" &&
        this.event.description !== "" &&
        this.event.date !== "" &&
        this.event.location !== ""
      ) {
        this.event.email = this.$store.state.user.email;
        eventsRef.push(this.event);
        this.event.title = "";
        this.event.description = "";
        this.event.date = "";
        this.event.location = "";
      }
    },
    showForm() {
      if (this.$refs.eventForm.style.height === "0px") {
        this.$refs.eventForm.style.height = "196px";
        this.isShown = true;
      } else {
        this.$refs.eventForm.style.height = "0px";
        this.isShown = false;
      }
    }
  }
};
</script>

<style lang="scss">
.formWrapper {
  padding: 0px 6px 12px 6px;
  border-bottom: 1px solid #0003;
  margin-bottom: 12px;
}
h2 {
  cursor: pointer;
  font-size: 2em;
  margin-bottom: 6px;
  color: #40407a;
}
.eventForm {
  height: 0px;
  overflow: hidden;
  transition: 0.4s;
  width: 450px;
  input {
    background: #dff9fb;
    width: 100%;
    display: block;
    border: none;
    border-bottom: 2px solid #40407a;
    margin-bottom: 12px;
    font-family: "Quattrocento Sans", sans-serif;
    font-size: 1.2em;
    box-shadow: none;
    color: #40407a;
    &.invalid {
      border-bottom: 2px solid red;
    }
  }
}
.caret {
  transition: all 0.3s ease-in-out;
  display: inline-block;
  &.right {
    transform: rotate(0deg);
  }
  &.down {
    transform: rotate(90deg);
  }
}
button {
  border: none;
  padding: 4px 12px;
  font-size: 1.1em;
  color: white;
  background: #00def7;
  border-radius: 3px;
  cursor: pointer;
}
</style>
