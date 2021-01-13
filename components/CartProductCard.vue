<template>
  <div class="item">
    <img :src="`https://frontend-test.idaproject.com${item.photo}`" />
    <div class="desc">
      <div class="title">{{ item.name }}</div>
      <div class="price">{{ item.price }}</div>
      <div class="rating">{{ item.rating }}</div>
    </div>
    <DeleteIcon class="delete-icon" @click="deleteFromCart(item)"/>
  </div>
</template>

<script>
import RatingSvg from "~/static/rating.svg?inline";
import DeleteIcon from "~/static/delete.svg?inline";
export default {
  components: { RatingSvg, DeleteIcon },
  props: ["item"],
  methods: {
    deleteFromCart(item) {
      this.$store.dispatch('cart/deleteFromCart', item)
    },
    prettifyPrice(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  position: relative;
  align-items: center;
  font-size: 14px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  img {
    width: 35%;
  }
  .desc {
    width: 100%;
  }
  .delete-icon {
    position: absolute;
    right: 15px;
    cursor: pointer;
    path {
      transition: all 0.2s;
    }
    &:hover {
      path {
        fill: black;
        transition: all 0.2s;
      }
    }
  }
}
</style>
