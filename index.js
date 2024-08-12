import express from 'express';
import "dotenv/config";
import authRouter from './routes/auth-routes.js';
import serviceRouter from "./routes/service-routes.js";
import bodyParser from 'body-parser';
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const connectToDb = async () => {
  await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
  }
  
  connectToDb().then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use(authRouter);
app.use(serviceRouter);

app.listen(PORT, () => {
  console.log("Listening on port:" + PORT);
});