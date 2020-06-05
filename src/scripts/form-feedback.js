import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator';
import tooltip from "../admin/components/tooltip";

const Validator = SimpleVueValidation.Validator;
Vue.use(SimpleVueValidation);

new Vue({
  el: "#form-feedback-component",
  template: "#form-feedback-container",
  components: {
    tooltip,
  },
  data: function () {
    return {
      name: '',
      email: '',
      textarea: '',
      tooltips: {
        header: "",
        visibleTooltip: false,
        isSuccess: false,
        isError: false,
      },
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
    submit: function (tooltips) {

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

                    tooltips.visibleTooltip = true; 
                    tooltips.isSuccess = true;
                    tooltips.header = "Успешно"
                    tooltips.message = reviewText;

                    deliveryForm.reset();

                } else {
                    reviewText = xhr.response.message;
                    
                    tooltips.visibleTooltip = true; 
                    tooltips.isError = true;
                    tooltips.header = "Ошибка"
                    tooltips.message = reviewText;
                };
            })
          }
        });
    }

  },
});