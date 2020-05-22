import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import admin from './modules/admin'

export const store = new Vuex.Store({
  modules: {
    admin
  }
});