export default {
  data() {
    return {
      observer: undefined,
      options: {
        rootMargin: "1000px"
      }
    };
  },

  mounted() {
    this.createObserver(this.executeObserver);
  },

  beforeUnmount() {
    this.observer.disconnect();
  },

  methods: {
    createObserver(method) {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) method(entry);
      }, this.options);

      this.observer.observe(this.$refs.observer);
    }
  }
};
