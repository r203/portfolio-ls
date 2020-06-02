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
          label.form-add-item__label-file
            .upload
              input(
                type="file"
                @change="handleFileChange"
                ).form-add-item__input-file
              .upload__desc Перетащите либо загрузите изображение
              .upload__btn
                .message(:class="{error: validation.hasError('work.photo')}") {{ validation.firstError('work.photo') }}
                .btn.btn__primary Загрузить
        .work-add__right.form-add-item
          .form-add-item__row
            .form-add-item__col
              .message(:class="{error: validation.hasError('work.title')}") {{ validation.firstError('work.title') }}
              label.form-add-item__label Название
              input(
                v-model="work.title"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .message(:class="{error: validation.hasError('work.link')}") {{ validation.firstError('work.link') }}
              label.form-add-item__label Ссылка
              input(
                v-model="work.link"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .message(:class="{error: validation.hasError('work.description')}") {{ validation.firstError('work.description') }}
              label.form-add-item__label Описание
              textarea(
                v-model="work.description"
              ).form-add-item__input.form-add-item__textarea
          .form-add-item__row
            .form-add-item__col
              .message(:class="{error: validation.hasError('work.techs')}") {{ validation.firstError('work.techs') }}
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
          label.form-add-item__label-file
            .upload
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
              .message(:class="{error: validation.hasError('editedWork.title')}") {{ validation.firstError('editedWork.title') }}
              label.form-add-item__label Название
              input(
                v-model="editedWork.title"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .message(:class="{error: validation.hasError('editedWork.link')}") {{ validation.firstError('editedWork.link') }}
              label.form-add-item__label Ссылка
              input(
                v-model="editedWork.link"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .message(:class="{error: validation.hasError('editedWork.description')}") {{ validation.firstError('editedWork.description') }}
              label.form-add-item__label Описание
              textarea(
                v-model="editedWork.description"
              ).form-add-item__input.form-add-item__textarea
          .form-add-item__row
            .form-add-item__col
              .message(:class="{error: validation.hasError('editedWork.techs')}") {{ validation.firstError('editedWork.techs') }}
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
  name: 'ls-admin-work-add',
  components: {
    tooltip,
  },
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
    return {
      tooltips: {
        header: "",
        visibleTooltip: false,
        isSuccess: false,
        isError: false,
      },
    }
  },
  validators: {
    'work.title': function (value) {
      return Validator.value(value).required('Это поле обязательное');
    },
    'work.link': function (value) {
      return Validator.value(value).required('Это поле обязательное');
    },
    'work.description': function (value) {
      return Validator.value(value).required('Это поле обязательное');
    },
    'work.techs': function (value) {
      return Validator.value(value).required('Это поле обязательное');
    },
    'work.photo': function (value) {
      return Validator.value(value).required('Это поле обязательное');
    },
    // 'editedWork.title': function (value) {
    //   return Validator.value(value).required('Это поле обязательное');
    // },
    // 'editedWork.link': function (value) {
    //   return Validator.value(value).required('Это поле обязательное');
    // },
    // 'editedWork.description': function (value) {
    //   return Validator.value(value).required('Это поле обязательное');
    // },
    // 'editedWork.techs': function (value) {
    //   return Validator.value(value).required('Это поле обязательное');
    // },
    // 'editedWork.photo': function (value) {
    //   return Validator.value(value).required('Это поле обязательное');
    // },
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    async handleFileChange(event) {
      this.work.photo = event.target.files[0];  
    },
    async addNewWork(work) {
      if (await this.$validate()){
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

          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Работа добавлена"
        } catch (error) {
          console.log(error);
        }
      }
    },
    async editCurrentWork() {
      // if (await this.$validate()){
        try {
      console.log("123")

            await this.editWork(this.editedWork);

              this.tooltips.visibleTooltip = true; 
              this.tooltips.isSuccess = true;
              this.tooltips.header = "Успешно"
              this.tooltips.message = "Работа изменена"
          } catch (error) {
            console.log(error);
          } finally {
        }
      // }
    },
  }
}
</script>

<style lang="scss">
</style>
