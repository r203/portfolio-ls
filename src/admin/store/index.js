import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import admin from './modules/admin'
import categories from "./modules/categories"
import user from "./modules/user"
import skills from "./modules/skills"
import reviews from "./modules/reviews"
import works from "./modules/works"




export default new Vuex.Store({
  modules: {
    admin,
    categories,
    user,
    skills,
    reviews,
    works,
  }
});
