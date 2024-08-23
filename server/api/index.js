const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require('cookie-parser')

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database Conencted"))
  .catch(() => console.log("Database not Connected", err));

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use("/", require("./routes/AuthRoutes"));
app.use("/", require('./routes/upload'))
app.use("/", require('./routes/stats'))

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
