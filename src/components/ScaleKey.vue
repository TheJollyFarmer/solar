<template>
  <article class="scale-key layer">
    <VIcon
      image="question"
      dimension="20"/>
    <div class="content">
      <h3>Scale</h3>
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
      </div>
    </div>
  </article>
</template>

<script>
import VIcon from "@/components/utils/VIcon";

export default {
  name: "ScaleKey",
  components: { VIcon }
};
</script>
