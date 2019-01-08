import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    basket: []
  },
  mutations: {
    CREATE_BASKET (state, basket) {
      state.basket = basket
    },
    ADD_TO_BASKET (state, el) {
      state.basket.push(el)
    }
  }
})

export default store