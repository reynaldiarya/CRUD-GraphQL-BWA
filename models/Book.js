import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    description: String,
    release_year: Number,
    genre: String,
  },
  {
    versionKey: false,
  }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;