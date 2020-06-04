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
            :disabled="disabledBTN"
          ).btn.btn__secondary.btn__ok
          button(
            type="button"
            @click="editModeOn = false"
            :disabled="disabledBTN"
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
            :disabled="disabledBTN"
          ).btn.btn__secondary.btn__edit
          button(
            type="button"
            @click="removeCurrentCategory"
            :disabled="disabledBTN"
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
            :disabled="disabledBTN"
          ).btn.btn__secondary.btn__add-group-item +

    tooltip(
      :tooltips="tooltips"
    )
</template>

<script>
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);
import { mapActions } from "vuex";
import tooltip from "../tooltip";


export default {
  name: 'ls-admin-group-about',
  components: {
    lsAdminGroupAboutSkill: () => import("./ls-admin-group-about-skill"),
    tooltip,
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
      editedCategory: {...this.category},
      tooltips: {
        header: "",
        visibleTooltip: false,
        isSuccess: false,
        isError: false,
      },
      disabledBTN: false,
    }
  },
  validators: {
    'skill.title': function (value) {
      return Validator.value(value).required('Это поле обязательное');
      
    },
    'skill.percent': function (value) {
      return Validator.value(value).lessThanOrEqualTo(100, "Число от 0 до 100").required('Это поле обязательное').digit();
      
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
        this.disabledBTN = true;
        try {
          await this.addSkill(skillData);
          this.skill.title = "";
          this.skill.percent = "";

          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Скилл добавлен" 

        } catch (error){
            this.tooltips.visibleTooltip = true; 
            this.tooltips.isError = true;
            this.tooltips.header = "Ошибка"
            this.tooltips.message = error;
            
        } finally {
          this.disabledBTN = false;
        }
      }
    },
    removeCurrentCategory(){
      this.disabledBTN = true;
      const currentCategory = this.category;
      this.$emit('removeCurrentCategory', currentCategory);
    },
    async editCurrentCategory() {
      this.disabledBTN = true;
      try {
        await this.editCategory(this.editedCategory);
          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Категория изменена"   
          
      } catch (error) {
          this.tooltips.visibleTooltip = true; 
          this.tooltips.isError = true;
          this.tooltips.header = "Ошибка"
          this.tooltips.message = error;

      } finally {
        this.editModeOn = false;
        this.disabledBTN = false;
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
