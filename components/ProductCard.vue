<template>
  <div class="content">
    <div class="item" v-for="(product, idx) in products" :key="idx">
      <div class="item-top">
        <div class="rating">
          <RatingSvg />
          {{ product.rating }}
        </div>
        <CartLogo :class="[checkIsInCart(product) === true ? 'in-cart' : '' , 'icon-cart']" @click="addToCart(product, idx)" />
      </div>
      <img :src="`https://frontend-test.idaproject.com${product.photo}`" />
      <div class="title-price">
        <div class="title">{{ product.name }}</div>
        <div class="price">{{ prettifyPrice(product.price) + ' ₽' }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import RatingSvg from "~/static/rating.svg?inline";
import CartLogo from "~/static/cart.svg?inline";
export default {
  components: { RatingSvg, CartLogo },
  computed: {
    products() {
      return this.$store.state.catalog.products;
    },
    cart() {
      return this.$store.state.cart.cart;
    }
  },
  methods: {
    async addToCart(product) {
      const isInCart = await this.checkIsInCart(product)
      if (isInCart) {
        this.$store.dispatch('cart/deleteFromCart', product)
      } else {
        this.$store.dispatch("cart/addToCart", product);
      }
    },
    prettifyPrice(price) {
      return price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
    },
    checkIsInCart(product) {
      if (this.cart.length !== 0) {
        let isItem = false
        this.cart.forEach(el => {
          if (el.id === product.id) {
            isItem = true
          }
        });
        return isItem
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  .item {
    width: 23%;
    height: 26vh;
    text-align: center;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-bottom: 15px;
    padding: 15px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      box-shadow: none;
      transition: all 0.2s;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-cart {
        width: 15px;
        cursor: pointer;
        path {
          fill: #959dad;
          transition: all 0.2s;
        }
        &:hover {
          path {
            fill: black;
            transition: all 0.2s;
          }
        }
      }
      .in-cart {
        path {
          fill: black;
        }
      }
    }
    .rating {
      text-align: left;
      display: flex;
      align-items: center;
    }
    img {
      width: 142px;
      object-fit: contain;
      height: 180px;
      position: relative;
      top: -26px;
      right: -6px;
      z-index: -1;
    }
    .title-price {
      text-align: left;
      font-size: 12px;
      position: relative;
      top: -35px;
      .price {
        font-weight: bold;
      }
    }
  }
}
</style>
