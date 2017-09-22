import store from '@/store/';
import Hamburger from '@/components/atoms/Hamburger';

export default {
  name: 'HeaderNav',
  components: {
    Hamburger,
  },
  data() {
    return {
      msg: 'Header',
    };
  },
  methods: {
    toggleMenu: () => {
      console.log('おされた');
      store.dispatch('menu/toggleMenu');
    },
  },
};
