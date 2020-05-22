<template lang="pug">
  .ls-admin-header-logout
    .header__btns
      .logout-btn
        a(href="#").logout-btn__link Выйти
</template>

<script>
export default {
  name: 'ls-admin-header-logout',
  components: {},
  props: {},
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="postcss">

.logout-btn {
  &__link {
    opacity: .7;
    transition: opacity .3s;
    &:hover {
      opacity: 1;
    }
  }
}

</style>
