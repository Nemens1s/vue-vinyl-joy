<template>
    <validation-observer v-slot="{ invalid }">
        <div class="container">
            <div class="row">
                <div class="col">
                    <form class="needs-validation">
                        <div class="row">
                            <div class="col">
                                <validation-provider rules="required" immediate v-slot="{ errors }">
                                    <label for="firstName">Full name</label>
                                    <input type="text" class="form-control customer_info" id="firstName" placeholder=""
                                           v-model="name" value="" required>
                                    <span>{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                        </div>

                        <div class="mb-3">
                            <validation-provider rules="email|required" immediate v-slot="{ errors }">
                                <label for="email">E-mail</label>
                                <input type="email" class="form-control customer_info" id="email" v-model="email"
                                       placeholder="">
                                <span>{{ errors[0] }}</span>
                            </validation-provider>
                        </div>

                        <div class="mb-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control customer_info" id="address"
                                   placeholder="" required>
                        </div>

                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="country">Country</label>
                                <select class="custom-select d-block w-100 customer_info" id="country" required>
                                    <option>Estonia</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                    <option>Germany</option>
                                    <option>France</option>
                                    <option>Italy</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control customer_info" id="zip" placeholder="" required>
                            </div>
                        </div>
                        <hr class="mb-4">

                        <h4 class="mb-3">Payment</h4>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <validation-provider rules="required" immediate v-slot="{ errors }">
                                    <label for="cc-name">Cardholder name</label>
                                    <input type="text" class="form-control customer_info" id="cc-name" placeholder=""
                                           required v-model="card_holder_name">
                                    <span>{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                            <div class="col-md-6 mb-3">
                                <validation-provider rules="required" immediate v-slot="{ errors }">
                                    <label for="cc-number">Credit card number</label>
                                    <input type="text" class="form-control customer_info" id="cc-number" placeholder=""
                                           required v-model="credit_card_number">
                                    <span>{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <validation-provider rules="required" immediate v-slot="{ errors }">
                                    <label for="cc-expiration">Expiration</label>
                                    <input type="text" class="form-control customer_info" id="cc-expiration"
                                           placeholder="" v-model="expiration_date"
                                           required>
                                    <span>{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                            <div class="col-md-3 mb-3">
                                <validation-provider rules="required" immediate v-slot="{ errors }">
                                    <label for="cc-cvv">CVV</label>
                                    <input type="text" class="form-control customer_info" id="cc-cvv" placeholder=""
                                           v-model="cvv"
                                           required>
                                    <span>{{ errors[0] }}</span>
                                </validation-provider>
                            </div>
                        </div>
                        <hr class="mb-4">
                        <div class="row">
                            <div class="col-6">
                                <router-link class="btn btn-lg  mb-3 cancel__button" to="/">Cancel</router-link>
                            </div>
                            <div class="col-6">
                                <router-link to="/finish">
                                    <button class="btn btn-lg  mb-3 float-right confirm__button" type="submit"
                                            :disabled="invalid">
                                        Confirm
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </validation-observer>
</template>

<script>
    import {ValidationProvider, ValidationObserver} from 'vee-validate';

    export default {
        name: "Customer",
        components: {
            ValidationProvider,
            ValidationObserver
        },

    }
</script>
<style scoped src="../css/customer_style.css">

</style>
