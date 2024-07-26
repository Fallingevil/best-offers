document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.querySelector("#fa-cart-shopping");
  const xmarkIcon = document.querySelector(".fa-xmark");
  const basketSection = document.querySelector(".basket-hidden");

  cartIcon.addEventListener("click", () => {
    basketSection.classList.remove("basket-hidden");
    basketSection.classList.add("basket");
  });

  xmarkIcon.addEventListener("click", () => {
    basketSection.classList.remove("basket");
    basketSection.classList.add("basket-hidden");
  });
});

// -------

const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const numberInput = document.getElementById("numberInput");

function updateMinusButton() {
  if (numberInput.value <= 0) {
    numberInput.value = "";
    minusButton.classList.add("disabled");
  } else {
    minusButton.classList.remove("disabled");
  }
}

minusButton.addEventListener("click", () => {
  if (numberInput.value > 0) {
    numberInput.value--;
    updateMinusButton();
  }
});

plusButton.addEventListener("click", () => {
  numberInput.value++;
  updateMinusButton();
});

numberInput.addEventListener("input", () => {
  if (numberInput.value < 0) {
    numberInput.value = 0;
  }
  updateMinusButton();
});

// Initialize the minus button state
updateMinusButton();
