<template lang="pug">
  .ls-admin-wrapper
    ls-admin-header
    ls-admin-nav
</template>

<script>

import lsAdminHeader from './ls-admin-header'
import lsAdminNav from './ls-admin-nav'

export default {
  name:'ls-admin-wrapper',
  components: {
    lsAdminHeader,
    lsAdminNav,
  }
}
</script>

<style lang="postcss"> 

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../../styles/mixins.pcss";
@import "../../styles/layout/base.pcss";

</style>