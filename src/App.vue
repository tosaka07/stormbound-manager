<template lang="pug">
.Application(v-bind:class="{ 'Application--menuopen': isOpen }")
  .Content
    MainContainer
    GuideDrawer
</template>

<script>
import MainContainer from '@/components/organisms/MainContainer/index';
import GuideDrawer from '@/components/organisms/GuideDrawer/index';
import store from '@/store';

export default {
  components: {
    MainContainer,
    GuideDrawer,
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
