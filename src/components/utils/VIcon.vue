<template>
  <figure
    :class="classes"
    :style="size">
    <img
      :src="getUrl()"
      :alt="image">
  </figure>
</template>

<script>
export default {
  name: "VIcon",

  props: {
    image: {
      type: [Number, String],
      required: true
    },

    dimension: {
      type: String,
      required: false,
      default: "24"
    }
  },

  computed: {
    classes() {
      return ["image", `${this.image}`];
    },

    size() {
      return { width: this.dimension + "px" };
    }
  },

  methods: {
    getUrl() {
      return require(`@/assets/images/icons/${this.image}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  flex-shrink: 0;
  opacity: 0.85;
  transition: opacity $hover-in;

  &:first-child {
    margin-right: $spacing-small;
  }

  &:hover {
    border-color: var(--primary) !important;
    transition: opacity $hover-out;
  }
}
</style>
