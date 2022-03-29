<template>
  <article class="scale-key layer">
    <VIcon
      image="question"
      dimension="20"/>
    <div class="content">
      <h3>Scale</h3>
      <ScaleKeyBody/>
    </div>
  </article>
</template>

<script>
import VIcon from "@/components/utils/VIcon";
import ScaleKeyBody from "@/components/ScaleKeyBody";

export default {
  name: "ScaleKey",
  components: { ScaleKeyBody, VIcon }
};
</script>
