import {PositionMarkup, renderNodeElement, replaceNodeElementWithoutParent} from './utils/render-html-element.js';
import {desktopHeaderMenuNodeElement} from './markup/desktop-markup/desktop-header-menu-markup.js';
import {adaptiveHeaderMenuNodeElement} from './markup/adaptive-markup/adaptive-header-menu-markup.js';
import {mapPriceNodeElement} from './markup/desktop-markup/map-price-markup.js';
import {mapCanvasNodeElement} from './markup/desktop-markup/map-canvas-markup.js';
import {totalPriceNodeElement} from './markup/desktop-markup/total-price-markup.js';

const startWidthViewport = window.innerWidth;

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');

const addressInput = document.querySelector('.address-wrap');
const submitButton = document.querySelector('.product-item__form-submit');



let is1110pxViewPort;

const renderMapPriceToForm = () => {
  renderNodeElement(submitButton, PositionMarkup.BEFORE_BEGIN, totalPriceNodeElement);
  renderNodeElement(addressInput, PositionMarkup.AFTER_END, mapCanvasNodeElement);
};

const renderMapPriceToMain = () => {
    mapCanvasNodeElement.append(totalPriceNodeElement);
    mapPriceNodeElement.append(mapCanvasNodeElement);
    renderNodeElement(mainElement, PositionMarkup.BEFORE_END, mapPriceNodeElement);
};



const adaptiveActionsThenViewportLess1110px = () => {
    replaceNodeElementWithoutParent(adaptiveHeaderMenuNodeElement, desktopHeaderMenuNodeElement);
    renderMapPriceToForm();

};

const adaptiveActionsThenViewport1110px = () => {
    replaceNodeElementWithoutParent(desktopHeaderMenuNodeElement, adaptiveHeaderMenuNodeElement);
    renderMapPriceToMain();
};


if (startWidthViewport < 1110) {
    is1110pxViewPort = false;
    renderNodeElement(headerElement, PositionMarkup.AFTER_BEGIN, adaptiveHeaderMenuNodeElement);
    renderMapPriceToForm();

} else if (startWidthViewport >= 1110) {
    is1110pxViewPort = true;
    renderNodeElement(headerElement, PositionMarkup.AFTER_BEGIN, desktopHeaderMenuNodeElement);
    renderMapPriceToMain();

}



window.addEventListener('resize', (evt) => {
    const currentViewportWidth = evt.target.innerWidth;

    if (currentViewportWidth < 1110 & is1110pxViewPort) {
        is1110pxViewPort = false;
        adaptiveActionsThenViewportLess1110px();
        
    } else if (currentViewportWidth >= 1110 && !is1110pxViewPort) {
        is1110pxViewPort = true;
        adaptiveActionsThenViewport1110px();
        
    }
});

