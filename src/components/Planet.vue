<template>
  <section
    ref="observer"
    :class="['planet', planet.name]">
    <PlanetText :planet="planet"/>
    <VImage
      :id="planet.name"
      :image="planet.name"
      :dimension="dimension"
      dir="planets"
      type="png"/>
    <Moons :planet="planet"/>
  </section>
</template>

<script>
import Observer from "@/mixins/Observer";
import PlanetText from "@/components/PlanetText";
import VImage from "@/components/utils/VImage";
import Moons from "@/components/Moons";

const earth = 40;

export default {
  name: "Planet",

  components: { Moons, PlanetText, VImage },

  mixins: [Observer],

  props: {
    planet: {
      type: Object,
      required: true
    }
  },

  computed: {
    dimension() {
      return (this.planet.scale * earth).toString();
    }
  },

  created() {
    this.options.threshold = 1;
  },

  methods: {
    executeObserver(entry) {
      if (entry.intersectionRatio === 1) {
        this.emitter.emit("observed", this.planet.name);
      }
    }
  }
};
</script>

<style lang="scss" scop`ed>
.planet {
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  &.sol {
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &.mercury {
    position: absolute;
    top: 5790px;
  }

  &.venus {
    position: absolute;
    top: 10820px;
  }

  &.earth {
    position: absolute;
    top: 14960px;
  }

  &.mars {
    position: absolute;
    top: 22790px;
  }

  &.jupiter {
    position: absolute;
    top: 77860px;
  }

  &.saturn {
    position: absolute;
    top: 143335px;
  }

  &.uranus {
    position: absolute;
    top: 287250px;
  }

  &.neptune {
    position: absolute;
    top: 449510px;
  }

  &.pluto {
    position: absolute;
    top: 590830px;
  }
}
</style>
