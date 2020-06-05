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
    ).btn.btn__tooltip Закрыть
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
  z-index: 1000;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 10px;
  text-align: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  background-color: burlywood;
  opacity: .9;
  &__header {
    font-size: 24px;
    font-weight: 600;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
}
.btn.btn__tooltip {
  display: block;
  background-color: #fff;
  color: #2f3642;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.5);
  }
}
.success {
  background-color: #2e8a2e;
}
.error-tooltip {
  background-color: #a01818;
}

</style>
