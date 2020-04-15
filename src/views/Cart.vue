<template>
    <div class="container">
        <h2 id="cart__message" class="text-center mt-4">YOUR CART</h2>
        <hr>
        <div v-if="cart.length">
            <div class="row pb-2" v-for="(record, idx) in cart" v-bind:key="idx">
                <div>
                    <img class="cart__image" :src="record.url" alt="album cover">
                </div>
                <div class="purchase__info">
                    <p class="vinyl-info">{{record.band}} - {{record.title}}</p>
                    <p>Price: {{record.price}}$</p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div>
                    <p class="price__info pl-3 mb-0">Total: {{totalPrice}}$</p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-6">
                    <router-link class="btn btn-lg back__button ml-4 mb-2 px-5 pt-2" to="/">Cancel</router-link>
                </div>
                <div class="col-6">
                    <router-link class="btn btn-lg float-right continue__button mb-2 mr-md-2 px-5 pt-2" to="/customer-info">Confirm</router-link>
                </div>
            </div>

        </div>

        <div v-else class="window__fullsize justify-content-center">
            <h2 class="text-center">Seems like your cart is empty</h2>
            <h3 class="text-center">Go and find some awesome records </h3>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['cart'],
        computed :{
            totalPrice() {
                return this.cart.map(item => item.price).reduce((total, amount) => total + amount);
            }
        }
    }
</script>
<style scoped  src="../css/cart_style.css">

</style>
