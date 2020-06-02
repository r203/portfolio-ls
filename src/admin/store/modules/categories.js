export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, newCategory) {
      state.categories.push(newCategory);
    },
    REMOVE_CATEGORY(state, categoryToRemove) {
      state.categories = state.categories.filter( category => {
        if (category.id !== categoryToRemove.id) {
          return category;
        }
      });

    },
    EDIT_CATEGORY(state, categoryToEdit) {

      state.categories = state.categories.map( category => {
          category.id === categoryToEdit.id ? category.category = categoryToEdit.category : category.category
          return category;
        });
        

    },
    ADD_SKILL(state, newSkill) {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      })
    },
    REMOVE_SKILL(state, skillToRemove) {
      const removeSkillCategory = (category) => {
        category.skills = category.skills.filter(
          (skill) => skill.id !== skillToRemove.id
        );
      };

      const findCategory = (category) => {
        if (category.id === skillToRemove.category){
          removeSkillCategory(category);
        }
        return category;
      };

      state.categories = state.categories.map(findCategory);
    },
    EDIT_SKILL(state, skillToEdit) {
      const editSkillCategory = (category) => {
        category.skills = category.skills.map(
          (skill) => skill.id === skillToEdit.id ? skillToEdit : skill
        );
      };

      const findCategory = (category) => {
        if (category.id === skillToEdit.category){
          editSkillCategory(category);
        }
        return category;
      };

      state.categories = state.categories.map(findCategory);
    },
  },
  actions: {
    async addCategory({commit}, title) {
      try {
        const {data} = await this.$axios.post("/categories", {title});
        commit("ADD_CATEGORY", data);
      } catch (error){
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({commit}) {
      try {
        const {data} = await this.$axios.get(`/categories/327`);
        commit("SET_CATEGORIES", data);
      } catch(error) {
        console.log(error);
        
      }
    },
    async removeCategory({ commit }, categoryToRemove) {
      try {        
        const {data} = await this.$axios.delete(`/categories/${categoryToRemove.id}`);
        commit("REMOVE_CATEGORY", categoryToRemove);
      } catch (error){
          console.log(error);
        }
      },
      async editCategory({ commit }, editedCategory) {
        try {
          const {data} = await this.$axios.post(`/categories/${editedCategory.id}`, { title: editedCategory.category });
          commit("categories/EDIT_CATEGORY", editedCategory, { root: true });
        } catch (error){
            console.log(error);
          }
        },
  }
}