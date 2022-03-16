const form = document.querySelector(".buy-product__form");

const actionsToFormSubmit = () => {
    const selectedProducts = form.querySelectorAll('.selected-products__item');
    const formData = new FormData(form);
    let formDataObject = {};
    let productsList = [];

    for (let [name, value] of formData) {
        console.log(`${name} = ${value}`);
        formDataObject = {
            ...formDataObject,
            [name]: value
        };
    }

    selectedProducts.forEach( (product) => {
        const productName = product.getAttribute('id');
        const productCount = +product.querySelector('.product-item__item-count__count').textContent;
        formData.append(productName, productCount);
        productsList.push({
            title: productName,
            count: productCount
        });
    });

    formDataObject = {
        ...formDataObject,
        products: productsList
    };

    for (let [name, value] of formData) {
        console.log(`${name} = ${value}`);
    }
    console.log('\n ------- И отдельный собранный объект который тоже можно отправить, структура его более удобна для восприятия лично для меня');
    console.log(formDataObject);
};

export {actionsToFormSubmit};
