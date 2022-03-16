import {mapCanvasNodeElement} from './markup/desktop-markup/map-canvas-markup.js';

const addressInput = document.querySelector('#address');

let myMap = null;
let searchControl;

function initMap () {
    // Создание карты.
    myMap = new ymaps.Map(mapCanvasNodeElement, {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 10,
        controls: ['searchControl']
    },{
        searchControlProvider: 'yandex#search'
    });
}

ymaps.ready(initMap);

const intervalFn = setInterval( () => {
  if (myMap !== null) {
    clearInterval(intervalFn);
    searchControl = myMap.controls.get('searchControl');
    actions(addressInput.value);
  }
}, 100);

const actions = (value) => {
    const point = searchControl.search(value);
}

addressInput.addEventListener('input', () => {
    actions(addressInput.value);
});



