<template>
  <div class="cart">
    <nav-bar class="nav-cart">
<!--      <div slot="center">购物车({{cartLength}})</div>-->
      <div slot="center">购物车()</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
import { mapGetters } from 'vuex'
export default {
  name: "ShopCart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed:{
    //两种用法：对象或数组
    // ...mapGetters({
    //   length: 'cartLength'
    // }),
    // ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-cart{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
