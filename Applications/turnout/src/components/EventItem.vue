<template>
  <div>
    <h4>{{event.title}}</h4>
    <p>{{event.description}}</p>
    <ul>
      <li>{{event.date}}</li>
      <li>{{event.location}}</li>
      <li>{{event.email}}</li>
    </ul>
  </div>
</template>


<script>
export default{
    props: ['event']
}
</script>

<style lang="scss">

</style>
