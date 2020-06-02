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
          console.log(error);
      }
    },
    async fetchWorks({commit}) {
      try {
        const {data} = await this.$axios.get(`/works/327`);
        commit("SET_WORK", data);
      } catch(error) {
        console.log(error);
        
      }
    },
    async removeWork({ commit }, workToRemove) {
      try {        
        const {data} = await this.$axios.delete(`/works/${workToRemove.id}`);
        commit("REMOVE_WORK", workToRemove);
      } catch (error){
          console.log(error);
        }
      },
      async editWork({ commit }, editedWork) {
        try {
          console.log(editedWork);
          
          const {data} = await this.$axios.post(`/works/${editedWork.id}`, editedWork);
          await commit("EDIT_WORK", editedWork);
        } catch (error){
            console.log(error);
          }
        },
  }
}