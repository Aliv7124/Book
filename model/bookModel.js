import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  price: String,
  category: String,
  image:String,
  title: String
});
const Book=mongoose.model("Book",bookSchema)
export default Book;