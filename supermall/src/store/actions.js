import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutation-types'
export default {
  addCart({state,commit},payload){
    //1、查找之前购物车中是否有该商品
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    //2、数量增加
    if(oldProduct){
      // oldProduct.count += 1
      commit(ADD_COUNTER,oldProduct)
    }
    else{
      // payload.count = 1;
      // state.cartList.push(payload)
      commit(ADD_TO_CART,payload)
    }
  }
}
