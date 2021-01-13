<template>
  <div>
    <Header />
    <Catalog :getProducts="getProducts" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: { Header },
  async mounted() {
    if (this.$store.state.catalog.products.length === 0) {
      await this.getCategory()
      await this.getProducts('1')
    }
  },
  methods: {
    async getProducts(category) {
      const products = await this.$axios.$get('https://frontend-test.idaproject.com/api/product?', { params: { category: category } })
      this.$store.dispatch('catalog/fetchProducts', products)
    },
    async getCategory() {
      const categories = await this.$axios.$get('https://frontend-test.idaproject.com/api/product-category')
      this.$store.dispatch('catalog/fetchCategories', categories)
      this.$store.dispatch('catalog/setCurrentCategory', categories[0])
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
