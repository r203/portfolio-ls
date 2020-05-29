export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEW(state, reviews) {
      state.reviews = reviews;
    },
    ADD_REVIEW(state, newReview) {
      state.reviews.push(newReview);
    },
  },
  actions: {
    async addReview({commit}, addedReview) {
      try {
        const {data} = await this.$axios.post("/reviews", addedReview);
        commit("ADD_REVIEW", data);
        
      } catch (error) {
          console.log(error);

      }
    },
    async fetchReviews({commit}) {
      try {
        const {data} = await this.$axios.get(`/reviews/327`);
        commit("SET_REVIEW", data);
      } catch(error) {
        console.log(error);
        
      }
    },
  }
}