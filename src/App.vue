<template>
  <div id="app" class="body">
    <NavBar></NavBar>
    <router-view v-bind:records="records"
                 v-bind:cart="cart"
    v-on:add-to-cart="addToCart"></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    addToCart(title){
      for(let i = 0; i < this.records.length; i++){
        if (this.records[i].title === title){
          this.cart.push(this.records[i]);
        }
      }
    }
  },
  data() {
    return{
      cart : [],
      records: [
        {
          'id': 1,
          'title' : 'De Mysteriis Dom Sathanas',
          'band' : 'Mayhem',
          'price' : 20,
          'url' : "https://upload.wikimedia.org/wikipedia/ru/c/ce/De_Mysteriis_Dom_Sathanas.jpg"
        },
        {
          'id' : 2,
          'title': 'Sergeant Pepper',
          'band' : 'The Beatles',
          'price' : 25,
          'url' : "https://d8mkdcmng3.imgix.net/3782/586566.png?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=d1b119d71f592980ec46b929d11ae48c"
        },
        {
          'id' : 2,
          'title': 'Sergent Pepper',
          'band' : 'The Beatles',
          'price' : 25,
          'url' : "https://d8mkdcmng3.imgix.net/3782/586566.png?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=d1b119d71f592980ec46b929d11ae48c"
        },

      ],
    }
  }


}
require("@/css/common.css")
</script>
