<template>
  <div class="moons">
    <Moon
      v-for="moon in planet.moons"
      :key="moon.name"
      :moon="moon"/>
  </div>
</template>

<script>
import Moon from "@/components/Moon";

export default {
  name: "Moons",

  components: { Moon },

  props: {
    planet: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.moons {
  align-items: center;
  display: flex;
  position: absolute;
  left: calc(100% + 3em);
  bottom: 50%;
}
</style>
