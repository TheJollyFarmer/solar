<template>
  <nav class="navigation">
    <NavArrow
      dir="prev"
      @change="scrollAdjacent"/>
    <NavSymbol
      v-for="symbol in symbols"
      :key="symbol"
      :symbol="symbol"
      :active="active"
      @select="scrollTo"/>
    <NavArrow @change="scrollAdjacent"/>
  </nav>
</template>

<script>
import NavArrow from "@/components/NavArrow";
import NavSymbol from "@/components/NavSymbol";

export default {
  name: "Navigation",

  components: { NavSymbol, NavArrow },

  data() {
    return {
      active: "",
      prev: "",
      symbols: [
        "sol",
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune",
        "pluto"
      ]
    };
  },

  created() {
    this.createActiveObserver();
    this.setActiveInStorage();
  },

  methods: {
    createActiveObserver() {
      this.emitter.on("observed", planet => {
        this.active = this.getActiveFromStorage() ?? planet;
      });
    },

    getActiveFromStorage() {
      let planet = window.sessionStorage.getItem("position");

      this.removeActiveInStorage();

      return planet;
    },

    setActiveInStorage() {
      window.addEventListener("unload", () =>
        window.sessionStorage.setItem("position", this.active)
      );
    },

    removeActiveInStorage() {
      window.sessionStorage.removeItem("position");
    },

    scrollTo(name) {
      this.emitter.emit("stopLightScroll");
      this.active = name;
      this.prev = this.active;

      let el = document.getElementById(name);

      el.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    },

    scrollAdjacent(dir) {
      let idx = this.symbols.indexOf(this.active);
      let symbol = dir === "prev" ? [idx - 1] : [idx + 1];

      this.emitter.emit("stopLightScroll");

      if (symbol >= 0 && symbol < this.symbols.length)
        this.scrollTo(this.symbols[symbol]);
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}
</style>
