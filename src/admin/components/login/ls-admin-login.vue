<template lang="pug">
  .section-welcome
    .login
      form(@submit.prevent="authorizationLogin").login__form
        .login__col
          h2.login__title-text Авторизация
        .login__col
            label.login__label Логин
            .message(:class="{error: validation.hasError('user.name')}") {{ validation.firstError('user.name') }}
            input(
              type="text"
              v-model="user.name"
              ).login__input
        .login__col
            label.login__label Пароль
            .message(:class="{error: validation.hasError('user.password')}") {{ validation.firstError('user.password') }}
            input(
              type="password"
              v-model="user.password"
              ).login__input
        .login__btns
          button(type="submit").btn__submit-login Отправить
        .login__btns-close
          button(type="submit").btn__submit-close
</template>

<script>
import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

import $axios from "../../requests"; 

export default {
  name: 'ls-admin-login',
  components: {},
  props: {},
  data() {
    return {
      user : {
        name: "",
        password: "",
      }
    }
  },
  validators: {
    'user.name': function (value) {
      return Validator.value(value).required('Это поле обязательное');
      
    },
    'user.password': function (value) {
      return Validator.value(value).required('Это поле обязательное');
      
    },
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    async authorizationLogin() {
      
      if (await this.$validate()) {
            try {
              const response = await $axios.post("/login",  this.user); 
              const token = response.data.token;
              localStorage.setItem("token", token);
              $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
              this.$router.replace("/");
            } catch (error) {
              console.log("no");
              
              alert(error.message);
            };
          }
      }
    }
}
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

@import "../../styles/login.pcss";

</style>
