import Vue from "vue";
import axios from "axios";

const request = axios.create({
    baseURL: "https://webdev-api.loftschool.com"
});

const skill = {
    template: "#skill",
    props: ["skill"],
    methods: {
        drawSkillBars() {
            const circle = this.$refs["circle"];
            const radius = parseInt(getComputedStyle(circle).getPropertyValue('r'));
            const circumference = parseInt(2 * Math.PI * radius);
            const percent = circumference - this.skill.percent / 100 * circumference;
            
            circle.style.strokeDashoffset = percent;
        },
    },
    mounted () {
        this.drawSkillBars();
    },
};

const skillsRow = {
    template: "#skills-row",
    components: {
        skill,
    },
    props: ["category"]
};

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow,
    },
    data() {
        return {
            skills: []
        }
    },
    async created() {
        const { data } = await request.get("/categories/327");
        this.skills = data;        
    }
});


