import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Catalogue from './views/Catalogue'
import Cart from './views/Cart'
import Customer from "./views/Customer";
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Router);
Vue.config.productionTip = false;

const router = new Router({

    routes: [
        {
            path: "/",
            name: "catalogue",
            component: Catalogue
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        },
        {
            path: "/customer-info",
            name: "customer",
            component: Customer
        },

    ]

});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
