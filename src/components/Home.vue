<template lang="pug">
  .hello
    h1 {{ msg }}
    h2 Essential Links
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
