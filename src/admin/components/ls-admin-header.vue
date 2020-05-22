<template lang="pug">
  header.ls-admin-header
    .container.ls-admin-header__container
      .ls-admin-header__left
        ls-admin-header-user
        .ls-admin-header__page-name
          .page-name
            span.page-name__content Панель администрирования
      .ls-admin-header__right
        ls-admin-header-logout
</template>

<script>

import lsAdminHeaderUser from './ls-admin-header-user'
import lsAdminHeaderLogout from './ls-admin-header-logout'


export default {
  name: 'ls-admin-header',
  components: {
    lsAdminHeaderUser, lsAdminHeaderLogout,
  },
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
@import "../../styles/mixins.pcss";

.ls-admin-header {
  width: 100%;
  background-color: #424268;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    margin: 0 auto;
  }
  &__left {
    display: flex;
    align-items: center;
    :not(:last-child) {
    margin-right: 22px;
  }
  }
  &__logo {
    width: 46px;
  }
}
.page-name {
  @include phones {
    display: none;
  }
  &__content {
    opacity: .5;
  }
}

</style>
