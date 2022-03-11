let isHidden = true;
let currentSelectedItem = null;

const selectField = document.querySelector(".select-field");
const inputElement = document.querySelector(".select-input");
const listElement = document.querySelector(".select-list");

selectField.addEventListener("click", (evt) => {
  if (isHidden) {
    isHidden = !isHidden;
    selectField.classList.remove("vector-down");
    selectField.classList.add("vector-up");
    listElement.classList.remove("display-none");
    listElement.classList.add("list");
  } else {
    isHidden = !isHidden;
    selectField.classList.remove("vector-up");
    selectField.classList.add("vector-down");
    listElement.classList.remove("list");
    listElement.classList.add("display-none");
  }
});

listElement.addEventListener("click", (evt) => {
  const targetElement = evt.target.closest(".item");
  if (targetElement) {
    const valueTargetElement =
      targetElement.querySelector(".value").textContent;
    inputElement.value = valueTargetElement;
    const textContentTargetElement = targetElement.innerText;
    selectField.textContent = textContentTargetElement;
    selectField.classList.add("selected-text");
    if (currentSelectedItem !== null) {
      currentSelectedItem.classList.remove("selected-text");
    }
    currentSelectedItem = targetElement;
    targetElement.classList.add("selected-text");
    isHidden = !isHidden;
    selectField.classList.remove("vector-up");
    selectField.classList.add("vector-down");
    listElement.classList.remove("list");
    listElement.classList.add("display-none");
  }
});
