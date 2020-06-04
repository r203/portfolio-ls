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
              label.form-add-item__label Добавление тега через пробел
              input(
                v-model="work.techs"
                @input="tagCreate"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .tags.work-add__tags
                ul(
                  v-if="tagsArray.length"
                ).tags__list
                  li(
                    v-for="tag in tagsArray"
                  ).tags__item 
                    span.tags__text {{tag}}
                    button.btn.btn__secondary.btn__del-tag
          .form-add-item__btns
              button(
                type="button"
                @click="workBlockVisibleOFF"
              ).btn.btn__secondary.btn__cancel Отменить
              button(
                type="submit"
                :disabled="disabledBTN"
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
              label.form-add-item__label Изменение тега
              input(
                v-model="editedWork.techs"
                @input="tagEdit"
              ).form-add-item__input
          .form-add-item__row
            .form-add-item__col
              .tags.work-add__tags
                ul.tags__list
                  li(
                    v-for="tag in editedWork.tags"
                  ).tags__item 
                    span.tags__text {{tag}}
                    button.btn.btn__secondary.btn__del-tag
          .form-add-item__btns
              button(
                type="button"
                @click="workBlockVisibleOFF"
              ).btn.btn__secondary.btn__cancel Отменить
              button(
                type="submit"
                :disabled="disabledBTN"
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
      disabledBTN: false,
      tagsArray: [],
      tagsEditArray: [],
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
        this.disabledBTN = true;
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
            this.tooltips.visibleTooltip = true; 
            this.tooltips.isError = true;
            this.tooltips.header = "Ошибка"
            this.tooltips.message = error;
            
        } finally {
          this.disabledBTN = false;
        }
      }
    },
    async editCurrentWork() {
        this.disabledBTN = true;
        try {
            await this.editWork(this.editedWork);

            this.tooltips.visibleTooltip = true; 
            this.tooltips.isSuccess = true;
            this.tooltips.header = "Успешно"
            this.tooltips.message = "Работа изменена"

          } catch (error) {
            this.tooltips.visibleTooltip = true; 
            this.tooltips.isError = true;
            this.tooltips.header = "Ошибка"
            this.tooltips.message = error;

          } finally {
              this.disabledBTN = false;
        }
    },
    workBlockVisibleOFF() {
      this.$emit('workBlockVisibleOFF')
    },
    tagCreate(e) {
      if(event.data === " ") {
        this.tagsArray.push(this.work.techs);
        this.work.techs = "";
      };
    },
    tagEdit() {
      this.tagsEditArray = this.editedWork.techs.split(" ");
      this.tagsEditArray.pop();
      console.log(this.tagsEditArray)
    }
  }
}
</script>

<style lang="scss">
</style>
