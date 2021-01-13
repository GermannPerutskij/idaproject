<template>
  <div class="header">
    <div class="title">TestList</div>
    <div class="cart-logo" @click="onBasket">
      <CartLogo />
      <div v-if="cartLength !== 0" class="count">{{ cartLength }}</div>
    </div>
    <Cart :isOpen.sync="isCartOpen" @onBasket="onBasket" />
    <div :class="[isCartOpen ? 'open' : '', 'cart-layout']"></div>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
import CartLogo from "~/static/cart.svg?inline";
export default {
  components: { Cart, CartLogo },
  data: () => ({
    isCartOpen: false
  }),
  computed: {
    cartLength() {
      return this.$store.state.cart.cart.length;
    }
  },
  methods: {
    onBasket() {
      this.isCartOpen = !this.isCartOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/header.scss";
.cart-layout {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: black;
  opacity: 0;
  top: 0;
  left: 0;
  &.open {
    opacity: 0.5;
    z-index: 2;
  }
}
</style>
