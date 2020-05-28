<template lang="pug">
  .section-welcome
    .login
      form(@submit.prevent="authorizationLogin").login__form
        .login__col
          h2.login__title-text Авторизация
        .login__col
            label.login__label Логин
            input(
              type="text"
              id="login"
              v-model="user.name"
              ).login__input
        .login__col
            label.login__label Пароль
            input(
              type="password"
              id="pass"
              v-model="user.password"
              ).login__input
        .login__btns
          button(type="submit").btn__submit-login Отправить
        .login__btns-close
          button(type="submit").btn__submit-close
</template>

<script>

// import { mapActions } from "vuex";
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
  mounted() {},
  beforeDestroy() {},
  methods: {
    // ...mapActions("user", ["loginUser"]),
    async authorizationLogin() {
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
</script>

<style lang="postcss">
@import "../../../styles/mixins.pcss";

@import "../../styles/login.pcss";

</style>
