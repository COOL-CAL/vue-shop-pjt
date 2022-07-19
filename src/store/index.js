import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore ({
  state() {
    return {
      user: {},
      sellerSelectedProduct: {},
    }
  },
  mutations: {
    user: (state, data) => {
      state.user = data;
    },
    sellerSelectedProduct: (state, data) => {
      state.sellerSelectedProduct = data;
    }
  },
  plugins: [
    createPersistedState({
      paths: ['user']
    })
  ],
});
