<template lang="pug">
  .ls-admin-reviews
    ls-admin-review-add
    ul.reviews__list
      li.reviews__item
        button.item-add
          .item-add__content
            span.item-add__content-text +
          .item-add__sign
            span.item-add__sign-text Добавить работу
      li.reviews__item
        .review
          .review__title-block
            .review__avatar
              .avatar
                img.avatar__image(src="https://picsum.photos/200", alt="Artem Archenkov")
            .review__name-occupation
              h3.review__name Имя Фамилия
              .review__occupation Программист
          .review__content
            p Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quaerat sunt corporis ex, delectus a recusandae illum suscipit nesciunt, inventore assumenda dolores ab repellendus sed consequatur dicta. Dicta, praesentium quas!
          .review__btns
            button.btn.btn__edit Править
            button.btn.btn__delete Удалить
</template>

<script>

import lsAdminReviewAdd from './ls-admin-review-add'

export default {
  name: 'ls-admin-reviews',
  components: {
    lsAdminReviewAdd,
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

<style lang="" scoped></style>
