import store from '@/store/';
import Hamburger from '@/components/atoms/Hamburger';
import types from '@/store/action_types';

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
      store.dispatch(types.MENU_TOGGLE);
    },
  },
};
