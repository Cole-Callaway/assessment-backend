const express = require("express");
const cors = require("cors");
const port = 4000;
const app = express();
const { createPic } = require("./controller");

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
  res.status(200).send();
});

app.post(`/api/picture`, createPic);

app.listen(port, () => console.log("Server running on 4000"));
