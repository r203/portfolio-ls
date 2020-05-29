<template lang="pug">
  .review
    .review__title-block
      .review__avatar
        .avatar
          img.avatar__image(
            :src="`https://webdev-api.loftschool.com/${review.photo}`"
            alt="review.author"
            )
      .review__name-occupation
        h3.review__name {{review.author}}
        .review__occupation {{review.occ}}
    .review__content
      p {{review.text}}
    .review__btns
      button.btn.btn__edit Править
      button.btn.btn__delete Удалить
 
</template>

<script>
export default {
  name: 'ls-admin-review',
  components: {},
  props: {
    review: {
      type: Object,
      default: () => {},
      required: true,
    }
  },
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>

<style lang="scss"></style>
