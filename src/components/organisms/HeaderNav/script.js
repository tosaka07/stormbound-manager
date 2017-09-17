import store from '@/store/';

export default {
  name: 'HeaderNav',
  data() {
    return {
      msg: 'Header',
    };
  },
  methods: {
    toggleMenu: () => {
      store.dispatch('menu/toggleMenu');
    },
  },
};
