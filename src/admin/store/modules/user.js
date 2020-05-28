export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {},
  actions: {
    async loginUser(store, payload) {
      try {
        // const response = await this.$axios.post("/login", payload);
        // const token = response.data.token;
        // localStorage.setItem("token", token);
        // $axios.defaults.headers["Authorization"] = `Bearer ${token}`;

      } catch (error){
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
   }

  }
}