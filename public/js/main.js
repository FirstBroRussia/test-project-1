import "../less/styles.less";

let isHidden = true;
let currentSelectedItem = null;

const selectField = document.querySelector(".select-field");
const inputElement = document.querySelector(".input");
const listElement = document.querySelector(".list");

selectField.addEventListener("click", (evt) => {
  if (isHidden) {
    isHidden = !isHidden;
    console.log(listElement);
    listElement.classList.remove('display-none');
  } else {
    isHidden = !isHidden;
    listElement.classList.add('display-none');
  }
});

listElement.addEventListener("click", (evt) => {
  const targetElement = evt.target.closest(".item");
  if (targetElement) {
    const valueTargetElement =
      targetElement.querySelector(".value").textContent;
    inputElement.value = valueTargetElement;
    textContentTargetElement = targetElement.innerText;
    selectField.textContent = textContentTargetElement;
    selectField.classList.add("selected-text");
    if (currentSelectedItem !== null) {
      currentSelectedItem.classList.remove("selected-text");
    }
    currentSelectedItem = targetElement;
    targetElement.classList.add("selected-text");
    isHidden = !isHidden;
    listElement.classList.add('display-none');
  }
});
