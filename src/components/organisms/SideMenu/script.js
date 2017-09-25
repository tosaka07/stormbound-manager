import store from '@/store/';
import Hamburger from '@/components/atoms/Hamburger';
import types from '@/store/action_types';

export default {
  name: 'sideMenu',
  components: {
    Hamburger,
  },
  data() {
    return {
      msg: 'asdfasdfasd',
    };
  },
  methods: {
    toggleMenu: () => {
      store.dispatch(types.MENU_CLOSE);
    },
  },
};
