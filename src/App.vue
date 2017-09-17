<template lang="pug">
  #app(v-bind:class="{ 'Sidemenu--open': isOpen }")
    HeaderNav
    .Content
      SideMenu
      MainContainer
</template>

<script>
import HeaderNav from '@/components/organisms/HeaderNav/index';
import SideMenu from '@/components/organisms/SideMenu/index';
import MainContainer from '@/components/organisms/MainContainer/index';
import store from '@/store';

export default {
  components: {
    HeaderNav,
    SideMenu,
    MainContainer,
  },
  name: 'app',
  computed: {
    isOpen: () => store.getters['menu/isOpen'],
  },
};
</script>

<style>
@import "css/all.css";
</style>
