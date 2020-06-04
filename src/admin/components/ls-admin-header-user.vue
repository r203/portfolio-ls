<template lang="pug">
  .ls-admin-header-user
    a(href="/admin").ls-admin-header__logo
      .avatar
        img.avatar__image(src="https://picsum.photos/200", alt="Artem Archenkov")
    .ls-admin-header-user__user-name
      .user-name
        span.user-name__content Арченков Артём
</template>

<script>
export default {
  name: 'ls-admin-header-user',
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

<style lang="postcss" >

.ls-admin-header-user {
    display: flex;
    align-items: center;
    :not(:last-child) {
    margin-right: 22px;
  }
}
.avatar {
  overflow: hidden;
  border-radius: 50%;
  &__image {
      display: block;
      max-width: 100%;
      object-fit: cover;
  }
}

</style>
