<template>
    <div class="container">
        <div v-if="cart.length">
            items in cart
        </div>
        <div v-else>
            no items
        </div>
    </div>
</template>


<script>
    export default {
        props: ['cart']
    }
</script>
