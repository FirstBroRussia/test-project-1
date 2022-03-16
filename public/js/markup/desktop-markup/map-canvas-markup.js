import {createNodeElement} from "../../utils/render-html-element";

const mapCanvasMarkup = () => {
return `
<div class="map-canvas">

</div>
`;
};

const mapCanvasNodeElement = createNodeElement(mapCanvasMarkup);

export {mapCanvasNodeElement};
