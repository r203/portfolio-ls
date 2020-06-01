<template lang="pug">
  .ls-tooltip(
    v-show="tooltips.visibleTooltip"
    :class="{ success: tooltips.isSuccess, 'error-tooltip': tooltips.isError,}"
  )
    h2.ls-tooltip__header {{tooltips.header}}
    .ls-tooltip__content {{tooltips.message}}
    button(
      type="button"
      @click="tooltips.visibleTooltip = false"
    ).btn X
</template>

<script>
export default {
  name: 'tooltip',
  components: {},
  props: {
    tooltips: Object,
    default: () => {},
    required: true,
  },
  data() {
    return {
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
  }
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
  opacity: .9;
  &__header {
    font-size: 24px;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
}
.success {
  background-color: #2e8a2e;
}
.error-tooltip {
  background-color: #a01818;
}

</style>
