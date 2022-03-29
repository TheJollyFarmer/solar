<template>
  <div class="body">
    <div class="pixel-ratio">
      <span>1 pixel</span>
      <VIcon
        image="arrow"
        dimension="13"/>
      <span class="pixel"/>
      <span>= 10,000 km</span>
    </div>
    <VIcon
      image="scale"
      dimension="200"/>
    <div class="keys">
      <span>100,000 KM</span>
      <span>1,000,000 KM</span>
    </div>
  </div>
</template>

<script>
import VIcon from "@/components/utils/VIcon";

export default {
  name: "ScaleKeyBody",
  components: { VIcon }
};
</script>
