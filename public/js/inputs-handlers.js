const inputs = document.querySelectorAll('.buy-product__input');
const selectField = document.querySelector(".select-field");


const inputHandler = (evt) => {
    console.log(evt.target);
    const targetElement = evt.target;
    targetElement.classList.remove('invalid-input-style');
    targetElement.labels[0].classList.remove('invalid-label-style');
    targetElement.setCustomValidity('');
    console.log(targetElement.validity.valid);
    if (targetElement.value !== '') {
        targetElement.labels[0].classList.remove('display-none');
        return;
    }
    targetElement.labels[0].classList.add('display-none');
}

for (item of inputs) {
    if (item.value !== '') {
        item.labels[0].classList.remove('display-none');
    }
    if (item.classList.contains('select-input') || item.matches('[id="number"]')) {
        continue;
    }
    item.addEventListener('input', inputHandler);
}
