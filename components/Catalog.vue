<template>
  <div class="catalog">
    <div class="catalog-top">
      <div class="title">Каталог</div>
      <div class="sort">Сортировать по:</div>
    </div>
    <Nav :getProducts="getProducts" />
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"
import Nav from "@/components/Nav.vue"
export default {
  components: { ProductCard },
  data: () => ({}),
  props: {
    getProducts: { type: Function }
  }
};
</script>

<style lang="scss" scoped>
.catalog {
  padding: 0 90px;
  display: flex;
  flex-wrap: wrap;
  &-top {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 24px;
      font-weight: bold;
      color: #585555;
    }
  }
}
</style>
