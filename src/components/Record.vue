<template>
    <div id="vinyl__record" class="card">
        <img class="d-block record__image" :src="item.url" alt="album cover">
        <div class="card-body record__info text-center">
            <h3>{{item.band}}</h3>
            <h4>{{item.title}}</h4>
            <h5>{{item.price}}$</h5>
            <hr>

            <button class="button__add" v-on:click="$emit('add-to-cart', item.title)">
                ADD TO BASKET
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
    }
</script>
<style scoped  src="../css/index_style.css">

</style>
