<template lang="pug">
  div.root-wrapper-container
    //- ls-admin-header
    //- ls-admin-nav
    router-view(name="header")
    router-view(name="tabs")
    router-view
</template>

<script>


export default {
  name:'app',
  components: {
    lsAdminHeader: () => import("./components/ls-admin-header"),
    lsAdminNav: () => import("./components/ls-admin-nav"),
  }
}
</script>

<style lang="postcss">

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

@import "./styles/layout.pcss";
@import "./styles/btn.pcss";
@import "./styles/form-add-item.pcss";
@import "./styles/item-add.pcss";

.ls-admin-nav {
  color: #414c63;
  background-color: #fff;
  margin-bottom: 56px;
}
</style>