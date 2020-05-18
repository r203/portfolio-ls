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
            const deliveryForm = document.querySelector('#deliveryForm');
            
            var formData = new FormData(deliveryForm);
            formData.append("phone", "+71234567898");
            formData.append("to", "test@test.ru");
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(formData);
            xhr.addEventListener('load', ()=> {
                if(xhr.response.status) {
                    var reviewText = xhr.response.message;
                    alert(reviewText);
                    deliveryForm.reset();
                } else {
                    reviewText = xhr.response.message;
                    alert(reviewText);
                };
            })
          }
        });
    }
  },
});