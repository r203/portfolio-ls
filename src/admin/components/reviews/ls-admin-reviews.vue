<template lang="pug">
  .ls-admin-reviews.container
    ls-admin-review-add(
      :review="review"
      :reviewToEdit="reviewToEdit"
      :reviewBlockVisibleOn="reviewBlockVisibleOn"
    )
    ul.reviews__list
      li.reviews__item
        button(
          type="button"
          @click="reviewBlockVisibleOn = true"
        ).item-add
          .item-add__content
            span.item-add__content-text +
          .item-add__sign
            span.item-add__sign-text Добавить отзыв
      li(
        v-for="review in reviews"
        :key="review.id"
      ).reviews__item
        ls-admin-review(
          @removeCurrentReview="removeCurrentReview"
          @editCurrentReview="editCurrentReview"
          :review="review"
        )
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
  name: 'ls-admin-reviews',
  components: {
    lsAdminReviewAdd: () => import("./ls-admin-review-add"),
    lsAdminReview: () => import("./ls-admin-review"),

  },
  props: {},
  data() {
    return {
      review: {
        author: "",
        occ: "",
        text: "",
        photo: {},
      },
      reviewToEdit: {},
      reviewBlockVisibleOn: false,
    }
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews,
    })
  },
  created() {
    this.fetchReviews();
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("reviews", ["fetchReviews", "removeReview"]),
    async removeCurrentReview(currentReview) {
      try {
        await this.removeReview(currentReview);

      } catch (error) {
        alert(error.message);
      };
    },
    editCurrentReview(editedReview, editReviewOn){
      this.reviewToEdit = editedReview;
      this.reviewBlockVisibleOn = true   
    },
  }
}
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

@import "../../styles/reviews.pcss";
@import "../../styles/review-add.pcss";
@import "../../styles/upload-photo.pcss";
@import "../../styles/review.pcss";
@import "../../styles/avatar.pcss";

</style>
