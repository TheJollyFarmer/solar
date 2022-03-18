<template>
  <div class="planet-body">
    <PlanetStats :planet="planet"/>
    <TransitionExpand>
      <p
        v-show="display"
        v-text="planet.description"/>
    </TransitionExpand>
  </div>
</template>

<script>
import PlanetStats from "@/components/PlanetStats";
import TransitionExpand from "@/components/utils/TransitionExpand";

export default {
  name: "PlanetTextBody",

  components: { PlanetStats, TransitionExpand },

  props: {
    planet: {
      type: Object,
      required: true
    },

    display: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.planet-body {
  position: absolute;
  top: 120%;
  left: 0;
  width: calc(100% + 295px - 0.31em);

  > p {
    line-height: 1.5;
    font-family: B612, serif;
    white-space: pre-wrap;
  }
}
</style>
