const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRouter= require ("./routes/userRoute")
app.use(express.json());
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected successfully");
    app.listen(process.env.PORT || 5000, (err) => {
      if (err) console.log(err);
      console.log("runnung successfully at PORT , ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

  app.use(userRouter);