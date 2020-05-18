import Vue from 'vue'
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo)

new Vue({
  el: "#nav-component",
  template: "#nav-container",
  methods: {
    onStart(elem) {
      
      const bodyTag = document.querySelector('body');
      bodyTag.classList.remove('overflow--hidden')
    }
  }

});