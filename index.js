const form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = form.elements["phone"].value;
  const genValue = document.querySelector('input[name="gender"]:checked').value;
  const relationValue = document.querySelector(
    'input[name="relationship_status"]:checked'
  ).value;
  const occValue = document.querySelector(
    'input[name="occupation"]:checked'
  ).value;

  const address = document.getElementById("address").value;

  const userData = {
    name,
    email,
    password,
    phone,
    genValue,
    relationValue,
    occValue,
    address,
  };
  console.log(userData);
});

// const form = document.querySelector('#signup-form');
