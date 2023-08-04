import axios from "axios";

const state = {
    products:[]
};

const getters = {

    getProducts:(state)=>state.products,
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
    }
}


const mutations = {
    // Mutation pour définir les articles dans l'état du store
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  };

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };