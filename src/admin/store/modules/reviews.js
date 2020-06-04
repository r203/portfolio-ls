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
    REMOVE_REVIEW(state, reviewToRemove) {
      state.reviews = state.reviews.filter( review => {
        if (review.id !== reviewToRemove.id) {
          return review;
        }
      });
    },
    EDIT_REVIEW(state, editedReview) {
      state.reviews = state.reviews.map( review => {
        review.id === editedReview.id ? review = editedReview : review
        return review;
      });
    },
  },
  actions: {
    async addReview({commit}, addedReview) {
      try {
        const {data} = await this.$axios.post("/reviews", addedReview);
        commit("ADD_REVIEW", data);
        
      } catch (error){
        throw error.response.data.message;
        }
    },
    async fetchReviews({commit}) {
      try {
        const userID = await this.$axios.get(`/user`);
        const {data} = await this.$axios.get(`/reviews/${userID.data.user.id}`);
        commit("SET_REVIEW", data);
      } catch(error){
        throw error.response.data.message;
        }
    },
    async removeReview({ commit }, reviewToRemove) {
      try {        
        const {data} = await this.$axios.delete(`/reviews/${reviewToRemove.id}`);
        commit("REMOVE_REVIEW", reviewToRemove);
      } catch (error){
        throw error.response.data.message;
        }
      },
      async editReview({ commit }, editedReview) {
        try {
          const {data} = await this.$axios.post(`/reviews/${editedReview.id}`, editedReview);
          await commit("EDIT_REVIEW", editedReview);
        } catch (error){
          throw error.response.data.message;
          }
        },
  }
}