<template>
  <article class="planet-text">
    <VHeader
      :title="planet.name"
      :link="planet.link"
      :active="display"
      @toggle="toggleDisplay"/>
    <PlanetTextBody
      :planet="planet"
      :display="display"/>
  </article>
</template>

<script>
import Expand from "@/mixins/Expand";
import PlanetTextBody from "@/components/PlanetTextBody";
import VHeader from "@/components/utils/VHeader";

export default {
  name: "PlanetText",

  components: {
    PlanetTextBody,
    VHeader
  },

  mixins: [Expand],

  props: {
    planet: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.planet-text {
  position: absolute;
  right: calc(100% + 300px);
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;

  &:after {
    background-color: $java;
    border-radius: 5px;
    content: "";
    height: 2px;
    left: 100%;
    margin: 0 0.31em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: calc(295px - 0.31em);
  }
}
</style>
