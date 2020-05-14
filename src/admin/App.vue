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
              .group-about__content
              .group-about__line-add
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
            .item-add
              .item-add__content
                span.item-add__content-text +
              .item-add__sign
                span.item-add__sign-text Добавить работу
          li.works__item
            .work
              .work__image-block
                img.work__image(src="https://picsum.photos/300", alt="Artem Archenkov")
                .tags
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
            .item-add
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
  margin-bottom: 60px;
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
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  width: 50%;
  /* убери высоту как контент появится */
  height: 395px; 
  &:not(:last-child) {
    margin-right: 30px;
  }
}

.works {
  margin-bottom: 60px;
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item {
    width: 33.333%;
    max-width: 33.333%; 
    max-height: 560px;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}

.reviews {
  margin-bottom: 60px;
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item {
    width: 33.333%;
    max-width: 33.333%; 
    max-height: 560px;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}

.work-add {
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
  }
  &__left {
    width: 50%;
    margin-right: 30px;
  }
  &__right {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
}

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
  }
  &__left {
    width: 30%;
    margin-right: 30px;
  }
  &__right {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
}

.upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* временное решение - переделать */
  height: 275px; 
  /* height: 100%; */
  max-height: 275px;
  background-color: #dee4ed;
  border: 1px dashed rgba(31, 35, 45, .15);
  text-align: center;
  line-height: 30px;
  padding: 0px 90px;
  &__desc {
    color: #414c63;
    font-weight: 600;
    margin-bottom: 30px;
  }
}

.upload-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-color: #dee4ed;
    border-radius: 50%;
    margin-bottom: 30px;
  }
  &__image {
    width: 50%;
  }
  &__btn {
    display: flex;
    width: 100%;
    justify-content: center
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  &__primary {
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    padding: 19px 50px;
    border-radius: 50px;
    background: rgb(20,89,226);
    background: linear-gradient(90deg, rgba(20,89,226,1) 0%, rgba(63,53,203,1) 100%);
  }
  &__cancel {
    font-weight: 600;
    color: #383bcf;
    background: transparent;
    margin: 0 55px;
  }
  &__edit {
    font-weight: 600;
    background: transparent;
    color: #414c63;
    opacity: .7;
    &:after {
      content: '';
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      color: #fff;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
    }
  }
  &__delete {
    font-weight: 600;
    background: transparent;
    color: #414c63;
    opacity: .7;;
    &:after {
      content: '';
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      color: #fff;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: svg-load('remove.svg', fill=#c92e2e, width=100%, height=100%);
    }
  }
  &__add-photo {
    font-weight: 600;
    color: #383bcf;
    background: transparent;
  }
  &__add-group {
    font-weight: 600;
    color: #383bcf;
    background: transparent;
    margin: 0 55px;
    &:before {
      content: '+';
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      color: #fff;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: rgb(20,89,226);
      background: linear-gradient(90deg, rgba(20,89,226,1) 0%, rgba(63,53,203,1) 100%);
    }
  }
}

.form-add-item {
  &__row {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
  &__col {
    display: flex;
    flex-direction: column;
    flex: 1;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  &__label {
    font-weight: 600;
    color: #414c63;
    opacity: .5;
  }
  &__input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #414c63;
    padding: 20px 0;
  }
  &__textarea {
    margin-top: 20px;
    border: 1px solid #d9dbe0;
    resize: none;
  }
  &__btns {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}

.item-add {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 560px;
  width: 100%;
  height: 100%;
  background: rgb(20,89,226);
  background: linear-gradient(90deg, rgba(20,89,226,1) 0%, rgba(63,53,203,1) 100%);
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border: 2px solid #fff;
    border-radius: 50%;
    font-size: 72px;
    font-weight: 100;
    margin-bottom: 30px;
  }
  &__sign {
    font-size: 18px;
    font-weight: 600;
  }
}

.work {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  &__image-block {
    width: 100%;
    height: 40%;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__content {
    width: 100%;
    height: 100%;
    padding: 40px 30px;
  }
  &__title {
    color: #414c63;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  &__desc {
    color: #414c63;
    opacity: .75;
    font-weight: 600;
    margin-bottom: 30px;
  }  
  &__site-page {
    color: #4548d2;
    opacity: .75;
    font-weight: 600;
  }
  &__btns {
    display: flex;
    width: 100%;
    padding: 0 30px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}

.review {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  &__title-block {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid rgba(31, 35, 45, .15);
    padding: 0 10px 30px 10px;
  }
  &__avatar {
      width: 46px;
  }
  &__name-occupation {
    margin-left: 20px;
  }
  &__name {
    font-size: 18px;
    font-weight: 600;
    color: #414c63;
  }
  &__occupation {
    font-weight: 600;
    color: #414c63;
    opacity: .5;
  }
  &__content {
    flex: 1;
    font-weight: 600;
    color: #414c63;
    opacity: .7;
    padding: 30px 0;
  }
  &__btns {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>