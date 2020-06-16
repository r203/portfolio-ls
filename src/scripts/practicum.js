import Vue from "vue";
import axios from "axios";

const request = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
});

const thumbnail = {
    template: "#practice-thumbnail",
    props:  {
        works: Array,
        currentWorkPractice: Object
    },
    methods: {
        handleClickThumb(work) {
            this.$emit("thumb", work);
            
        }
    },
};
const controls = {
    template: "#practice-controls",
    props: {
        currentWorkPractice: Object,
    },
    methods: {
        handleClick(direction) {
            this.$emit("slide", direction);
        }
    },
};
const display = {
    template: "#practice-display",
    components: {thumbnail},
    props:  {
        works: Array,
        currentWorkPractice: Object,
        currentIndex: Number,
    },
    computed: {
        reversedWorks() {
            const works = [...this.works];
            // return  works.reverse();
            return works;
        }
    },
    methods: {
        handleThumb(work) {
            this.$emit("thumb", work);
        }
    },
};
const tags = {
    template: "#practice-tags",
    props: {
        currentWorkPractice: Object,
    },
    computed: {
        tagsArray() {
            return this.currentWorkPractice.techs.split(',');
        },
    }
};

const school = {
    template: "#practice-school",
    components: {tags},
    props:  {
        currentWorkPractice: Object,
    },

};


new Vue({
    el: "#practicum-component",
    template: "#practicum-container",
    components: {display, controls, school},
    data() {
        return {
            works: [], //работа с json файлом
            currentIndex: 0,
        };
    },
    computed: {
        currentWorkPractice() {
            return this.works[this.currentIndex];
        },
    },
    watch: {
        currentIndex(value) {
            this.makeNotLoopSlider(value);
        },
    },
    mounted() {
    },
    methods: {
        makeNotLoopSlider(value) {
            const amountWorks = this.works.length - 1;
            const btnNext = document.querySelector("#btnNext")
            const btnPrev = document.querySelector("#btnPrev")
            
            if (value === this.works.length) {
                this.currentIndex--;
                value = this.works.length - 1;
            } 
            if (value < 0) {
                this.currentIndex++;
                value = 0;
            } 
            if (value === amountWorks) {
                btnNext.classList.add("slider__btn--end")
            } 
            if (value === 0) {
                btnPrev.classList.add("slider__btn--end")
            } 
            if (value > 0 && value < amountWorks) {
                btnNext.classList.remove("slider__btn--end")
                btnPrev.classList.remove("slider__btn--end")
            } 
        },
        makeArrWithRequireImages(array) {
            return array.map((item) => {
                const requirePic = require(`../images/slider/${item.photo}`);
                const requireThumbnail = require(`../images/slider/Thumbnails/${item.thumbnail}`);
                item.photo = requirePic;
                item.thumbnail = requireThumbnail;
                return item;
            });
        },
        handleSlide(direction) {
            switch(direction) {
                case "next" :
                    this.currentIndex++;
                    break;
                case "prev" :
                    this.currentIndex--;
                    break;
            }
        },
        handleThumb(work) {
            
            const workIndex = work;
            this.currentIndex = workIndex;  
            console.log(workIndex);

        },
    },
    async created() {
        const data = require("../data/works.json");
        // const {data} = await request.get("/works/327");

        
        this.works = data;
        
        
    },
});