import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true,
  },
  name: String,
  price: Number,
  address: {
    type: String,
    required: true,
  },
  number:{
 type:Number,
 require:true,
  },
  paymentMethod: {
    type: String,
    default: "COD",
  },
  status: {
    type: String,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);

