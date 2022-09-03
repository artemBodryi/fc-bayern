const form = document.querySelector('.form');
const fields = document.querySelectorAll('.field');

const removeValidation = function () {
    const errors = form.querySelectorAll('.error')

    for (let i = 0; i < errors.length; i++) {
      errors[i].remove()
    }
};

const checkFieldsOnEmpty = function (){
    for(let i = 0; i < fields.length; i++){
        if (!fields[i].value){
            console.log('field can not be blank', fields[i]);
            const error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.innerHTML = ' Field is could not be blank';
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
};