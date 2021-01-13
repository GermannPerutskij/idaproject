<template>
  <div class="cart" :class="[isOpen ? 'open' : 'close']">
    <div class="cart-top">
      <div class="title">Корзина</div>
      <div @click="closeCart">Закрыть</div>
    </div>
    <div v-if="cart.length === 0" class="empty-cart">
      <div class="text">Пока что вы ничего не добавили в корзину.</div>
      <button class="back-to-catalog" @click="closeCart">Перейти к выбору</button>
    </div>
    <div v-else class="filled-cart">
      <div class="title">Товары в корзине:</div>
      <div class="items">
        <CartProductCard v-for="(item, idx) in cart" :key="idx" :item="item" />
      </div>
      <!-- <div class="form"></div> -->
    </div>
  </div>
</template>

<script>
import CartProductCard from '@/components/CartProductCard.vue'
export default {
  components: { CartProductCard },
  props: ["isOpen"],
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    }
  },
  methods: {
    closeCart() {
      this.$emit("onBasket");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/cart.scss";
</style>
