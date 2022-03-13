const NUMBER_VALUE_LENGTH = 16;
const phoneNumberInputElement = document.querySelector('#number');
const form = document.querySelector('.buy-product__form');

const checkValidity = () => {
    console.log(phoneNumberInputElement.value.length);
   if (phoneNumberInputElement.value.length !== NUMBER_VALUE_LENGTH) {
    console.log('aaa');
    phoneNumberInputElement.setCustomValidity('Введите номер полностью');
    // phoneNumberInputElement.reportValidity();
}

    
    return true;
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    checkValidity();
})

