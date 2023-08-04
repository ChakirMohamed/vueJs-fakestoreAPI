<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <h1 class="text-center">{{ titre }}</h1>

  <div>
    <div class="row">
      <ListItemProduct class="col-md-4 col-sm-6" v-for="product in products" :title="product.title" :price="product.price" :imgUrl='product.image'  :id='Number(product.id)'/>

    </div>
  </div>
  
</template>

<script>
import ListItemProduct from './ListItemProduct.vue';



export default {
  
  name: 'AllProducts',
  components:{
    ListItemProduct
  },


  data() {
    return {
      titre: 'Trend Products',
      
    };
  },
  computed: {
   
    products(){
      return this.$store.getters['productsModule/getProducts']
    },
    productImageUrl() {
      // You can perform any logic here to determine the image URL based on the product data.
      // For example, you can concatenate the base URL with the product image name or ID.
      return 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
    }
  }
  ,
  created(){
    this.$store.dispatch('productsModule/fetchProducts');
  }
}

  
</script>