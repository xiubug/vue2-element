import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import createLogger from 'vuex/dist/logger';
import cart from './modules/cart';
import products from './modules/products';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// store可以理解为一个容器，包含着应用中的state等
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: [createLogger()]
})
