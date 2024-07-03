document.addEventListener("DOMContentLoaded", () => {
  let currentLanguage = "en";
  const switchButton = document.getElementById("translateButton");
  const translatableElements = document.querySelectorAll("[data-en][data-ru]");

  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "ru" : "en";
    switchButton.innerText = currentLanguage === "en" ? "Rus" : "Eng";
    updateText();
  }

  function updateText() {
    translatableElements.forEach((el) => {
      el.textContent = el.dataset[currentLanguage];
    });
  }

  switchButton.addEventListener("click", toggleLanguage);
});
