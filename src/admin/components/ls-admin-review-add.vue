<template lang="pug">
  .ls-admin-review-add
    form.form-add-item.review-add
      h2.review-add__title Добавление отзыва
      .review-add__content
        .review-add__left
          .upload-photo
            .upload-photo__img
              img.upload-photo__image(src="../images/icons/user.png", alt="Artem Archenkov")
            .upload-photo__btn
              button.btn.btn__add-photo Добавить фото
        .review-add__right
          .review-add__name-occupation
            .form-add-item__row
              .form-add-item__col
                label.form-add-item__label Имя автора
                input(required).form-add-item__input
              .form-add-item__col
                label.form-add-item__label Титул автора
                input(required).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Отзыв
              textarea(required).form-add-item__input.form-add-item__textarea
          .form-add-item__btns
              button.btn.btn__secondary.btn__cancel Отменить
              button(type="submit").btn.btn__primary Загрузить
</template>

<script>
export default {
  name: 'ls-admin-review-add',
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

<style lang="" scoped></style>
