const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.SECRET;

const generateToken = (info) => {
  return jwt.sign(
    {
      //information for encoding
      username: info.username,
      email: info.email,
    },
    SECRET,
    {
      //options
      expiresIn: "5 minutes",
    }
  );
};

module.exports = {
  createToken: async (req, res) => {
    console.log(req.body);
    let token = generateToken(req.body);
    res.status(200).send(token);
  },

  validateToken: async (req, res) => {
    let token = req.get("Authorization");
    let valid = jw.verify(token, SECRET);

    if (valid) {
      res.status(200).send("Success");
    } else {
      res.status(400).send("Invalid...");
    }
    console.log(req.body);
  },
};
