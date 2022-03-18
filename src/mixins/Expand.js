export default {
  data() {
    return {
      display: false
    };
  },

  methods: {
    toggleDisplay() {
      this.display = !this.display;
    }
  }
};
