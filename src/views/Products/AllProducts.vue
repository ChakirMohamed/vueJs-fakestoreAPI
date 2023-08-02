<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <h1>{{ titre }}</h1>

  <div>
    <div class="row">
      <ListItemProduct class="col-md-4 col-sm-6" v-for="product in allProducts" :title="product.title" :price="product.prix" :imgUrl='productImageUrl'/>

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
      titre: 'AllProducts vv',
      
      
      
      allProducts: [
        {
          title: 'xxxxx xxxxx',
          prix: 200
        },
        {
          title: 'yyyyyyyyy yy',
          prix: 200
        },
        {
          title: 'zzzz zzzz',
          prix: 200
        },
        {
          title: 'wwwwwww wwwww',
          prix: 200
        },
      ]
    };
  },
  computed: {
    productImageUrl() {
      // You can perform any logic here to determine the image URL based on the product data.
      // For example, you can concatenate the base URL with the product image name or ID.
      return 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
    }
  }
}

  
</script>