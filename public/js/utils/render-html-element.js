const PositionMarkup = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
};

const createNodeElement = (htmlMarkup) => {
  const element = document.createElement('div');
  element.insertAdjacentHTML(PositionMarkup.BEFORE_END, htmlMarkup);
  const NodeElement = element.firstElementChild;
  element.remove();
  
  return NodeElement;
};

const renderNodeElement = (container, position, element) => {
  switch (position) {
    case 'beforebegin': return container.before(element);
    case 'afterbegin': return container.prepend(element);
    case 'beforeend': return container.append(element);
    case 'afterend': return container.after(element);
    default : throw new Error('Передайте валидное значение!');
  }
};

const replaceNodeElementWithoutParent = (newChildElement, oldChildElement) => {
  const oldNodeElement = oldChildElement.replaceWith(newChildElement);

  return oldNodeElement;
};

export {PositionMarkup, createNodeElement, renderNodeElement, replaceNodeElementWithoutParent};
