<template>
  <div class="scales">
    <!--    <div-->
    <!--      v-for="scale in scales"-->
    <!--      :key="scale"-->
    <!--      class="scale"/>-->
  </div>
</template>

<script>
export default {
  name: "Scales",

  props: {
    offset: {
      type: Number,
      required: true
    }
  },

  computed: {
    scales() {
      let scales = [];

      for (let i = 1; i++; i <= 6000) {
        let scale = i * 10;
        let distance = this.offset + window.innerHeight + 500;

        if (scale < distance) scales.push(i);
        else if (scales[i]) scales.splice(scales.indexOf(i), 1);
        else break;
      }

      return scales;
    }
  }
};
</script>

<style lang="scss" scoped>
.scales {
  position: absolute;
  left: 0;
  top: 0;
  height: 60000px;
  width: 50px;
  background: url("./assets/images/scale.svg") repeat-y;

  .scale {
    background-color: $white;
    width: 20px;
    height: 1px;
    margin-bottom: 9px;

    &:nth-child(10n) {
      width: 35px;
    }

    &:first-child {
      width: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
