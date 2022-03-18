<template>
  <header class="welcome">
    <h1>The Solar System</h1>
    <h2>A journey through time and space...</h2>
    <VImage
      image="arrow"
      dir="icons"
      dimension="64"
      @click="scrollEvent"/>
  </header>
</template>

<script>
import VImage from "@/components/utils/VImage";

export default {
  name: "Welcome",

  components: { VImage },

  methods: {
    scrollEvent() {
      this.emitter.emit("scroll");
    }
  }
};
</script>

<style lang="scss" scoped>
.welcome {
  color: $white-dark;
  font-size: 3em;
  left: 0;
  position: absolute;
  text-align: center;
  text-shadow: $shadow;
  text-transform: uppercase;
  top: 55%;
  width: 100%;

  h2 {
    font-size: 1.5em;
    margin: 0 auto 0.5em;
    width: 75%;
  }

  .arrow {
    animation: bounce 2s infinite;
    margin: auto;

    &:hover {
      animation-play-state: paused;
    }
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  35% {
    transform: translateY(40%);
  }

  70% {
    transform: translateY(20%);
  }

  100% {
    transform: translateY(0%);
  }
}
</style>
