<template>
  <VImage
    image="nav"
    dir="icons"
    class="symbol"
    @click="changeEvent"/>
</template>

<script>
import VImage from "@/components/utils/VImage";

export default {
  name: "NavArrow",

  components: { VImage },

  props: {
    dir: {
      type: String,
      required: false,
      default: "next"
    }
  },

  emits: ["change"],

  methods: {
    changeEvent() {
      this.$emit("change", this.dir);
    }
  }
};
</script>
