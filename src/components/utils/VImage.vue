<template>
  <figure
    v-bind="$attrs"
    :class="classes"
    :style="size">
    <img
      ref="observer"
      :src="placeholder"
      :alt="image"
      @error="placeholder">
  </figure>
</template>

<script>
import Observer from "@/mixins/Observer";

export default {
  name: "VImage",

  mixins: [Observer],

  props: {
    image: {
      type: [Number, String],
      required: true
    },

    dir: {
      type: String,
      required: false,
      default: ""
    },

    label: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "svg"
    },

    dimension: {
      type: String,
      required: false,
      default: "24"
    }
  },

  computed: {
    placeholder() {
      return document.createElement("canvas").toDataURL();
    },

    classes() {
      return ["image", `${this.image}`];
    },

    size() {
      return { width: this.dimension + "px" };
    }
  },

  watch: {
    image() {
      this.$refs.observer.src = this.getUrl();
    }
  },

  methods: {
    executeObserver() {
      this.$refs.observer.src = this.getUrl();
      this.observer.disconnect();
    },

    getUrl() {
      return require(`@/assets/images/${this.dir}/${this.image}.${this.type}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  flex-shrink: 0;
  transition: opacity $hover-in;

  &:hover {
    border-color: var(--primary) !important;
    transition: border $hover-out;
  }

  &.has-border {
    background-color: var(--fill);
    border-style: solid;
    border-width: 2px;
    box-shadow: $shadow;
    padding: 1px;
  }
}
</style>
