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

const createMovie = (body) =>
  axios.post(baseURL, body).then(moviesCallback).catch(errCallback);
