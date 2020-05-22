<template lang="pug">
  .ls-admin-work-add
    form.work-add
      h2.work-add__title Добавление Работы
      .work-add__content
        .work-add__left
          .upload
            .upload__desc Перетащите либо загрузите изображение
            .upload__btn
              button.btn.btn__primary Загрузить
        .work-add__right.form-add-item
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Название
              input(required).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Ссылка
              input(required).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Описание
              textarea(required).form-add-item__input.form-add-item__textarea
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Добавление тега
              input.form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .tags.work-add__tags
                ul.tags__list
                  li.tags__item 
                    span.tags__text html
                    button.btn.btn__secondary.btn__del-tag
                  li.tags__item 
                    span.tags__text css
                    button.btn.btn__secondary.btn__del-tag
                  li.tags__item 
                    span.tags__text javaascript
                    button.btn.btn__secondary.btn__del-tag
          .form-add-item__btns
              button.btn.btn__secondary.btn__cancel Отменить
              button(type="submit").btn.btn__primary Загрузить
</template>

<script>
export default {
  name: 'ls-admin-work-add',
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
