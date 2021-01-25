const mongoose = require("mongoose");
// const validator = require("validator");

const empSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  //   age: {
  //     type: Number,
  //     required: true,
  //   },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Register = new mongoose.model("Registers", empSchema);
module.exports = Register;
