import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();
const port = process.env.PORT || 4000;
const URI=process.env.MongoDBURI;
//connection to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("connected to mongoDB")
} catch (error) {
    console.log("error:",error)
}

app.use("/book",bookRoute)
app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})