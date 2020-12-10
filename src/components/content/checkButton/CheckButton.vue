<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="checkButton">
  </div>
</template>

<script>
export default {
name: "CheckBottom",
  props:{
    isChecked:{
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  border: 2px solid #aaa
}
.check{
  background-color: var(--color-high-text);
  border-color: var(--color-high-text);
}
</style>
