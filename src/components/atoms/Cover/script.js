import store from '@/store/';
import types from '../../../store/action_types';

export default {
  name: 'Cover',
  methods: {
    closeMenu: () => {
      store.dispatch(types.MENU_CLOSE);
    },
  },
};
