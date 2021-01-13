<template>
  <div class="nav">
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        @click="setCategory(category)"
        :class="[
          category.id === activeCategory.id ? 'current' : 'not-current',
          'category'
        ]"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    getProducts: { type: Function }
  },
  methods: {
    setCategory(category) {
      this.$store.dispatch("catalog/setCurrentCategory", category);
      this.getProducts(category.id);
      console.log(category);
    }
  },
  computed: {
    categories() {
      return this.$store.state.catalog.categories;
    },
    activeCategory() {
      return this.$store.state.catalog.activeCategory;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  min-width: 200px;
  width: 20%;
  ul {
    padding: 0;
    li {
      list-style-type: none;
      margin-bottom: 10px;
      cursor: pointer;
    }
    li.not-current {
      &:hover {
        text-decoration: underline;
      }
    }
    .current {
      color: #959dad;
    }
  }
}
</style>
