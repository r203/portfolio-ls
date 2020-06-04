export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    SET_WORK(state, works) {
      state.works = works;
    },
    ADD_WORK(state, newWork) {
      state.works.push(newWork);
    },
    REMOVE_WORK(state, workToRemove) {
      state.works = state.works.filter( work => {
        if (work.id !== workToRemove.id) {
          return work;
        }
      });
    },
    EDIT_WORK(state, editedWork) {
      state.works = state.works.map( work => {
        work.id === editedWork.id ? work = editedWork : work
        return work;
      });
    },
  },
  actions: {
    async addWork({commit}, addedWork) {
      try {
        const {data} = await this.$axios.post("/works", addedWork);
        commit("ADD_WORK", data);
      } catch (error) {
        throw error.response.data.message;
      }
    },
    async fetchWorks({commit}) {
      try {
        const userID = await this.$axios.get(`/user`);
        const {data} = await this.$axios.get(`/works/${userID.data.user.id}`);
        commit("SET_WORK", data);
      } catch(error){
        throw error.response.data.message;
        }
    },
    async removeWork({ commit }, workToRemove) {
      try {        
        const {data} = await this.$axios.delete(`/works/${workToRemove.id}`);
        commit("REMOVE_WORK", workToRemove);
      } catch (error){
          throw error.response.data.message;
        }
      },
      async editWork({ commit }, editedWork) {
        try {
          const {data} = await this.$axios.post(`/works/${editedWork.id}`, editedWork);
          await commit("EDIT_WORK", editedWork);

        } catch (error){
            throw error.response.data.message;
          }
        },
  }
}