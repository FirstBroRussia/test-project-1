const ZERO_VALUE = 0;
const NUMBER_VALUE_LENGTH = 16;
const emailRegExp = /^.+@.+\..+$/gim;

const submitButton = document.querySelector(".product-item__form-submit");
const nameInputElement = document.querySelector("#name");
const phoneNumberInputElement = document.querySelector("#number");
const emailInputElement = document.querySelector("#email");
const selectField = document.querySelector(".select-field");
const packInputElement = document.querySelector('#packaging');

const form = document.querySelector(".buy-product__form");
const InvalidMessage = {
  EMPTY: "Поле не должно быть пустым",
  NUMBER: "Введите номер полностью",
  EMAIL: "Введите валидный Email",
  PACK: "Выберите тип упаковки",
};

const actionsToInvalidField = (invalidElement, invalidMessage) => {
  invalidElement.classList.add("invalid-input-style");
  invalidElement.labels[0].classList.add("invalid-label-style");
  invalidElement.setCustomValidity(invalidMessage);
  invalidElement.reportValidity();
  isValid = invalidElement.validity.valid;
};

const checkValidity = () => {
  let isValid = true;

  if (nameInputElement.value.length === ZERO_VALUE) {
    actionsToInvalidField(nameInputElement, InvalidMessage.EMPTY);
    return;
  }
  if (phoneNumberInputElement.value.length === ZERO_VALUE) {
    actionsToInvalidField(phoneNumberInputElement, InvalidMessage.EMPTY);
    return;
  }
  if (phoneNumberInputElement.value.length !== NUMBER_VALUE_LENGTH) {
    actionsToInvalidField(phoneNumberInputElement, InvalidMessage.NUMBER);
    return;
  }
  if (emailInputElement.value.length === ZERO_VALUE) {
    actionsToInvalidField(emailInputElement, InvalidMessage.EMPTY);
    return;
  }
  
  const isEmailValid = emailRegExp.test(emailInputElement.value);
  if (!isEmailValid) {
    actionsToInvalidField(emailInputElement, InvalidMessage.EMAIL);
    emailInputElement.selectionStart = emailInputElement.value.length;
    return;
  }
  if (packInputElement.value.length === ZERO_VALUE) {
    console.log("aaa");
    selectField.classList.add('invalid-input-style');

    isValid = false;
  }

  return isValid;
};

submitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  const isValidity = checkValidity();
  if (isValidity) {
    console.log("SUCCESS");
    form.submit();
  }
});
