import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator';
const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

new Vue({
  el: "#form-feedback-component",
  template: "#form-feedback-container",
  data: function () {
    return {
      name: '',
      email: '',
      textarea: ''
    };
  },
  validators: {
    name: function (value) {
      return Validator.value(value).required('Это поле обязательное').regex('^[A-Za-zа-яА-Я ]*$', 'В имени не должно быть цифр');
      
    },
    email: function (value) {
      return Validator.value(value).required('Это поле обязательное').email('Введите адрес электронной почты');
      
    },
    textarea: function (value) {
      return Validator.value(value).minLength(15, "Нужно написать побольше текста");
      
    }
  },
  methods: {
    submit: function () {
      this.$validate()
        .then(function (success) {
          if (success) {
            alert('Validation succeeded!');
          }
        });
    }
  },
});