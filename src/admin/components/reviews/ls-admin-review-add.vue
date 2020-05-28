<template lang="pug">
  .ls-admin-review-add
    form.form-add-item.review-add
      h2.review-add__title Добавление отзыва
      .review-add__content
        .review-add__left
          .upload-photo
            .upload-photo__img
              //- img.upload-photo__image(src="../images/icons/user.png", alt="Artem Archenkov")
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

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.review-add {
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  padding-bottom: 30px;
  margin-bottom: 30px;
  &__title {
    font-size: 18px;
    font-weight: 600;
    color: #414c63;
    padding: 30px 15px;
    margin: 0 20px;
    margin-bottom: 50px;
    border-bottom: 1px solid rgba(31, 35, 45, .15);
  }
  &__content {
    display: flex;
    flex-direction: row;
    padding: 0 35px;
    @include phones {
      flex-direction: column;
    }
  }
  &__left {
    width: 30%;
    margin-right: 30px;
    @include phones {
      width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    width: 70%;
    @include phones {
      width: 100%;
    }
  }
}

.review-add .form-add-item__btns {
  justify-content: flex-end;
}

</style>
