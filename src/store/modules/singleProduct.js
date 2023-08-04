import axios from 'axios'

const state = {
    product:{}
}
const getters = {
    getProduct:(state)=>state.product,

}
const mutations = {
    SET_PROPDUCT(state,product){
        state.product = product
    }
}

const actions = {

    fetchProduct({commit},id){
        axios.get(`${process.env.VUE_APP_API_BASE_URL}products/${id}`)
        .then(
            (response)=>{
                
                commit('SET_PROPDUCT',response.data);
            }
        )
        .catch(
            error => console.log(error)
        )
        }
}

export default{
    state,
    mutations,
    actions,
    getters

}