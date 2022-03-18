<template>
  <div class="pedometer layer">
    <VIcon
      image="distance"
      dir="icons"
      dimension="20"
      type="svg"/>
    <span v-text="distanceTravelled"/>
  </div>
</template>

<script>
import VIcon from "@/components/utils/VIcon";

export default {
  name: "Pedometer",

  components: { VIcon },

  computed: {
    distanceTravelled() {
      let value = (window.innerHeight / 2 + this.$parent.offset) * 10000;
      let distance = value.toLocaleString();

      return distance + " km";
    }
  }
};
</script>

<style lang="scss" scoped>
.pedometer {
  align-items: center;
  bottom: $spacing-large;
  display: flex;
  justify-content: space-between;
  right: $spacing-large;
  width: 225px;
}
</style>
