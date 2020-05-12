import Vue from "vue";

const controls = {
    template: "#slider-controls",
    props: ["currentWork"],
    methods: {
        handleClick(direction) {
            this.$emit("slide", direction);
        }
    },
}

const thumbnail = {
    template: "#slider-thumbnail",
    props: ["works", "currentWork"],
}

const display = {
    template: "#slider-display",
    components: {thumbnail},
    props: ["currentWork", "works"],
    computed: {
        reversedWorks() {
            const works = [...this.works];
            return  works.reverse();
        }
    }
}

const tags = {
    template: "#slider-tags",
    props: ["tags"],
}

const school = {
    template: "#slider-school",
    components: {tags},
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(",");
        }
    }
}

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {display, controls, school},
    data() {
        return {
            works: [], //работа с json файлом
            currentIndex: 0,
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        },
    },
    watch: {
        currentIndex(value) {
            this.makeNotLoopSlider(value);
        },
    },
    methods: {
        makeNotLoopSlider(value) {
            const amountWorks = this.works.length - 1;
            const btnNext = document.querySelector("#btnNext")
            const btnPrev = document.querySelector("#btnPrev")
            
            if (value === this.works.length) {
                this.currentIndex--;
                value = this.works.length - 1;
                btnNext.classList.add("slider__btn--end")
                console.log("конец");
            } 
            if (value < 0) {
                this.currentIndex++;
                value = 0;
                btnPrev.classList.add("slider__btn--end")
                console.log("Начало");
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
            
        }
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequireImages(data);
    },
});