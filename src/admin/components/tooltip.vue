<template lang="pug">
  .ls-tooltip
    h2.ls-tooltip__header Text {{tooltip.header}}
    .ls-tooltip__content тоже текст {{tooltip.message}}
</template>

<script>
export default {
  name: 'tooltip',
  components: {},
  props: {},
  data() {
    return {
      tooltip: {
        header: "",
        message: "",
        error: false,
        visibleTooltip: false,
      }
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="postcss">

.ls-tooltip {
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 100px;
  background-color: burlywood;
  &__header {
    font-size: 24px;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
}

</style>
