<template lang="pug">
  #app
    HeaderNav
    .Content
      SideMenu
      MainContainer
</template>

<script>
import HeaderNav from '@/components/organisms/HeaderNav/index';
import SideMenu from '@/components/organisms/SideMenu/index';
import MainContainer from '@/components/organisms/MainContainer/index';

export default {
  components: {
    HeaderNav,
    SideMenu,
    MainContainer,
  },
  name: 'app',
};
</script>

<style>
@import "css/all.css";
</style>
