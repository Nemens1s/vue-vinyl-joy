<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <form class="needs-validation" novalidate>
                    <div class="row">
                        <div class="col">
                            <label for="firstName">Full name</label>
                            <input type="text" class="form-control customer_info" id="firstName" placeholder="" value="" required>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">E-mail</label>
                        <input type="email" class="form-control customer_info" id="email" placeholder="test@example.com">
                    </div>

                    <div class="mb-3">
                        <label for="address">Address</label>
                        <input type="text" class="form-control customer_info" id="address" placeholder="Harjumaa, Harju tänav 2" required>
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
                            <label for="cc-name">Cardholder name</label>
                            <input type="text" class="form-control customer_info" id="cc-name" placeholder="" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input type="text" class="form-control customer_info" id="cc-number" placeholder="" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input type="text" class="form-control customer_info" id="cc-expiration" placeholder="" required>
                            <div class="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="cc-cvv">CVV</label>
                            <input type="text" class="form-control customer_info" id="cc-cvv" placeholder="" required>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="row">
                        <div class="col-6">
                            <router-link class="btn btn-lg  mb-3 cancel__button" to="/">Cancel</router-link>
                        </div>
                        <div class="col-6">
                            <router-link class="btn btn-lg  mb-3 float-right confirm__button" to="/finish">Confirm</router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Customer"
    }
</script>
<style scoped  src="../css/customer_style.css">

</style>
