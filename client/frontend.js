const baseURL = `http://localhost:4000/api/`;
const moviesContainer = document.querySelector("#movies-container");

//compliments
document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

//fortune
document.getElementById("fortune").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

//Cipher code
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const form = document.forms[0];
const output = document.getElementById("output");
form.addEventListener("submit", (event) => {
  axios.post(`http://localhost:4000/api/Cipher/`).then(function (response) {
    // const data = response.data;
  });
  event.preventDefault();
  output.innerHTML = [...form.plaintext.value]
    .map((char) => encrypt(char))
    .join("");
});

const encrypt = (char) => {
  const shift = Number(form.shift.value);
  if (alphabet.includes(char.toUpperCase())) {
    const position = alphabet.indexOf(char.toUpperCase());
    const newPosition = (position + shift) % 26;
    return alphabet[newPosition];
  } else {
    return char;
  }
};

//login code
const userContainer = document.querySelector("#user-info");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

const login = (body) =>
  axios
    .post(`${baseURL}/login`, body)
    .then((res) => {
      createUserCard(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert("Uh oh. Your request did not work.");
    });
const register = (body) =>
  axios
    .post(`${baseURL}/register`, body)
    .then((res) => {
      createUserCard(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert("Uh oh. Your request did not work.");
    });

function loginSubmitHandler(e) {
  e.preventDefault();

  let username = document.querySelector("#login-username");
  let password = document.querySelector("#login-password");

  let bodyObj = {
    username: username.value,
    password: password.value,
  };

  login(bodyObj);

  username.value = "";
  password.value = "";
}

function registerSubmitHandler(e) {
  e.preventDefault();

  let username = document.querySelector("#register-username");
  let email = document.querySelector("#register-email");
  let firstName = document.querySelector("#register-firstName");
  let lastName = document.querySelector("#register-lastName");
  let password = document.querySelector("#register-password");
  let password2 = document.querySelector("#register-password-2");

  if (password.value !== password2.value) {
    alert("Your passwords need to match.");
    return;
  }

  let bodyObj = {
    username: username.value,
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
  };

  register(bodyObj);

  username.value = "";
  email.value = "";
  firstName.value = "";
  lastName.value = "";
  password.value = "";
  password2.value = "";
}

function createUserCard(data) {
  userContainer.innerHTML = "";
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  userCard.innerHTML = `<p class="username">Username: ${data.username}</p>
    <p class="email">Email: ${data.email}</p>
    <p class="first-name">First Name: ${data.firstName}</p>
    <p class="last-name">Last Name: ${data.lastName}</p>
    `;

  userContainer.appendChild(userCard);
}

loginForm.addEventListener("submit", loginSubmitHandler);
registerForm.addEventListener("submit", registerSubmitHandler);
