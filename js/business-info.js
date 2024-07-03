document.addEventListener("DOMContentLoaded", () => {
  const legalFormInput = document.querySelector("input[placeholder='choose']");
  const registeredNameInput = document.querySelector(
    "input[placeholder='Enter name']"
  );
  const countryInput = document.querySelector("input[placeholder='Country']");
  const addressInput = document.querySelector(
    "input[placeholder='Specific address']"
  );
  const fieldActivityInput = document.querySelectorAll(
    "input[placeholder='choose']"
  )[1];
  const vatNumberInput = document.querySelector(
    "input[placeholder='0000 0000 0000 0000']"
  );
  const taxInfoInput = document.querySelectorAll(
    "input[placeholder='0000 0000 0000 0000']"
  )[1];
  const fileInput = document.querySelector("#docpicker");
  const createAccButton = document.querySelector("#create-acc");

  function showError(input, message) {
    const parent = input.parentElement;
    const errorDisplay = parent.querySelector(".error");
    const errorIcon = parent.querySelector(".error-icon");
    const successIcon = parent.querySelector(".success-icon");

    if (errorDisplay) {
      errorDisplay.textContent = message;
    }
    if (errorIcon) {
      errorIcon.classList.remove("hidden");
    }
    if (successIcon) {
      successIcon.classList.add("hidden");
    }
  }

  function showSuccess(input) {
    const parent = input.parentElement;
    const errorDisplay = parent.querySelector(".error");
    const errorIcon = parent.querySelector(".error-icon");
    const successIcon = parent.querySelector(".success-icon");

    if (errorDisplay) {
      errorDisplay.textContent = "";
    }
    if (errorIcon) {
      errorIcon.classList.add("hidden");
    }
    if (successIcon) {
      successIcon.classList.remove("hidden");
    }
  }

  function validateNotEmpty(input) {
    return input.value.trim() !== "";
  }

  function validateVatNumber(vatNumber) {
    const re = /^\d{4} \d{4} \d{4} \d{4}$/;
    return re.test(vatNumber);
  }

  function validateFile(input) {
    const file = input.files[0];
    const validTypes = ["application/pdf", "image/jpeg", "image/png"];
    const maxSize = 10 * 1024 * 1024; // 10 MB
    return file && validTypes.includes(file.type) && file.size <= maxSize;
  }

  legalFormInput.addEventListener("input", () => {
    if (validateNotEmpty(legalFormInput)) {
      showSuccess(legalFormInput);
    } else {
      showError(legalFormInput, "This field is required");
    }
  });

  registeredNameInput.addEventListener("input", () => {
    if (validateNotEmpty(registeredNameInput)) {
      showSuccess(registeredNameInput);
    } else {
      showError(registeredNameInput, "This field is required");
    }
  });

  countryInput.addEventListener("input", () => {
    if (validateNotEmpty(countryInput)) {
      showSuccess(countryInput);
    } else {
      showError(countryInput, "This field is required");
    }
  });

  addressInput.addEventListener("input", () => {
    if (validateNotEmpty(addressInput)) {
      showSuccess(addressInput);
    } else {
      showError(addressInput, "This field is required");
    }
  });

  fieldActivityInput.addEventListener("input", () => {
    if (validateNotEmpty(fieldActivityInput)) {
      showSuccess(fieldActivityInput);
    } else {
      showError(fieldActivityInput, "This field is required");
    }
  });

  vatNumberInput.addEventListener("input", () => {
    if (validateVatNumber(vatNumberInput.value)) {
      showSuccess(vatNumberInput);
    } else {
      showError(vatNumberInput, "Invalid VAT number format");
    }
  });

  taxInfoInput.addEventListener("input", () => {
    if (validateVatNumber(taxInfoInput.value)) {
      showSuccess(taxInfoInput);
    } else {
      showError(taxInfoInput, "Invalid tax info format");
    }
  });

  fileInput.addEventListener("change", () => {
    if (validateFile(fileInput)) {
      showSuccess(fileInput);
    } else {
      showError(fileInput, "Invalid file format or size exceeds 10MB");
    }
  });

  createAccButton.addEventListener("click", (e) => {
    e.preventDefault();

    const isLegalFormValid = validateNotEmpty(legalFormInput);
    const isRegisteredNameValid = validateNotEmpty(registeredNameInput);
    const isCountryValid = validateNotEmpty(countryInput);
    const isAddressValid = validateNotEmpty(addressInput);
    const isFieldActivityValid = validateNotEmpty(fieldActivityInput);
    const isVatNumberValid = validateVatNumber(vatNumberInput.value);
    const isTaxInfoValid = validateVatNumber(taxInfoInput.value);
    const isFileValid = validateFile(fileInput);

    let isValid = true;

    if (!isLegalFormValid) {
      showError(legalFormInput, "This field is required");
      isValid = false;
    } else {
      showSuccess(legalFormInput);
    }

    if (!isRegisteredNameValid) {
      showError(registeredNameInput, "This field is required");
      isValid = false;
    } else {
      showSuccess(registeredNameInput);
    }

    if (!isCountryValid) {
      showError(countryInput, "This field is required");
      isValid = false;
    } else {
      showSuccess(countryInput);
    }

    if (!isAddressValid) {
      showError(addressInput, "This field is required");
      isValid = false;
    } else {
      showSuccess(addressInput);
    }

    if (!isFieldActivityValid) {
      showError(fieldActivityInput, "This field is required");
      isValid = false;
    } else {
      showSuccess(fieldActivityInput);
    }

    if (!isVatNumberValid) {
      showError(vatNumberInput, "Invalid VAT number format");
      isValid = false;
    } else {
      showSuccess(vatNumberInput);
    }

    if (!isTaxInfoValid) {
      showError(taxInfoInput, "Invalid tax info format");
      isValid = false;
    } else {
      showSuccess(taxInfoInput);
    }

    if (!isFileValid) {
      showError(fileInput, "Invalid file format or size exceeds 10MB");
      isValid = false;
    } else {
      showSuccess(fileInput);
    }

    if (isValid) {
      alert("Form submitted successfully!");
      document.querySelector(".create-acc").submit();
    }
  });
});
