<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <h1 class="text-center">{{ titre }}</h1>

  <div>
    <div class="row">
      <ListItemProduct class="col-md-4 col-sm-6" v-for="product in getProducts" :title="product.title" :price="product.price" :imgUrl='product.image'  :id='Number(product.id)'/>

    </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
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
   
    // products(){
    //   return this.$store.getters['productsModule/getProducts']
    // },
    ...mapGetters('productsModule',['getProducts']),
    ...mapGetters('categoriesModule',['getAllCategories']),
    
  }
  ,
  created(){
    this.$store.dispatch('productsModule/fetchProducts');
  }
}

  
</script>