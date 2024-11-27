const userModel = require("../models/user.model");
const userService = require("../../services/user.service");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { firstname, lastname, email, password } = req.body;
const hashedPassword = await userService. userModel.hashedPassword(password);
//29:30

};
