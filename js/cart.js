document.addEventListener("DOMContentLoaded", () => {
  // Profile toggle functionality
  const profileButton = document.querySelector("#profile-button");
  const userInfoBox = document.querySelector(".user-info-box");
  const closeUserInfoButton = document.querySelector("#close");

  profileButton.addEventListener("click", () => {
    userInfoBox.classList.toggle("hidden");
  });

  closeUserInfoButton.addEventListener("click", () => {
    userInfoBox.classList.add("hidden");
  });

  // Cart toggle functionality
  const cartButton = document.querySelector("#fa-cart-shopping");
  const basketSection = document.querySelector(".basket-hidden");
  const closeBasketButton = document.querySelector("#close-basket");

  cartButton.addEventListener("click", () => {
    basketSection.classList.remove("basket-hidden");
    basketSection.classList.add("basket");
  });

  closeBasketButton.addEventListener("click", () => {
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
