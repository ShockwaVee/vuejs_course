<template>
  <div>
      <Item v-for="(item, index) in items" :key="index" :item="item" :type="type"></Item>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  data(){
      return {
          type: this.$route.params.type,
          items: []
      }
  },
  watch:{
      '$route': 'fetchItems'
  },
  methods:{
      fetchItems() {
          this.items = [];
          this.type = this.$route.params.type;
          let initial_ids = [1, 4, 7, 10];
          initial_ids.forEach((id) => {
            fetch(`https://pokeapi.co/api/v2/${this.type}/${id}/`, {
              method: "GET"
            }).then((response, error) => {
              response.json().then(json => {
                  this.items.push(json);
                  console.log(json.name);
              })
            })
          })
      }
  },
  created(){
      this.fetchItems();
  },
  components:{
      Item
  }
}
</script>
