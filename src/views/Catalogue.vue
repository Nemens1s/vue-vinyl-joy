<template>
    <div class="container transparent__background">
        <div class="input-group mt-4">
            <input type="text" class="form-control mx-md-5" placeholder="What are you looking for?"
                   aria-label="searchBox">
        </div>
        <hr>
        <div class="row justify-content-md-center" v-for="(row, idx) in productChunks" v-bind:key="idx">
           <div class="col-md-8 col-lg-4 mb-1" v-for="(item, idx) in row" v-bind:key="idx">
                    <Record v-bind:item="item"
                    v-on:add-to-cart="addToCart"></Record>
           </div>
        </div>

    </div>
</template>

<script>
    import Record from "../components/Record"
    import _ from 'lodash'
    require("@/css/common.css");
    export default {
        props: ['records'],
        components: {
            Record
        },
        computed: {
            productChunks(){
                return _.chunk(Object.values(this.records), 3);
            }
        },
        methods: {
            addToCart(title){
                this.$emit('add-to-cart', title)
            }
        }

    }
</script>
