import Vue from 'vue'
import Flickity from 'vue-flickity';
 
new Vue({
  el: "#feedback-component",
  template: "#feedback-container",
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        autoPlay: false,
        
        feedback: []
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
      console.log("next");
      
    },
    
    previous() {
      this.$refs.flickity.previous();
      console.log("prev");
    }
  },
  created() {
    const data = require("../data/feedback.json");
    this.feedback = data;
},
});