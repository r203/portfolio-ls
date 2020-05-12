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
          button.about__btn--add Добавить группу
        .about__content
          ul.about__group
            li.group-about
              .group-about__title 
              .group-about__content
              .group-about__line-add
            li.group-about
              .group-about__title
              .group-about__content
              .group-about__line-add

    section.works
      .work-add
        h2.work-add__title Добавление Работы
        .work-add__content
          .work-add__left
            .upload
              .upload__desc Перетащите либо загрузите изображение
              .upload__btn
                button.btn.btn__primary Загрузить
          .work-add__right
            .work-add__work-title
            .work-add__work-link
            .work-add__work-desc
            .work-add__work-tags
            .work-add__work-btns
                button.btn.btn__cancel Отменить
                button.btn.btn__primary Загрузить
      ul.works__list
        li.works__item
          .item-add
            .item-add__content
              span.item-add__content-text +
            .item-add__sign
              span.item-add__sign-text Добавить работу
        li.works__item
          .work
            .work__image-block
              img.work__image
              .tags
            .work__content
              h3.work__title
              .work__desc
              .work__site-page
                a.work__link
              .work__btns
                button.btn.btn__edit Править
                button.btn.btn__delete Удалить
      
    section.reviews
      .review-add
        h2.review-add__title Добавление отзыва
        .review-add__conten
          .review-add__left
            .review-add__img
            button.btn.btn__add-photo Добавить фото
          .review-add__right
            .review-add__name-occupation
              .review-add__name
                label.review-add__label Имя автора
                  input.review-add__input(type="text", name="name")
              .review-add__occupation
                label.review-add__label Титул автора
                  input.review-add__input(type="text", name="occupation")
            .review-add__review
              label.review-add__label Имя автора
                textarea.review-add__textarea(name="review", cols="30", rows="10")
            .review-add__btns
              button.btn.btn__cancel Отменить
              button.btn.btn__primary Загрузить
      .reviews__list
        li.reviews__item
          .item-add
            .item-add__content
              span.item-add__content-text +
            .item-add__sign
              span.item-add__sign-text Добавить работу
        li.reviews__item
          .review
            .review__title-block
              .review__img
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

body {
  background-color: #f8fafe;
}

.container {
      max-width: 1080PX;
}

.header {
    width: 100%;
    background-color: #424268;
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
      margin: 0 auto;
    }
    &__left {
      display: flex;
      align-items: center;
      :not(:last-child) {
      margin-right: 22px;
    }
    }
    &__logo {
      width: 46px;
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

.user-name {
  &__content {
    font-size: 18px;
    font-weight: 600;
  }
}

.page-name {
  &__content {
    opacity: .5;
  }
}

.logout-btn {
  &__link {
    opacity: .7;
  }
}

.nav {
    color: #414c63;
    background-color: #fff;
    margin-bottom: 56px;
    &__list {
      display: flex;
    }
    &__item {
      border-bottom: 2px solid transparent;
      &:hover {
        color: #383bcf;
        font-weight: 600;
        border-bottom: 2px solid #383bcf;

      }
    }
    &__link {
      display: block;
      font-weight: 600;
      padding: 30px;
      text-decoration: none;
    }
}

.about {
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__title {
    display: flex;
    margin-bottom: 60px;
    &-text {
      font-weight: 900;
      font-size: 21px;
      color: #414c63;
    }
  }
  &__group {
    display: flex;
  }
}

.group-about {
  border: 1px solid black;
  width: 50%;
  /* убери высоту как контент появится */
  height: 395px; 
  &:not(:last-child) {
    margin-right: 30px;
  }
}

</style>