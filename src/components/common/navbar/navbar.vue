<template>
  <div id="navbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'navBar'
}

</script>
<style>
  #navbar {
    background-color: #f6f6f6;
    display: flex;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .navbaritem {
    flex: 1;
    text-align: center;
  }
  .navbaritem img {
    width: 24px;
    height: 24px;
  }
</style>