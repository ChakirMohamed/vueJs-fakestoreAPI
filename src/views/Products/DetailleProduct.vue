<template >
    <div class="row pb-5" v-if="product">
        <div class="col-md-6">
            <div class="overview-product border" style="overflow: hidden;">
                <img :src="product.image" alt="" class="img-fluid">

            </div>
        </div>
        <div class="col-md-6">
            <h1>{{ product.title }}</h1>
            <h2 class="font-weight-bold">{{ product.price }}</h2>
            
            <hr>
            <p>{{ product.description }}</p>
            <hr>
            <button class="btn btn-success d-block w-100">Commander</button>
        </div>
    </div>
    <div v-else>
        <p class="text-center">No product found.</p>
        <router-link to="/" class="btn btn-primary btn-block">Retourner à l'accueil</router-link>
    </div>
</template>

<script>

export default {
    name: "DetailleProduct",
    computed: {
        product() {
            return this.$store.getters['singleProductModule/getProduct']
        }
    },

    created() {
        this.$store.dispatch('singleProductModule/fetchProduct', this.$route.params.id)
    }
}
</script>

<style scoped>
.overview-product{
    position: sticky;
    display: block;
}
</style>