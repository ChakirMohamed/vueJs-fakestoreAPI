import axios from 'axios'
const state = {
    allCategories:[]
}

const mutations = {
    SET_ALL_CATEGORIES(state,allCats){
        state.allCategories = allCats;
    }
}
const actions = {

    fetchAllCategories(context){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(
            (resp)=>{
                context.commit('SET_ALL_CATEGORIES',resp);
            }
        )
    }
}

const getters = {
    getAllCategories(){
        return state.allCategories;
    }
}

export default{
    state,mutations,getters,actions
}