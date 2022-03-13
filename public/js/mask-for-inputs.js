import IMask from 'imask';

var phoneNumberInputElement = document.getElementById('number');
var maskOptions = {
    mask: '+7(000)000-00-00',
} 

var phoneNumberMask = new IMask(phoneNumberInputElement, maskOptions);

phoneNumberMask.on('accept', () => {
    phoneNumberMask.el.input.setCustomValidity('');
    const labelToInput = phoneNumberMask.el.input.labels[0];
    phoneNumberMask.el.input.classList.remove('invalid-input-style');
    labelToInput.classList.remove('invalid-label-style');
    if (phoneNumberMask.value !== '') {
        labelToInput.classList.remove('display-none');
        return;
    }
    labelToInput.classList.add('display-none');
});
