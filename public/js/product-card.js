const ONE_VALUE = 1;
const countsField = document.querySelectorAll('.product-item__item-count-wrap');
const productCardList = document.querySelector('.selected-products__list');

const countsFieldClickHandler = (evt) => {
    evt.preventDefault();
    const parentElement = evt.target.closest('.product-item__item-count-wrap');
    const countSpanElement = parentElement.querySelector('span');

    if (evt.target.closest('.product-item__item-count__reduce')) {
      const currentCount = +countSpanElement.textContent;
      if (currentCount === ONE_VALUE) {
          return;
      }
      countSpanElement.textContent = currentCount - ONE_VALUE;
      return;
    }
    if (evt.target.closest('.product-item__item-count__increase')) {
        const currentCount = +countSpanElement.textContent;
        countSpanElement.textContent = currentCount + ONE_VALUE;
      }
}

const deleteButtonClickHandler = (evt) => {
  evt.preventDefault();
  if (!evt.target.closest('.product-item__delete-button')) {
    return;
  }
  const currentCard = evt.target.closest('.selected-products__item');
  currentCard.remove();
}

productCardList.addEventListener('click', deleteButtonClickHandler);

countsField.forEach( (item) => {
    item.addEventListener('click', countsFieldClickHandler);
});
