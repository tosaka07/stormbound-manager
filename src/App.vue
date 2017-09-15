<template lang="pug">
  #app
    SideMenu
    MainContainer
</template>

<script>
import SideMenu from '@/components/organisms/SideMenu/index';
import MainContainer from '@/components/organisms/MainContainer/index';

export default {
  components: {
    SideMenu,
    MainContainer,
  },
  name: 'app',
};
</script>

<style>
@import "css/all.css";
</style>
