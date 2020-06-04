import Vue from 'vue'
import Flickity from 'vue-flickity';
import axios from "axios";

const request = axios.create({
  baseURL: "https://webdev-api.loftschool.com"
});

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

      },
      feedback: [],
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
  async created() {
    const { data } = await request.get("/reviews/327");
    this.feedback = data;
    this.$nextTick(function () { this.$refs.flickity.rerender(); });
  },
});