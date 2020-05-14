<template lang="pug">
  .content
    header.header
      .container.header__container
        .header__left
          .header__logo
            .avatar
              img.avatar__image(src="https://picsum.photos/200", alt="Artem Archenkov")
          .header__user-name
            .user-name
              span.user-name__content Арченков Артём
          .header__page-name
            .page-name
              span.page-name__content Панель администрирования
        .header__right
          .header__btns
            .logout-btn
              a(href="#").logout-btn__link Выйти
    nav.nav
      .container 
        ul.nav__list
          - var items = ["Обо мне","Работы", "Отзывы"];
              each item, index in items
                li.nav__item
                  a.nav__link(href="/") #{item}

    section.about
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
              .group-about__content
              .group-about__line-add

    section.works
      .container.works__container
        .work-add
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
                  input.form-add-item__input
              .form-add-item__row
                .form-add-item__col
                  label.form-add-item__label Ссылка
                  input.form-add-item__input
              .form-add-item__row
                .form-add-item__col
                  label.form-add-item__label Описание
                  textarea.form-add-item__input.form-add-item__textarea
              .form-add-item__row
                .form-add-item__col
                  label.form-add-item__label Добавление тега
                  input.form-add-item__input
              .form-add-item__btns
                  button.btn.btn__secondary.btn__cancel Отменить
                  button.btn.btn__primary Загрузить
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

    section.reviews
      .container.rewiews__container
        .review-add
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
                    input.form-add-item__input
                  .form-add-item__col
                    label.form-add-item__label Титул автора
                    input.form-add-item__input
              .form-add-item__row
                .form-add-item__col
                  label.form-add-item__label Отзыв
                  textarea.form-add-item__input.form-add-item__textarea
              .form-add-item__btns
                  button.btn.btn__secondary.btn__cancel Отменить
                  button.btn.btn__primary Загрузить
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

<style lang="postcss"> 
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

@import "./styles/layout.pcss";
@import "./styles/header.pcss";
@import "./styles/avatar.pcss";
@import "./styles/nav.pcss";
@import "./styles/about.pcss";
@import "./styles/group-about.pcss";
@import "./styles/works.pcss";
@import "./styles/reviews.pcss";
@import "./styles/work-add.pcss";
@import "./styles/review-add.pcss";
@import "./styles/upload.pcss";
@import "./styles/upload-photo.pcss";
@import "./styles/btn.pcss";
@import "./styles/form-add-item.pcss";
@import "./styles/item-add.pcss";
@import "./styles/work.pcss";
@import "./styles/review.pcss";
@import "./styles/tags.pcss";

</style>