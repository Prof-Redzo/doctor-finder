import express from 'express';
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

const connectToDb = async () => {
  await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
  }
  
  connectToDb().then(() => console.log("Connected"))
  .catch((err) => console.log(err));
  
app.listen(PORT, () => {
  console.log("Listening on port:" + PORT);
});