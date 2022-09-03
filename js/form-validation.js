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

form.addEventListener('submit', function(event) {
    event.preventDefault();
    removeValidation();
    checkFieldsOnEmpty();
});














// 
// const btn = document.querySelector('.submit');
// const firstName = document.querySelector('.first-name');
// // const nameError = document.querySelector('.firstNameError');
// const lastName = document.querySelector('.last-name');
// const surnameError = document.querySelector('.lastNameError');
// const street = document.querySelector('.street');
// const streetError = document.querySelector('.streetError');
// const number = document.querySelector('.number');
// const numberError = document.querySelector('.numberError')
// const zip = document.querySelector('.zip');
// const zipError = document.querySelector('.zipError');
// const city = document.querySelector('.city');
// const cityError = document.querySelector('.cityError')
// const mail = document.querySelector('.e-mail')
// const mailError = document.querySelector('.mailError');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('clicked on submit');
//     console.log('First Name:', firstName.value);
//     console.log('Last Name:', lastName.value);
//     console.log('Street:', street.value);
//     console.log('Number:', number.value);
//     console.log('Zip:', zip.value);
//     console.log('City:', city.value);
//     console.log('E-Mail:', mail.value);
// })
// if (firstName.value === ''){
//     console.log('First Name can not be blank');

//     let error = document.createElement('div');
//     error.className = 'error'
//     error.style.color = 'red'
//     error.innerHTML = 'First Name can not be blank'

// }