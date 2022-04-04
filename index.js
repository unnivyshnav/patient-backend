const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const filesRoute = require("./routes/files");

app.use(cors());
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    autoIndex: true, //make this also true
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/api/files", filesRoute);

app.listen(process.env.PORT || 5000, () => console.log("server started"));
