export const state = () => ({
  cart: []
})

export const mutations = {
  setItem(state, item) {
    state.cart.push(item)
  },
  deleteItem(state, item) {
    let deletingIndex = state.cart.map(function(e) { return e.id; }).indexOf(item.id)
    state.cart.splice(deletingIndex, 1)
  }
}

export const actions = {
  async addToCart({commit}, item) {
    commit('setItem', item)
  },
  async deleteFromCart({commit}, item) {
    commit('deleteItem', item)
  }
}

export const getters = {
  cart: s => s.cart
}