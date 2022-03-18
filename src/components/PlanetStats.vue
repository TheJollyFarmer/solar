<template>
  <div class="planet-stats">
    <div
      v-for="stat in stats"
      :key="stat"
      class="planet-stat">
      <VIcon :image="stat"/>
      <span v-text="formatStat(stat)"/>
    </div>
  </div>
</template>

<script>
import VIcon from "@/components/utils/VIcon";

export default {
  name: "PlanetStats",

  components: { VIcon },

  props: {
    planet: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      stats: ["diameter", "distance"]
    };
  },

  methods: {
    formatStat(stat) {
      return this.planet[stat].toLocaleString() + " Km";
    }
  }
};
</script>

<style lang="scss" scoped>
.planet-stats {
  align-items: center;
  display: flex;
  margin-bottom: $spacing;

  .planet-stat {
    align-items: center;
    display: flex;
    margin-right: $spacing;
  }
}
</style>
