async function sendVerificationCode() {
  const email = document.getElementById("email").value;
  const response = await fetch("http://localhost:3000/send-verification-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (response.ok) {
    alert("Verification code sent to your email");
  } else {
    alert("Failed to send verification code");
  }
}

async function verifyEmailCode() {
  const email = document.getElementById("email").value;
  const code = document.getElementById("email-verification").value;
  const response = await fetch("http://localhost:3000/verify-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });

  if (response.ok) {
    alert("Email verified successfully");
  } else {
    alert("Invalid verification code");
  }
}

async function createAccount() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const response = await fetch("http://localhost:3000/create-account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    alert("Account created successfully");
  } else {
    alert("Failed to create account");
  }
}

document
  .getElementById("send-code")
  .addEventListener("click", sendVerificationCode);
document
  .getElementById("email-verification")
  .addEventListener("blur", verifyEmailCode);
document.getElementById("create-acc").addEventListener("click", createAccount);
