<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>

  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    /*  使组件占据页面下方，并铺满整个屏幕*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*  添加过渡阴影 box-shadow: 水平阴影 垂直阴影 模糊半径 rgba（颜色，透明度）*/
    box-shadow: 0 -1px 1px rgba(100,100,100,.2) ;
  }
</style>
