const loginSection = document.querySelector(".login");
const forgotPasswordSection = document.querySelector(".forgot-password");

const forgotPasswordLink = document.querySelector("#forgot-password-link");
const backToLoginLink = document.querySelector("#back-to-login");

forgotPasswordLink.addEventListener("click", (event) => {
  event.preventDefault();
  loginSection.classList.add("hidden");
  forgotPasswordSection.classList.remove("hidden");
});

backToLoginLink.addEventListener("click", (event) => {
  event.preventDefault();
  forgotPasswordSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
});
