document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.querySelector("#email");
  const emailVerificationInput = document.querySelector("#email-verification");
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirmPassword");
  const sendCodeButton = document.querySelector("#send-code");
  const createAccButton = document.querySelector("#create-acc");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

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

  function validateEmailVerification(code) {
    return code.length === 5 && !isNaN(code);
  }

  function validatePasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
  }

  emailInput.addEventListener("input", () => {
    if (validateEmail(emailInput.value)) {
      showSuccess(emailInput);
    } else {
      showError(emailInput, "Invalid email format");
    }
  });

  emailVerificationInput.addEventListener("input", () => {
    if (validateEmailVerification(emailVerificationInput.value)) {
      showSuccess(emailVerificationInput);
    } else {
      showError(emailVerificationInput, "Verification code must be 5 digits");
    }
    console.log(showError);
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length > 0) {
      showSuccess(passwordInput);
    } else {
      showError(passwordInput, "Password is required");
    }
  });

  confirmPasswordInput.addEventListener("input", () => {
    if (
      validatePasswordMatch(passwordInput.value, confirmPasswordInput.value)
    ) {
      showSuccess(confirmPasswordInput);
    } else {
      showError(confirmPasswordInput, "Passwords do not match");
    }
  });

  sendCodeButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
      alert("Verification code sent to " + emailInput.value);
    } else {
      showError(emailInput, "Invalid email format");
    }
  });

  createAccButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission

    const emailValid = validateEmail(emailInput.value);
    const verificationValid = validateEmailVerification(
      emailVerificationInput.value
    );
    const password = passwordInput.value.trim(); // Trim to remove leading and trailing whitespace
    const confirmPassword = confirmPasswordInput.value.trim(); // Trim to remove leading and trailing whitespace

    let isValid = true;

    // Validate email
    if (!emailValid) {
      showError(emailInput, "Invalid email format");
      isValid = false;
    } else {
      showSuccess(emailInput);
    }

    // Validate email verification
    if (!verificationValid) {
      showError(emailVerificationInput, "Verification code must be 5 digits");
      isValid = false;
    } else {
      showSuccess(emailVerificationInput);
    }

    // Validate password
    if (password.length === 0) {
      showError(passwordInput, "Password is required");
      isValid = false;
    } else {
      showSuccess(passwordInput);
    }

    // Validate password match
    if (!validatePasswordMatch(password, confirmPassword)) {
      if (confirmPassword.length < 0) {
        showError(confirmPasswordInput, "Passwords do not match");
      }
      isValid = false;
    } else {
      showSuccess(confirmPasswordInput);
    }

    // If all validations pass, proceed with form submission
    if (isValid) {
      alert("Account created successfully!");
      document.getElementById("password-setup-form").submit();
    }
  });
});
