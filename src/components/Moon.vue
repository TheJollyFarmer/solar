<template>
  <article class="moon">
    <VImage
      :image="moon.name"
      :dimension="dimension"
      dir="moons"
      type="png"/>
    <div class="line"/>
    <h4 v-text="moon.name"/>
  </article>
</template>

<script>
import VImage from "@/components/utils/VImage";

const earth = 40;

export default {
  name: "Moon",

  components: { VImage },

  props: {
    moon: {
      type: Object,
      required: true
    }
  },

  computed: {
    dimension() {
      return (this.moon.scale * earth).toString();
    }
  }
};
</script>

<style lang="scss" scoped>
.moons > .moon {
  align-items: center;
  bottom: 50%;
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
  height: 50px;
  margin-right: 3.5em;
  position: relative;

  .line {
    background-color: $java;
    border-radius: 5px;
    flex-grow: 2;
    margin: 0.1em 0 0.3em;
    width: 2px;
  }

  h4 {
    left: 50%;
    bottom: 100%;
    position: absolute;
    transform: rotate(325deg);
    transform-origin: left center;
  }
}
</style>
