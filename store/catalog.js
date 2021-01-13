export const state = () => ({
  categories: [],
  products: [],
  activeCategory: null
})

export const mutations = {
  setСategories(state, categories) {
    state.categories = categories
  },
  setProducts(state, products) {
    state.products = products
  },
  setCategory(state, currentCategory) {
    state.activeCategory = currentCategory
  }
}

export const actions = {
  async fetchCategories({commit}, categories) {
    commit('setСategories', categories)
  },
  async fetchProducts({commit}, products) {
    commit('setProducts', products)
  },
  async setCurrentCategory({commit}, currentCategory) {
    commit('setCategory', currentCategory)
  }
}

export const getters = {
  products: s => s.products,
  categories: s => s.categories,
  activeCategory: s => s.activeCategory,
}