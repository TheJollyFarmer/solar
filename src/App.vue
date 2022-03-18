<template>
  <Navigation/>
  <Welcome/>
  <Planets/>
  <ScaleKey/>
  <LightSpeedScroll/>
  <Pedometer/>
  <Asteroids/>
  <Asteroids type="kuiper"/>
  <div class="particle"/>
  <div class="scales"/>
</template>

<script>
import LightSpeedScroll from "@/components/LightSpeedScroll";
import Navigation from "@/components/Navigation";
import Pedometer from "@/components/Pedometer";
import Planets from "@/components/Planets";
import Welcome from "@/components/Welcome";
import Asteroids from "@/Asteroids";
import ScaleKey from "@/components/ScaleKey";

export default {
  name: "App",

  components: {
    ScaleKey,
    Asteroids,
    LightSpeedScroll,
    Navigation,
    Pedometer,
    Planets,
    Welcome
  },

  data() {
    return {
      offset: 0
    };
  },

  mounted() {
    window.addEventListener("scroll", this.setOffset);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.setOffset);
  },

  methods: {
    setOffset() {
      this.offset = window.pageYOffset;
    }
  }
};
</script>

<style lang="scss">
#app {
  background: url("assets/images/background.png") repeat;
  background-size: contain;
  height: 600000px;
}
</style>
