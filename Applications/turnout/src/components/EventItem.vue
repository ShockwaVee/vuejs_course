<template>
  <div class="eventWrapper">
    <h4 class="eventTitle">{{event.title}}</h4>
    <p class="eventDescription">{{event.description}}</p>
    <ul class="listInfo">
      <li><h5 class="label">When</h5>{{event.date}}</li>
      <li><h5 class="label">Where</h5>{{event.location}}</li>
      <li><h5 class="label">Who</h5>{{event.email}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  props: ["event"]
};
</script>

<style lang="scss">
.eventWrapper {
  font-family: "Quattrocento Sans", sans-serif;
  width: calc(33% - 30px);
  display: inline-block;
  margin: 5px 5px;
  border: 4px solid #40407a;
  padding: 5px 6px;
  .eventTitle {
    margin-top: 0px;
    margin-bottom: 0px;
    text-transform: uppercase;
    font-size: 1.9em;
    color: #2f3542;
  }
  .eventDescription {
    margin: 0;
    font-size: 1.2em;
  }
  .listInfo {
    list-style-type: none;
    margin: 6px 0px;
    li {
      font-size: 1.1em;
    }
    .label {
      margin: 0px;
      width: 14%;
      margin-right: 16px;
      display: inline-block;
      text-transform: uppercase;
      border-right: 2px solid #40407a;
      font-weight: 900;
      font-size: 0.95em;
      color: #2f3542;
    }
  }
}
</style>
