<template lang="pug">
  nav.ls-admin-nav
    .container 
      ul.nav__list
        - var items = ["Обо мне","Работы", "Отзывы"];
            each item, index in items
              li.nav__item
                a.nav__link(href="/") #{item}
</template>

<script>
export default {
  name: 'ls-admin-nav',
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

.nav {
  background-color: #fff;
  margin-bottom: 56px;
  &__list {
    display: flex;
  }
  &__item {
    border-bottom: 2px solid transparent;
    &:hover {
      color: #383bcf;
      font-weight: 600;
      border-bottom: 2px solid #383bcf;
    }
    &.active{
      color: #383bcf;
      font-weight: 600;
      border-bottom: 2px solid #383bcf;
    }
  }
  &__link {
    color: #414c63;
    display: block;
    font-weight: 600;
    padding: 30px;
    text-decoration: none;
  }
}

</style>
