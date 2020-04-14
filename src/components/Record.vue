<template>
    <div id="vinyl__record" class="card" >
        <img class="d-block record__image" :src="item.url" alt="album cover" >
        <div class="card-body record__info text-center">
            <h3>{{item.band}}</h3>
            <h4>{{item.title}}</h4>
            <h5>{{item.price}}$</h5>
            <hr>
            <div>
                <button class="button__add" v-on:click="$emit('add-to-cart', item.title)" data-toggle="modal" data-target="#shoppingCart">
                    ADD TO BASKET</button>
                <div id="shoppingCart" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Shopping cart</h5>
                                <button class="close" data-dismiss="modal">
                                    &times;
                                </button>
                            </div>
                            <div class="modal-body">
                                Shopping cart items will go here.
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" data-dismiss="modal">Keep shopping</button>
                                <button class="btn btn-primary">Check out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    require("@/css/index_style.css");
    require("@/css/common.css");

    export default {
        props: ['item'],
    }
</script>
