import {createNodeElement} from "../../utils/render-html-element";

const totalPriceMarkup = () => {
  return `
  <div class="total-price">
        Итого: <span class="total-price__summa">3790 руб.</span>
  </div>
  `;
};

const totalPriceNodeElement = createNodeElement(totalPriceMarkup);

export {totalPriceNodeElement};
