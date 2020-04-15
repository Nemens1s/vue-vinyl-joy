<template>
    <div>
        <b-navbar id="my_navbar" toggleable="lg" class="">
            <b-navbar-brand to="/">
                <div class="logo ml-2">
                    Vinyl J<span><img id="vinyl-record" src="@/images/vinyl-record.svg"
                                                  alt="vinyl"></span>y
                    <p>Keep those records spinning</p>
                </div>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse">
                <template>
                    <b-icon icon="list" style="color: #E5E5E5" font-scale="2"></b-icon>
                </template>
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto nav__links text-right">
                    <b-nav-item to="/">CATALOGUE</b-nav-item>
                    <b-nav-item to="cart">CART</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    require("@/css/common.css");
</script>
