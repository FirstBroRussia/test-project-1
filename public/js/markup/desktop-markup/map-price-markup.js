import {createNodeElement} from "../../utils/render-html-element";

const mapPriceMarkup = () => {
    return `
    <div class="map-total-price grid-area-map-total-price">
        
    </div>
    `;
}

const mapPriceNodeElement = createNodeElement(mapPriceMarkup);

export {mapPriceNodeElement};
