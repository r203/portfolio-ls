import Vue from "vue";

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
    created() {
        const data = require ("../data/skills.json");
        this.skills = data;
    }
});


