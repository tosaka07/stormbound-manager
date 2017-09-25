import RecordCard from '@/components/atoms/RecordCard';

export default {
  name: 'ItemSection',
  components: {
    RecordCard,
  },
  props: [
    'category',
  ],
  data() {
    return {
      msg: 'asdfasdfasd',
    };
  },
  methods: {
  },
};
