<template lang="pug">
  nav.ls-admin-nav
    .container 
      ul.nav__list
        li.nav__item(
          v-for="nav in navs"
          )
          router-link(
            :data-text="nav.title" 
            :to="nav.href"
            exact-active-class="active"
          ).nav__link 

</template>

<script>
export default {
  name: 'ls-admin-nav',
  components: {},
  props: {},
  data() {
    return {
      navs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/reviews" },
        { title: "Работы", href: "/works" }
      ]
    }
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
    height: 77px;
  }
  &__item {
    color: #383bcf;
    font-weight: 600;
  }
  &__link {
      vertical-align: middle;
      white-space: nowrap;
      display: flex;
      height: 100%;
      align-items: center;
      cursor: pointer;
      width: 125px;
      justify-content: center;
      border-bottom: 3px solid transparent;
      text-decoration: none;
      &:before {
        content: attr(data-text);
      }
      &:hover {
        color: #383bcf;
        font-weight: 600;
        border-color: currentColor;
      }
        &.active {
        color: #383bcf;
        font-weight: 600;
        border-color: currentColor;
      }
  }
}

</style>
