const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/register");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("index");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cPassword = req.body.confirmPassword;

    if (password === cPassword) {
      const registeremployee = new Register({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        // age: req.body.age,
        password: password,
        confirmPassword: cPassword,
      });
      const registered = await registeremployee.save();
      res.status(201).render("index");
    } else {
      res.send("password incorrect");
    }
  } catch (e) {
    res.status(401).send(error);
  }
});

app.listen(port, () => {
  console.log(`your server is running at localhost:${port}`);
});
