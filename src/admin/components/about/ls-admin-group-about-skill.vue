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
        ).btn.btn__secondary.btn__ok
        button(
          type="button"
          @click="editModeOn = false"
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
        ).btn.btn__secondary.btn__edit
        button(
          type="button"
          @click="removeCurrentSkill"
        ).btn.btn__secondary.btn__trash
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: 'ls-admin-group-about-skill',
  components: {},
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
      editedSkill: {...this.skill}
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeCurrentSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {
        
      }
    },
    async editCurrentSkill() {
      try {
        await this.editSkill(this.editedSkill);
      } catch (error) {
        console.log(error);
      } finally {
        this.editModeOn = false;
      }
    },
  }
}
</script>

<style lang="" scoped></style>
