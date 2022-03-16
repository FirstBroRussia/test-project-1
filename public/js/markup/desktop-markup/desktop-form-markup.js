import {createNodeElement} from "../../utils/render-html-element";

const desktopFormMarkup = () => {
 return `
 <div class="buy-product-form-wrap grid-area-form-wrap">
        <form class="buy-product__form" action="#">
          <div class="buy-product__user-data">
            <div class="buy-product__element-wrap">
              <label class="input-label display-none" for="address">Адрес</label>
              <input
                class="buy-product__input input-address"
                id="address"
                name="address"
                type="text"
                value="г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152"
                placeholder="Адрес доставки"
                required
                />
            </div>
            <div class="buy-product__inputs-wrap">
              <div class="buy-product__element-wrap">
                <label class="input-label display-none" for="name">Имя</label>
                <input
                  class="buy-product__input input-name"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ваше Имя"
                  required
                  />
              </div>
              <div class="buy-product__element-wrap">
                <label class="input-label display-none" for="number">Ваш номер</label>
                <input
                  class="buy-product__input input-phonenumber"
                  name="number"
                  id="number"
                  type="tel"
                  placeholder="Ваш Телефон"
                  required
                  />
              </div>
            </div>
            <div class="buy-product__element-wrap">
              <label class="input-label display-none" for="email">Email</label>
              <input
                class="buy-product__input input-email"
                name="email"
                id="email"
                type="email"
                placeholder="Ваше Email"
                required
                />
            </div>
            <div class="buy-product__element-wrap">
              <label class="input-label display-none" for="packaging">Тип
                упаковки</label>
              <input
                class="buy-product__input select-input display-none"
                type="text"
                name="packaging"
                id="packaging"
                value=""
                required
                />
              <div class="select-field vector-down">Выберите тип упаковки</div>
              <div class="select-list-wrap">
                <ul class="select-list display-none">
                  <li class="item">
                    Без упаковки
                    <span class="value visibility-hidden">no-pack</span>
                  </li>
                  <li class="item">
                    Стандартная
                    <span class="value visibility-hidden">standart</span>
                  </li>
                  <li class="item">
                    Подарочная
                    <span class="value visibility-hidden">souvenir</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="buy-product__element-wrap">
              <label class="input-label display-none" for="comment">Комментарий</label>
              <textarea
                class="buy-product__input input-comment"
                name="comment"
                id="comment"
                type="text"
                placeholder="Введите комментарий"></textarea>
            </div>
          </div>

          <div class="buy-product__selected-products">
            <h2 class="selected-products__title">Выбранные товары:</h2>
            <div class="selected-products__list-submit-wrap">
              <ul class="selected-products__list">
                <li class="selected-products__item">
                  <img
                    class="product-item__image grid-area-img"
                    src="img/product-img.jpg"
                    alt="Фото товара"
                    />
                  <div class="product-item__info-wrap grid-area-info">
                    <h3 class="product-item__title">Товар 1</h3>
                    <p class="product-item__description">
                      Описание товара, которое может быть длинным
                    </p>
                    <div class="product-item__item-count">
                      <div class="product-item__item-count-wrap">
                        <span class="product-item__item-count__count order-2">1</span>
                        <button class="product-item__item-count__reduce
                          order-1">
                          <img class="icon-minus" src="./img/icon/minus.svg" />
                        </button>
                        <button
                          class="product-item__item-count__increase order-3">
                          <img class="icon-plus" src="./img/icon/plus.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="product-item__price-wrap grid-area-price">
                    <p class="product-item__price">1090 руб.</p>
                    <button class="product-item__delete-button">Удалить</button>
                  </div>
                </li>
                <li class="selected-products__item">
                  <img
                    class="product-item__image grid-area-img"
                    src="img/product-img.jpg"
                    alt="Фото товара"
                    />
                  <div class="product-item__info-wrap grid-area-info">
                    <h3 class="product-item__title">Товар 2</h3>
                    <p class="product-item__description">
                      Описание товара, которое может быть очень-очень длинным
                    </p>
                    <div class="product-item__item-count">
                      <div class="product-item__item-count-wrap">
                        <span class="product-item__item-count__count order-2">1</span>
                        <button class="product-item__item-count__reduce
                          order-1">
                          <img class="icon-minus" src="./img/icon/minus.svg" />
                        </button>
                        <button
                          class="product-item__item-count__increase order-3">
                          <img class="icon-plus" src="./img/icon/plus.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="product-item__price-wrap grid-area-price">
                    <p class="product-item__price">1090 руб.</p>
                    <button class="product-item__delete-button">Удалить</button>
                  </div>
                </li>
                <li class="selected-products__item">
                  <img
                    class="product-item__image grid-area-img"
                    src="img/product-img.jpg"
                    alt="Фото товара"
                    />
                  <div class="product-item__info-wrap grid-area-info">
                    <h3 class="product-item__title">Товар 3</h3>
                    <p class="product-item__description">
                      Короткое описание товара
                    </p>
                    <div class="product-item__item-count">
                      <div class="product-item__item-count-wrap">
                        <span class="product-item__item-count__count order-2">1</span>
                        <button class="product-item__item-count__reduce
                          order-1">
                          <img class="icon-minus" src="./img/icon/minus.svg" />
                        </button>
                        <button
                          class="product-item__item-count__increase order-3">
                          <img class="icon-plus" src="./img/icon/plus.svg" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="product-item__price-wrap grid-area-price">
                    <p class="product-item__price">2000 руб.</p>
                    <button class="product-item__delete-button">Удалить</button>
                  </div>
                </li>
              </ul>
              <button class="product-item__form-submit" type="button">
                Купить
              </button>
            </div>
          </div>
        </form>
      </div>
 `;
};

const desktopFormNodeElement = createNodeElement(desktopFormMarkup);

export {desktopFormNodeElement};
