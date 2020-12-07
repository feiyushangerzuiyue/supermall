<template>
  <div>
    <router-view></router-view>
    <div>
      <navBar>
        <navBarItem path="/cart">
          <template #item-img>
            <img src="@/assets/img/cart_off.svg" alt="cart_off">
          </template>
          <template #item-img-act>
            <img src="@/assets/img/cart.svg" alt="cart">
          </template>
          <template #item-text>
            <div>cart</div>
          </template>
        </navBarItem>
        <navBarItem path="/notification">
          <template #item-img>
            <img src="@/assets/img/notification_off.svg" alt="notification_off">
          </template>
          <template #item-img-act>
            <img src="@/assets/img/notification.svg" alt="notification">
          </template>
          <template #item-text>
            <div>notification</div>
          </template>
        </navBarItem>
        <navBarItem path="/phonecall">
          <template #item-img>
            <img src="@/assets/img/phonecall_off.svg" alt="phonecall_off">
          </template>
          <template #item-img-act>
            <img src="@/assets/img/phonecall.svg" alt="phonecall">
          </template>
          <template #item-text>
            <div>phonecall</div>
          </template>
        </navBarItem>
        <navBarItem path="/views" activeColor="blue">
          <template #item-img>
            <img src="@/assets/img/view_off.svg" alt="view_off">
          </template>
          <template #item-img-act>
            <img src="@/assets/img/view.svg" alt="view">
          </template>
          <template #item-text>
            <div>view</div>
          </template>
        </navBarItem>
      </navBar>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar/navbar.vue'
import navBarItem from '@/components/common/navbar/navbaritem.vue'

export default {
  name: 'mainnavbar',
  components:{
    navBar,
    navBarItem
  }
}
</script>

<style scoped src="../../assets/css/base.css" />
