<template lang="pug">
  .ls-admin-reviews.container
    ls-admin-review-add(
      :review="review"
    )
    ul.reviews__list
      li.reviews__item
        button.item-add
          .item-add__content
            span.item-add__content-text +
          .item-add__sign
            span.item-add__sign-text Добавить отзыв
      li(
        v-for="review in reviews"
        :key="review.id"
      ).reviews__item
        ls-admin-review(
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
      }
    }
  },
    computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  created() {
    this.fetchReviews();
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("reviews", ["fetchReviews"]),

  }
}
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

@import "../../styles/reviews.pcss";
@import "../../styles/review-add.pcss";
@import "../../styles/upload-photo.pcss";
@import "../../styles/review.pcss";

</style>
