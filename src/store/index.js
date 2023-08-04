import { createStore } from 'vuex'
import productsModule from './modules/products'
import singleProductModule from './modules/singleProduct'

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
    singleProductModule
  }
})
