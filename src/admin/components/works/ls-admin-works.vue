<template lang="pug">
  .ls-admin-works
    .container.works__container
      lsAdminWorkAdd(
        @workBlockVisibleOFF="workBlockVisibleOFF"
        :work="work"
        :editedWork="editedWork"
        :workBlockVisibleOn="workBlockVisibleOn"
        :editWorkOn="editWorkOn"
      )
      ul.works__list
        li.works__item
          button(
            type="button"
            @click="workBlockVisibleOn = true"
          ).item-add
            .item-add__content
              span.item-add__content-text +
            .item-add__sign
              span.item-add__sign-text Добавить работу
        li(
          v-for="(workItem, index) in works"
          :key="work.id"
        ).works__item
          .work
            .work__image-block
              img.work__image(
                :src="`https://webdev-api.loftschool.com/${workItem.photo}`"
                :alt="workItem.title"
                )
              .tags
                ul.tags__list
                  li.tags__item html
                  li.tags__item css
                  li.tags__item javaascript
            .work__content
              h3.work__title {{workItem.title}}
              .work__desc
                p {{workItem.description}}
              .work__site-page
                a(
                  :href="`https://${workItem.link}`"
                ).work__link {{workItem.link}}
            .work__btns
              button(
                type="button"
                @click="editCurrentWork(index)"
              ).btn.btn__edit Править
              button(
                type="button"
                @click="removeCurrentWork(index)"
              ).btn.btn__delete Удалить

    tooltip(
        :tooltips="tooltips"
      )
</template>

<script>

import { mapActions, mapState } from "vuex";

import lsAdminWorkAdd from './ls-admin-work-add'
import tooltip from "../tooltip";

export default {
  name: 'ls-admin-works',
  components: {
    lsAdminWorkAdd,
    tooltip,
  },
  props: {},
  data() {
    return {
      work: {
        title: "",
        techs: "",
        photo: {},
        link: "",
        description: "",
      },    
      editedWork: {},
      workBlockVisibleOn: false,
      editWorkOn: true,
      tooltips: {
        header: "",
        visibleTooltip: false,
        isSuccess: false,
        isError: false,
      },
    }
  },
  computed: {
    ...mapState("works", {
      works: state => state.works,
    }),
  },
  created() {
    this.fetchWorks();
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("works", ["fetchWorks", "removeWork"]),
    async removeCurrentWork(index) {
      try {
        await this.removeWork(this.works[index]);

          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Работа удалена"
      } catch (error) {
        alert(error.message);
      };
    },
    async editCurrentWork(index){
      this.workBlockVisibleOn = true;
      this.editWorkOn = false;      
      this.editedWork = this.works[index];      
    },
    workBlockVisibleOFF() {
      this.workBlockVisibleOn = false
    },
  },
}
</script>

<style lang="postcss" >
@import "../../../styles/mixins.pcss";

@import "../../styles/works.pcss";
@import "../../styles/work-add.pcss";
@import "../../styles/upload.pcss";
@import "../../styles/work.pcss";
@import "../../styles/tags.pcss";


</style>
