<template>
  <VIcon
    :image="symbol"
    :class="classes"
    @click="selectEvent"/>
</template>

<script>
import VIcon from "@/components/utils/VIcon";

export default {
  name: "NavSymbol",

  components: { VIcon },

  props: {
    symbol: {
      type: String,
      required: true
    },

    active: {
      type: String,
      required: true
    }
  },

  emits: ["select"],

  computed: {
    classes() {
      return ["symbol", { "is-active": this.active === this.symbol }];
    }
  },

  methods: {
    selectEvent() {
      this.$emit("select", this.symbol);
    }
  }
};
</script>
