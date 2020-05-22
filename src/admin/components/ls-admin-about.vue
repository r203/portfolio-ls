<template lang="pug">
  .ls-admin-about
    .container.about__container
      .about__title
        h2.about__title-text Блок "Обо мне"
        button.btn.btn__secondary.btn__add-group Добавить группу
      .about__content
        ul.about__group
          li.group-about
            .group-about__title 
              .form-add-item.group-about__title-left
                .form-add-item__row
                  .form-add-item__col
                    input(placeholder="Название новой группы").form-add-item__input
              .group-about__title-right 
                .group-about__btns
                  button.btn.btn__secondary.btn__ok 
                  button.btn.btn__secondary.btn__erase
            .group-about__content
            .form-add-item.group-about-add
              .group-about-add__row
                .group-about-add__skill
                  input(placeholder="Новый навык").form-add-item__input
                .group-about-add__percent
                  input(placeholder="0").form-add-item__input
                .group-about-add__btns
                  button.btn.btn__secondary.btn__add-group-item +
          li.group-about
            .group-about__title
              .group-about__title-left 
                h2.group-about__title-text Frontend
              .group-about__title-right 
                .group-about__btns
                  button.btn.btn__secondary.btn__edit
            .group-about__content
              ul.group-about__skills-list
                li.group-about__skills-item
                  ul.group-about__skill-list
                    li.group-about__skill-name html
                    li.group-about__skill-percent 80
                    li.group-about__skill-btn
                      button.btn.btn__secondary.btn__edit
                      button.btn.btn__secondary.btn__trash
                li.group-about__skills-item
                  ul.group-about__skill-list
                    li.group-about__skill-name css
                    li.group-about__skill-percent 70
                    li.group-about__skill-btn
                      button.btn.btn__secondary.btn__edit
                      button.btn.btn__secondary.btn__trash
                li.group-about__skills-item
                  ul.group-about__skill-list
                    li.group-about__skill-name java
                    li.group-about__skill-percent 30
                    li.group-about__skill-btn
                      button.btn.btn__secondary.btn__edit
                      button.btn.btn__secondary.btn__trash
            .group-about-add
              .group-about-add__row
                .group-about-add__skill
                  input(placeholder="Новый навык").form-add-item__input
                .group-about-add__percent
                  input(placeholder="0").form-add-item__input
                .group-about-add__btns
                  button.btn.btn__secondary.btn__add-group-item +
</template>

<script>
export default {
  name: 'ls-admin-about',
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

<style lang="postcss" ></style>
