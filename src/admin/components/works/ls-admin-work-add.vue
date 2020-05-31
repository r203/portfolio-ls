<template lang="pug">
  .ls-admin-work-add(
    v-show="workBlockVisibleOn"
  )
    form(
      v-if="editWorkOn"
      @submit.prevent="addNewWork"
    ).work-add
      h2.work-add__title Добавление Работы
      .work-add__content
        .work-add__left
          .upload
            label.form-add-item__label-files
              .upload__desc Перетащите либо загрузите изображение
              .upload__btn
                  input(
                    type="file"
                    @change="handleFileChange"
                  ).form-add-item__input-file
                  button(
                    type="button"
                    v-model="work.photo"
                  ).btn.btn__primary Загрузить
        .work-add__right.form-add-item
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Название
              input(
                v-model="work.title"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Ссылка
              input(
                v-model="work.link"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Описание
              textarea(
                v-model="work.description"
              ).form-add-item__input.form-add-item__textarea
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Добавление тега
              input(
                v-model="work.techs"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .tags.work-add__tags
                ul.tags__list
                  li.tags__item 
                    span.tags__text html
                    button.btn.btn__secondary.btn__del-tag
                  li.tags__item 
                    span.tags__text css
                    button.btn.btn__secondary.btn__del-tag
                  li.tags__item 
                    span.tags__text javaascript
                    button.btn.btn__secondary.btn__del-tag
          .form-add-item__btns
              button(
                type="button"
                @click="workBlockVisibleOn = false"
              ).btn.btn__secondary.btn__cancel Отменить
              button(
                type="submit"
                ).btn.btn__primary Загрузить
    form(
      v-else
      @submit.prevent="editCurrentWork"
    ).work-add
      h2.work-add__title Изменение Работы
      .work-add__content
        .work-add__left
          .upload
            label.form-add-item__label-files
              .upload__desc Перетащите либо загрузите изображение
              .upload__btn
                  input(
                    type="file"
                    @change="handleFileChange"
                  ).form-add-item__input-file
                  button(
                    type="button"
                    v-model="editedWork.photo"
                  ).btn.btn__primary Загрузить
        .work-add__right.form-add-item
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Название
              input(
                v-model="editedWork.title"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Ссылка
              input(
                v-model="editedWork.link"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Описание
              textarea(
                v-model="editedWork.description"
              ).form-add-item__input.form-add-item__textarea
          .form-add-item__row
            .form-add-item__col
              label.form-add-item__label Добавление тега
              input(
                v-model="editedWork.techs"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .tags.work-add__tags
                ul.tags__list
                  li.tags__item 
                    span.tags__text html
                    button.btn.btn__secondary.btn__del-tag
                  li.tags__item 
                    span.tags__text css
                    button.btn.btn__secondary.btn__del-tag
                  li.tags__item 
                    span.tags__text javaascript
                    button.btn.btn__secondary.btn__del-tag
          .form-add-item__btns
              button(
                type="button"
                @click="workBlockVisibleOn = false"
              ).btn.btn__secondary.btn__cancel Отменить
              button(
                type="submit"
                ).btn.btn__primary Изменить
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: 'ls-admin-work-add',
  components: {},
  props: {
    work: {
      type: Object,
      default: () => {},
      required: true,
    },
    editedWork: {
      type: Object,
      default: () => {},
      required: true, 
    },
    workBlockVisibleOn: {
      type: Boolean,
      default: false,
      required: true,
    },
    editWorkOn: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    async handleFileChange(event) {
      this.work.photo = event.target.files[0];  
    },
    async addNewWork(work) {
      try {
        const formData = new FormData;

        formData.append("title", this.work.title);
        formData.append("techs", this.work.techs);
        formData.append("photo", this.work.photo);
        formData.append("link", this.work.link);
        formData.append("description", this.work.description);
        
        await this.addWork(formData);

        this.work.title = "";
        this.work.techs = "";
        this.work.photo = "";
        this.work.link = "";
        this.work.description = "";
      } catch (error) {
        console.log(error);
      }
    },
    async editCurrentWork() {
      try {
      console.log(this.editWorkOn);
        
        await this.editWork(this.editedWork);
        
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  }
}
</script>

<style lang="" scoped></style>
