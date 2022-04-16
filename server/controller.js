const bcrypt = require("bcryptjs");
const users = [];
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

module.exports = {
  login(req, res) {
    const { username, password } = req.body;

    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        const authenticated = bcrypt.compareSync(
          password,
          users[i].passwordHash
        );
        if (authenticated) {
          let userToReturn = { ...user[i] };
          delete userToReturn.passwordHash;
          res.status(200).send(users[i]);
        }
      }
    }
    res.status(400).send("User not found.");
  },

  register(req, res) {
    const { username, email, fistname, lastname, password } = req.body;
    const salt = bcrypt.genSaltSync(5);
    const passwordHash = bcrypt.hashSync(password, salt);
    let user = {
      username,
      email,
      fistname,
      lastname,
      passwordHash,
    };
    users.push(user);
    let userToReturn = { ...user };
    delete userToReturn.passwordHash;
    console.log("Registering User");
    console.log(passwordHash);
    res.status(200).send(req.body);
  },

  decode: (char, output) => {
    const shift = Number(output);
    if (alphabet.includes(char.toUpperCase())) {
      const position = alphabet.indexOf(char.toUpperCase());
      const newPosition = (position - shift) % 26;
      return alphabet[newPosition];
    } else {
      return char;
    }
  },
};
