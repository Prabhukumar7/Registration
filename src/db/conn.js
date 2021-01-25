const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/registration", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection to database succesful..");
  })
  .catch((e) => {
    console.log("not  connected");
  });
