import axios from "axios";

const state = {
    products:[],
    product:{}
};

const getters = {

    getProducts:(state)=>state.products,
    getProduct:(state)=>state.product,
}

const actions = {

    // recuperer tous les produits
    fetchProducts({commit}){
        axios.get(`${process.env.VUE_APP_API_BASE_URL}products`)
        .then((response)=>{
            commit('SET_PRODUCTS',response.data);
            //console.log(response.data)
        }
        )
        .catch((error)=>console.error(error))
    },
    fetchProduct(context,id){
        axios.get(`${process.env.VUE_APP_API_BASE_URL}products/${id}`)
        .then(
            (response)=>{
                
                context.commit('SET_PROPDUCT',response.data);
            }
        )
        .catch(
            error => console.log(error)
        )
        }
}


const mutations = {
    // Mutation pour définir les articles dans l'état du store
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PROPDUCT(state,product){
        state.product = product
    }
  };

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };