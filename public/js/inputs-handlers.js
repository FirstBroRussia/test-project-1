const inputs = document.querySelectorAll('.buy-product__input');


const inputHandler = (evt) => {
    const targetElement = evt.target;
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
