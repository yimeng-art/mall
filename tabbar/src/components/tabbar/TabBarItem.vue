<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "TabBarItem",
  props:{
  //动态传入路径和颜色
    path: String,
    activeColor: {
      type: String,
      default: 'cornflowerblue'
    }
  },
  data(){
    return{
      // isActive: true,
    }
  },
  computed: {
    isActive(){
      //活跃路径是否包含当前路径，包含则为true
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  /*将空间均等分给每一个项目*/
  flex: 1;
  /*文字水平居中*/
  text-align: center;
  height: 49px;
  font-size: 14px
}
.tab-bar-item img{
  width: 24px;
  height:24px;
  margin-top: 3px;
  /*vertical-align可以设置元素的垂直对齐样式，而vertical-align：middle可以使图片下方与文字的空白去除*/
  vertical-align: middle;
}
</style>
