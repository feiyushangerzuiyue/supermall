<template>
  <div class="navbaritem" @click="isClick()">
    <div v-if="isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-act"></slot></div>
    <div :style="styleActive"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'navBarItem',
  props:{
    path: String,
    activeColor: {
      type: String,
      default: "red",
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !==-1
    },
    styleActive() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    isClick(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>
.active {
  color: red;
}
</style>