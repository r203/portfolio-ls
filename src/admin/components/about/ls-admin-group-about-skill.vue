<template lang="pug">
  li.group-about__skills-item
    ul.group-about__skill-list(
      v-if="editModeOn"
    )
      li.group-about__skill-name
        input(
          type="text"
          v-model="editedSkill.title"
        ).form-add-item__input
      li.group-about__skill-percent
        input(
          type="text"
          v-model="editedSkill.percent"
        ).form-add-item__input
      li.group-about__skill-btn
        button(
          type="button"
          @click="editCurrentSkill"
          :disabled="disabledBTN"
        ).btn.btn__secondary.btn__ok
        button(
          type="button"
          @click="editModeOn = false"
          :disabled="disabledBTN"
        ).btn.btn__secondary.btn__erase    

    ul.group-about__skill-list(
      v-else
    )
      li.group-about__skill-name {{skill.title}}
      li.group-about__skill-percent {{skill.percent}}
      li.group-about__skill-btn
        button(
          type="button"
          @click="editModeOn = true"
          :disabled="disabledBTN"
        ).btn.btn__secondary.btn__edit
        button(
          type="button"
          @click="removeCurrentSkill"
          :disabled="disabledBTN"
        ).btn.btn__secondary.btn__trash
    
    tooltip(
      :tooltips="tooltips"
    )
</template>

<script>

import { mapActions } from "vuex";
import tooltip from "../tooltip";

export default {
  name: 'ls-admin-group-about-skill',
  components: {
    tooltip,
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true,
    }
  },
  data() {
    return {
      editModeOn: false,
      editedSkill: {...this.skill},
      tooltips: {
        header: "",
        visibleTooltip: false,
        isSuccess: false,
        isError: false,
      },
      disabledBTN: false,
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeCurrentSkill() {
      this.disabledBTN = true;
      try {

        await this.removeSkill(this.skill);

          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Скилл удален"
      } catch (error) {
        console.log(error);
      } finally {
        this.disabledBTN = false;
      }
    },
    async editCurrentSkill() {
      this.disabledBTN = true;
      try {
        await this.editSkill(this.editedSkill);

          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Скилл изменен"
      } catch (error) {
        console.log(error);
      } finally {
        this.editModeOn = false;
        this.disabledBTN = false;
      }
    },
  }
}
</script>

<style lang="" scoped></style>
