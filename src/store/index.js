import { createStore } from 'vuex'
import productsModule from './modules/products';
import categorieModule from './modules/categories'


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productsModule,
    categorieModule
  }
})
