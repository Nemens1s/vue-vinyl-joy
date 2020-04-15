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
import axios from 'axios'
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
  created(){
    axios.get('data.json')
            .then(response => {
              this.records = response.data
            })
  },
  data() {
    return{
      cart : [],
      records: [],
    }
  }


}
require("@/css/common.css")
</script>
