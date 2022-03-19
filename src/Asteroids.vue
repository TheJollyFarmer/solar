<template>
  <div :class="className">
    <VHeader
      :title="title"
      :link="link"
      :active="display"
      @toggle="toggleDisplay"/>
    <TransitionExpand>
      <p
        v-show="display"
        v-text="asteroids[type]"/>
    </TransitionExpand>
  </div>
</template>

<script>
import asteroids from "@/data/asteroids";
import Expand from "@/mixins/Expand";
import TransitionExpand from "@/components/utils/TransitionExpand";
import VHeader from "@/components/utils/VHeader";

export default {
  name: "Asteroids",

  components: { TransitionExpand, VHeader },

  mixins: [Expand],

  props: {
    type: {
      type: String,
      required: false,
      default: "asteroid"
    }
  },

  data() {
    return {
      asteroids
    };
  },

  computed: {
    title() {
      return this.type + " belt";
    },

    className() {
      return this.type + "-belt";
    },

    link() {
      return this.type + "_belt";
    }
  }
};
</script>
