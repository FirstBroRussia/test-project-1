let isHidden = true;
let currentSelectedItem = null;

const selectInputField = document.querySelector(".select-field");
const inputElement = document.querySelector(".select-input");
const listElement = document.querySelector(".select-list");

selectInputField.addEventListener("click", (evt) => {
  selectInputField.classList.remove('invalid-input-style');
  if (isHidden) {
    isHidden = !isHidden;
    selectInputField.classList.remove("vector-down");
    selectInputField.classList.add("vector-up");
    listElement.classList.remove("display-none");
    listElement.classList.add("list");
  } else {
    isHidden = !isHidden;
    selectInputField.classList.remove("vector-up");
    selectInputField.classList.add("vector-down");
    listElement.classList.remove("list");
    listElement.classList.add("display-none");
  }
});

listElement.addEventListener("click", (evt) => {
  const targetElement = evt.target.closest(".item");
  if (targetElement) {
    const valueTargetElement = targetElement.querySelector(".value").textContent;
    inputElement.value = valueTargetElement;
    inputElement.labels[0].classList.remove('display-none');
    const textContentTargetElement = targetElement.innerText;
    selectInputField.textContent = textContentTargetElement;
    selectInputField.classList.add("selected-text");
    if (currentSelectedItem !== null) {
      currentSelectedItem.classList.remove("selected-text");
    }
    currentSelectedItem = targetElement;
    targetElement.classList.add("selected-text");
    isHidden = !isHidden;
    selectInputField.classList.remove("vector-up");
    selectInputField.classList.add("vector-down");
    listElement.classList.remove("list");
    listElement.classList.add("display-none");
  }
});

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.select-field') || evt.target.closest('.select-list')) {
    return;
  }
  if (!isHidden) {
    isHidden = !isHidden;
    selectInputField.classList.remove("vector-up");
    selectInputField.classList.add("vector-down");
    listElement.classList.remove("list");
    listElement.classList.add("display-none");
  }
  
});
