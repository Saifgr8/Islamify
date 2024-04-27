import mongoose from "mongoose";
import { Schema, models } from "mongoose";

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Books = models.Books || mongoose.model("Books", bookSchema);
export default Books;
