<template lang="pug">
  .ls-admin-group-about
    .group-about__title(
      v-if="editModeOn"
    )
      .group-about__title-left 
        input(
          type="text"
          v-model="editedCategory.category"
        ).form-add-item__input
      .group-about__title-right 
        .group-about__btns
          button(
            type="button"
            @click="editCurrentCategory"
          ).btn.btn__secondary.btn__ok
          button(
            type="button"
            @click="editModeOn = false"
            ).btn.btn__secondary.btn__erase
    .group-about__title(
      v-else
    )
      .group-about__title-left 
        h2.group-about__title-text {{category.category}}
      .group-about__title-right 
        .group-about__btns
          button(
            type="button"
            @click="editModeOn = true"
          ).btn.btn__secondary.btn__edit
          button(
            type="button"
            @click="removeCurrentCategory"
            ).btn.btn__secondary.btn__trash

    .group-about__content
      ul.group-about__skills-list
        ls-admin-group-about-skill(
          v-for="skill in category.skills"
          :key="skill.id"
          :skill="skill"
        )
    form(
      @submit.prevent="addNewSkill"
    ).group-about-add
      .group-about-add__row
        .group-about-add__skill
          .message(:class="{error: validation.hasError('skill.title')}") {{ validation.firstError('skill.title') }}
          input(
            v-model="skill.title"
            placeholder="Новый навык"
            ).form-add-item__input
        .group-about-add__percent
          .message(:class="{error: validation.hasError('skill.percent')}") {{ validation.firstError('skill.percent') }}
          input(
            v-model="skill.percent"
            placeholder="0"
            ).form-add-item__input
        .group-about-add__btns
          button(
            type="submit"
          ).btn.btn__secondary.btn__add-group-item +
</template>

<script>
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);
import { mapActions } from "vuex";

export default {
  name: 'ls-admin-group-about',
  components: {
    lsAdminGroupAboutSkill: () => import("./ls-admin-group-about-skill"),
  },
  props: {
    category: Object
  },
  data() {
    return {
      skill: {
        title: "",
        percent: 0,
      },
      editModeOn: false,
      editedCategory: {...this.category}
    }
  },
  validators: {
    'skill.title': function (value) {
      return Validator.value(value).required('Это поле обязательное');
      
    },
    'skill.percent': function (value) {
      return Validator.value(value).lessThanOrEqualTo(100, "Число от 0 до 100").required('Это поле обязательное');
      
    },
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", ["editCategory"]),
    async addNewSkill () {
      const skillData = {
        ...this.skill,
        category: this.category.id,
      }
      if (await this.$validate()){
        try {
          await this.addSkill(skillData);
          this.skill.title = "";
          this.skill.percent = "";
        } catch (error){
          console.log(error);
      }}
    },
    removeCurrentCategory(){
      const currentCategory = this.category;
      this.$emit('removeCurrentCategory', currentCategory);
    },
    async editCurrentCategory() {
      try {
        await this.editCategory(this.editedCategory);
        
      } catch (error) {
        console.log(error);
      } finally {
        this.editModeOn = false;
      }
    },
  }
}
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

.message.error {
  color: red;
}


</style>
