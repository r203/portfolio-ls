<template lang="pug">
  .ls-admin-review-add
    form(
      v-if="reviewToEdit.editReviewOn"
      v-show="reviewBlockVisibleOn"
      @submit.prevent="editCurrentReview"
    ).form-add-item.review-add
      h2.review-add__title Изменение отзыва
      .review-add__content
        .review-add__left
          .upload-photo
            label.form-add-item__label-file
              input(
                type="file"
                @change="handleFileChange"
              ).form-add-item__input-file
              .upload-photo__img(
                :style="{backgroundImage: `url(${this.renderedPhoto})`}"
              )
                //- img.upload-photo__image(src="../images/icons/user.png", alt="Artem Archenkov")
              .upload-photo__btn
                .btn.btn__add-photo Добавить фото
        .review-add__right
          .review-add__name-occupation
            .form-add-item__row
              .form-add-item__col
                label.form-add-item__label Имя автора
                input(
                  v-model="reviewToEdit.author"
                ).form-add-item__input
              .form-add-item__col
                label.form-add-item__label Титул автора
                input(
                  v-model="reviewToEdit.occ"
                ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Отзыв
              textarea(
                  v-model="reviewToEdit.text"
              ).form-add-item__input.form-add-item__textarea
          .form-add-item__btns
              button(
                type="button"
                @click="reviewBlockVisibleOn = false"
              ).btn.btn__secondary.btn__cancel Отменить
              button(
                type="submit"
                ).btn.btn__primary Изменить 

    form(
      v-else
      v-show="reviewBlockVisibleOn"
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
              .upload-photo__img(
                :style="{backgroundImage: `url(${renderedPhoto})`}"
              )
                //- img.upload-photo__image(src="../images/icons/user.png", alt="Artem Archenkov")
              .upload-photo__btn
                .btn.btn__add-photo Добавить фото
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
              button(
                type="button"
                @click="reviewBlockVisibleOn = false"
              ).btn.btn__secondary.btn__cancel Отменить
              button(
                type="submit"
                ).btn.btn__primary Загрузить 
              
    tooltip(
      :tooltips="tooltips"
    )
</template>

<script>

import { renderer } from "../../helpers/pictures"
import { mapActions } from "vuex";
import tooltip from "../tooltip";

export default {
  name: 'ls-admin-review-add',
  components: {
    tooltip,
  },
  props: {
    review: {
      type: Object,
      default: () => {},
      required: true,
    },
    reviewToEdit: {
      type: Object,
      default: () => {},
      required: true,
    },
    reviewBlockVisibleOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      renderedPhoto: {},
      tooltips: {
        header: "",
        visibleTooltip: false,
        isSuccess: false,
        isError: false,
      },
    }
  },
  computed: {
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("reviews", ["addReview", "editReview"]),
    async handleFileChange(event) {
      this.review.photo = event.target.files[0];  
      renderer(this.review.photo).then(pic => {
        this.renderedPhoto = pic;
      })
    },
    async addNewReview(review) {
      try {
        const formData = new FormData;

        formData.append("author", this.review.author);
        formData.append("occ", this.review.occ);
        formData.append("text", this.review.text);
        formData.append("photo", this.review.photo);
        
        await this.addReview(formData);

          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Отзыв добавлен"
      } catch (error) {
        console.log(error);
      }
    },
    async editCurrentReview() {
      try {
        await this.editReview(this.reviewToEdit);

          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Отзыв изменен"
        
      } catch (error) {
        console.log(error);
      } finally {
        this.editModeOn = false;
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
