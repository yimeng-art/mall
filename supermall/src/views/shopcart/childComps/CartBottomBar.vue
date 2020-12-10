<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"
                    :is-checked="isSelectAll"
                    @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">合计：￥{{totalPrice}}</div>
    <div class="calculate">去计算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import {mapGetters} from 'vuex'
export default {
name: "CartBottomBar",
  components:{
    CheckButton,
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter(item => item.checked).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      if(this.cartList.length === 0) return false
      //1、使用filter
      // return !(this.cartList.filter(item => !item.checked).length)
      //2、使用find
      // return !(this.cartList.find(item => !item.checked))
      //3、普通遍历
      for(let item of this.cartList){
        if(!item.checked){
          return false
        }
      }
      return true;
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){//全选时
        this.cartList.forEach(item => item.checked = false)
      }
      else{
        this.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  display: flex;
  position: relative;

  background-color: #eee;
  font-size: 14px;

  height: 40px;
  line-height: 40px;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 10px;
}
.price{
  margin-left: 20px;
  flex: 1;
}
.calculate{
  width: 90px;
  background-color: var(--color-tint);
  color: #fff;
  text-align: center;
}
</style>
