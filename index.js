import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import mongoose from "mongoose";
import bookRoute from "./route/bookRoute.js"
import Userauth from "./route/Userauth.js"
import contactRoute from "./route/contactRoute.js"
import orderRoute from "./route/orderRoute.js"
const app = express()
dotenv.config();
app.use(cors());
app.use(express.json());
const port = process.env.PORT||5000
const URI=process.env.MongoDBURI

const connectToMongo = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectToMongo();
app.use("/book",bookRoute)
app.use('/api/Userauth',Userauth) 
app.use('/api/contact', contactRoute);
app.use("/api/orders", orderRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
