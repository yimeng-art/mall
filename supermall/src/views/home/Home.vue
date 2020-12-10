<template>
<!--  <div id="home">-->
<!--    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>-->
<!--    <scroll class="content"-->
<!--            ref="scroll"-->
<!--            :probe-type="3"-->
<!--            :pull-up-load= true-->
<!--            @scroll="contentScroll" @pullingUp="loadMore">-->
<!--      <home-swiper :banners="banners"/>-->
<!--      <RecommendViews :recommends="recommends"/>-->
<!--      <feature-view/>-->
<!--      <tab-control :titles="['流行','新款','精选']"-->
<!--                   @tabClick="tabClick"-->
<!--                   class="tab-control"/>-->
<!--      <goods-list :goods="showGoods"/>-->
<!--    </scroll>-->
<!--    <back-top @click.native="backClick" v-show="isShowBackTop"/>-->
<!--  </div>-->
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childcomps/HomeSwiper";
import FeatureView from "./childcomps/FeatureView";

import RecommendViews from "./childcomps/RecommendViews";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

import {getHomeMultidata,getHomeGoods} from "network/home"

export default {
  name: "Home",
  components: {
    BackTop,
    NavBar,
    HomeSwiper,
    RecommendViews,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,

    getHomeMultidata,
    getHomeGoods,
  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods:{
        'pop':{page: 0,list: []},
        'new':{page: 0,list: []},
        'sell':{page: 0,list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
    }
  },
  // created() {
  //   //1、请求多个数据
  //   this.getHomeMultidata();
  //   //2、请求商品数据
  //   this.getHomeGoods('pop');
  //   this.getHomeGoods('new');
  //   this.getHomeGoods('sell');
  // },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    /**
     * 事件监听相关的方法
     */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      //先监听图片加载完，然后执行下列语句
      this.$ref.scroll.scroll.refresh()
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    /*position: relative;*/
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
