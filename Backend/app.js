import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import router from "./routes/userRouter.js";    

//app.use(cors())

const app = express();
// Parse URL-encoded bodies (for form data)
//app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (for JSON data)
//app.use(bodyParser.json());

app.use(cors())
mongoose
  .connect("mongodb://127.0.0.1:27017/Form-DB", {})
  .then(() => {
    app.listen(4000, () => {
      console.log("Database connected successfully and running at 5000...");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

app.use(router);