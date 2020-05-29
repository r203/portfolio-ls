<template lang="pug">
  .ls-admin-review-add
    form(
      @submit.prevent="addNewReview"
    ).form-add-item.review-add
      h2.review-add__title Добавление отзыва
      .review-add__content
        .review-add__left
          .upload-photo
            label.form-add-item__label-file
              input(
                type="file"
                @change="handleFileChange"
              ).form-add-item__input-file
              .upload-photo__img
                //- img.upload-photo__image(src="../images/icons/user.png", alt="Artem Archenkov")
              .upload-photo__btn
                button(
                  v-model="review.photo"
                ).btn.btn__add-photo Добавить фото
        .review-add__right
          .review-add__name-occupation
            .form-add-item__row
              .form-add-item__col
                label.form-add-item__label Имя автора
                input(
                  v-model="review.author"
                ).form-add-item__input
              .form-add-item__col
                label.form-add-item__label Титул автора
                input(
                  v-model="review.occ"
                ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Отзыв
              textarea(
                  v-model="review.text"
              ).form-add-item__input.form-add-item__textarea
          .form-add-item__btns
              button.btn.btn__secondary.btn__cancel Отменить
              button(
                type="submit"
                ).btn.btn__primary Загрузить
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: 'ls-admin-review-add',
  components: {},
  props: {
    review: {
      type: Object,
      default: () => {},
      required: true,
    }
  },
  data() {
    return {
      editedReview: {...this.review},
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("reviews", ["addReview"]),
    async handleFileChange(event) {
      
      this.review.photo = event.target.files[0];  
                
    },
    async addNewReview(review) {
      try {
        const formData = new FormData;

        formData.append("author", this.review.author);
        formData.append("occ", this.review.occ);
        formData.append("text", this.review.text);
        formData.append("photo", this.review.photo);
        
        await this.addReview(formData);
      } catch (error) {
        console.log(error);
      }
    },
  }
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
