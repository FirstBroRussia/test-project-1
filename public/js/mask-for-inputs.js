import IMask from 'imask';

var phoneNumberInputElement = document.getElementById('number');
var maskOptions = {
    mask: '+7(000)000-00-00',
} 

var emailInputElement = document.getElementById('email');
var maskOptions2 = {    
    mask:function (value) {
                if(/^[a-z0-9_\.-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
                    return true;
                if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
                    return true;
                return false;
                    }
} 

var mask = new IMask(phoneNumberInputElement, maskOptions);
var mask2 = new IMask(emailInputElement, maskOptions2);

mask.on('accept', () => {
    const labelToInput = mask.el.input.labels[0];
    if (mask.value !== '') {
        labelToInput.classList.remove('display-none');
        return;
    }
    labelToInput.classList.add('display-none');
});
