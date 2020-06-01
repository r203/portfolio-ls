<template lang="pug">
  .ls-admin-about
    .container.about__container
      .about__title
        h2.about__title-text Блок "Обо мне"
        button(
          type="button"
          @click="blockVisibleOn = true"
        ).btn.btn__secondary.btn__add-group Добавить группу
      .about__content
        ul.about__group
          li(
            v-show="blockVisibleOn"
          ).group-about
            form(
              @submit.prevent="createNewCategory"
              ).group-about__title 
              .form-add-item.group-about__title-left
                .form-add-item__row
                  .form-add-item__col
                    .message(:class="{error: validation.hasError('category.title')}") {{ validation.firstError('category.title') }}
                    input(
                      v-model="category.title"
                      type="text"
                      placeholder="Название новой группы"
                      ).form-add-item__input
              .group-about__title-right 
                .group-about__btns
                  button(type="submit").btn.btn__secondary.btn__ok 
                  button(
                    type="button"
                    @click="resetForm()"
                  ).btn.btn__secondary.btn__erase
            .group-about__content
            .form-add-item.group-about-add
              .group-about-add__row
                button(
                  type="button"
                  @click="blockVisibleOn= false"
                ).btn.btn__secondary.btn__cancel Отменить

          li.group-about(
            v-for="cat in categories" 
            :key="cat.id"
            )
            ls-admin-group-about(
              @removeCurrentCategory="removeCurrentCategory"
              :category="cat"
            )

      tooltip(
        :tooltips="tooltips"
      )
</template>

<script>
import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

import { mapActions, mapState } from "vuex";
import tooltip from "../tooltip";

export default {
  name: 'ls-admin-about',
  components: {
    lsAdminGroupAbout: () => import("./ls-admin-group-about"),
    tooltip,
  },
  props: {},
  data() {
    return {
      category: {
        title: ""
      },
      tooltips: {
        header: "",
        visibleTooltip: false,
        isSuccess: false,
        isError: false,
      },
      blockVisibleOn: false,
    }
  },
  validators: {
    'category.title': function (value) {
      return Validator.value(value).required('Это поле обязательное');
      
    },
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.fetchCategories();
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories", "removeCategory"]),
    async createNewCategory() {
      if (await this.$validate()) {
        try {
          await this.addCategory(this.category.title);
          this.category.title = "";

          this.tooltips.visibleTooltip = true; 
          this.tooltips.isSuccess = true;
          this.tooltips.header = "Успешно"
          this.tooltips.message = "Категория добавлена"
          console.log(error.message);
          
        } catch (error) {
          // this.tooltips.visibleTooltip = true; 
          // this.tooltips.header = "Ошибка";
          // this.tooltips.message = error.message;
          // this.tooltips.isError = true;
        };}
    },
    async removeCurrentCategory(currentCategory) {
      try {
        await this.removeCategory(currentCategory);
      } catch (error) {
        alert(error.message);
      };
    },
    resetForm(){
      this.category.title = "";
    },
  }
}
</script>

<style lang="postcss" >
@import "../../../styles/mixins.pcss";

.about {
  margin-bottom: 60px;
  &__container {
    display: flex;
    flex-direction: column;
  }
  &__title {
    display: flex;
    margin-bottom: 60px;
    @include phones {
      flex-direction: column;
    }
    &-text {
      font-weight: 900;
      font-size: 21px;
      color: #414c63;
      @include phones {
        margin-bottom: 30px;
      }
    }
  }
  &__group {
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -30px;
  }
}

.group-about {
  display: flex;
  flex-direction: column;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  width: 50%;
  /* убери высоту как контент появится */
  height: 395px; 
  padding: 35px 30px;
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  @include phones {
    width: 100%;
  }
  &__title {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(31, 35, 45, .15);
    &-text {
      font-size: 18px;
      font-weight: 600;
      color: #414c63;
    }
    &-left {
      width: 70%;
    }
    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 30%;
    }
  }
  &__content {
    height: 100%;
    color: #414c63;
    padding: 30px 0;
    overflow-y: auto;
    max-height: 200px;
  }
  &__skills {
    &-item {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
  &__skill {
    &-list {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }
    &-name {
      width: 60%;
      margin-right: 10px;
    }
    &-percent {
      position: relative;
      width: 15%;
      &:after {
        content: '%';
        position: absolute;
        display: inline-flex;
        right: 0;
      }
    }
    &-btn {
      width: 25%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
  &-add {
    &__row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      // width: 80%;
      text-align: right;
      &:not(:last-child) {
        margin-right: 30px;
      }
    }
    &__skill {
      width: 50%;
      margin-right: 10px;
  
    }
    &__percent {
      width: 20%;
      margin-right: 30px;
    }
  }
  &__btns {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
}



</style>
