import store from '@/store/';
import SideMenu from '@/components/organisms/SideMenu/index';
import Cover from '@/components/atoms/Cover';

export default {
  name: 'GuideDrawer',
  components: {
    Cover,
    SideMenu,
  },
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
