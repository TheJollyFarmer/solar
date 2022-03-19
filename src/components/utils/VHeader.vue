<template>
  <h3 class="header">
    <VIcon
      :class="activeClass"
      image="plus"
      dimension="32"
      @click="toggleEvent"/>
    <a
      :href="wikiLink"
      v-text="title"/>
  </h3>
</template>

<script>
import VIcon from "@/components/utils/VIcon";

export default {
  name: "VHeader",

  components: { VIcon },

  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      required: true
    },

    active: {
      type: Boolean,
      required: true
    }
  },

  emits: ["toggle"],

  computed: {
    activeClass() {
      return this.active ? "is-active" : "";
    },

    wikiLink() {
      return `www.wikipedia/${this.link}`;
    }
  },

  methods: {
    toggleEvent() {
      this.$emit("toggle");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 2em;

  .plus {
    position: absolute;
    left: calc(-10px - 32px);
    top: 40%;
    transform: translateY(-50%);
    transition: 0.2s transform;

    &.is-active {
      transform: translateY(-50%) rotate(225deg);
      transition: 0.2s transform;
    }
  }
}
</style>
