const express = require("express");
const cors = require("cors");
const port = 4000;
const app = express();

const { login, register, decode, encrypt } = require("./controller");

app.post(`/api/login`, login);
app.post(`/api/register`, register);

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
    "A friend is a present you give yourself.",
    "A golden egg of opportunity falls into your lap this month.",
    "A faithful friend is a strong defense.",
    "A hunch is creativity trying to tell you something.",
    "A lifetime friend shall soon be made.",
  ];

  //random fortune
  let randomFortuneIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomFortuneIndex];

  res.status(200).send(randomFortune);
});

app.post(`/api/Cipher/`, (req, res) => {
  const charTwo = req.body.char;
  const shiftValueTwo = req.body.shiftValue;
  const sentTwo = [...charTwo]
    .map((charTwo) => encrypt(charTwo, shiftValueTwo))
    .join("");

  res.status(200).send(sentTwo);
});
app.post(`/api/decode/`, (req, res) => {
  const char = req.body.char;
  const shiftValue = req.body.shiftValue;
  const sent = [...char].map((char) => decode(char, shiftValue)).join("");
  res.status(200).send(sent);
});

app.listen(port, () => console.log("Server running on 4000"));
