<template>
  <div class="planets">
    <Planet
      v-for="planet in planets"
      :id="planet.name"
      :key="planet.name"
      :planet="planet"/>
  </div>
</template>

<script>
import planets from "@/data/planets";
import Planet from "@/components/Planet";

export default {
  name: "Planets",

  components: { Planet },

  data() {
    return {
      planets
    };
  }
};
</script>

<style lang="scss" scoped>
.planets {
  position: relative;
}
</style>
