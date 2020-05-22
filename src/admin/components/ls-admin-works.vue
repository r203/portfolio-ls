<template lang="pug">
  .ls-admin-works
    .container.works__container
      lsAdminWorkAdd
      ul.works__list
        li.works__item
          button.item-add
            .item-add__content
              span.item-add__content-text +
            .item-add__sign
              span.item-add__sign-text Добавить работу
        li.works__item
          .work
            .work__image-block
              img.work__image(src="https://picsum.photos/300", alt="Artem Archenkov")
              .tags
                ul.tags__list
                  li.tags__item html
                  li.tags__item css
                  li.tags__item javaascript
            .work__content
              h3.work__title Новая работа
              .work__desc
                p Описание работы
              .work__site-page
                a.work__link google.com
            .work__btns
              button.btn.btn__edit Править
              button.btn.btn__delete Удалить
</template>

<script>

import lsAdminWorkAdd from './ls-admin-work-add'

export default {
  name: 'ls-admin-works',
  components: {
    lsAdminWorkAdd,
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

<style lang="postcss" ></style>
