import {createNodeElement} from "../../utils/render-html-element";

const adaptiveHeaderMenuMarkup = () => {
    return `
      <div class="adaptive-menu-block">
        <div class="first-menu-block order-1">
            <div class="menu-sandwich">
            <img class="icon-menu" src="img/icon/menu.svg" alt="icon menu" />
            </div>
            <div class="search-block">
                <img
                class="icon-search"
                src="img/icon/search.svg"
                alt="icon search"
                />
                <input class="input-search" type="search" placeholder="Поиск" />
            </div>
        </div>
        <a class="main-link order-2" href="#">
            <img class="logo" src="img/icon/logo.svg" alt="LOGO" />
        </a>
        <ul class="second-menu-block menu-block__list order-3">
            <li class="menu-block__item">
            <a class="menu-block__link" href="#todo">
                <img
                class="icon-profile"
                src="img/icon/profile.svg"
                alt="icon profile"
                />
            </a>
            </li>
            <li class="menu-block__item">
            <a class="menu-block__link" href="#todo">
                <img
                class="icon-favorite"
                src="img/icon/favorite.svg"
                alt="icon favorite"
                />
            </a>
            </li>
            <li class="menu-block__item">
            <a class="menu-block__link" href="#todo">
                <img
                class="icon-basket"
                src="img/icon/backet.svg"
                alt="icon basket"
                />
            </a>
            </li>
        </ul>
      </div>
      <div class="adaptive-navigation display-none">
      <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
            <a class="navigation__link" href="#"> Страница 1 </a>
            </li>
            <li class="navigation__item">
            <a class="navigation__link" href="#"> Страница 2 </a>
            </li>
            <li class="navigation__item">
            <a class="navigation__link" href="#"> Страница 3 </a>
            </li>
            <li class="navigation__item">
            <a class="navigation__link" href="#"> Страница 4 </a>
            </li>
            <li class="navigation__item">
            <a class="navigation__link" href="#"> Страница 5 </a>
            </li>
            <li class="navigation__item">
            <a class="navigation__link" href="#"> Страница 6 </a>
            </li>
        </ul>
      </nav>
      </div>
    `;
}

const adaptiveHeaderMenuNodeElement = createNodeElement(adaptiveHeaderMenuMarkup); 

export {adaptiveHeaderMenuNodeElement};