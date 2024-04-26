import mongoose from "mongoose";
import { Schema, models } from "mongoose";

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Books = models.books || mongoose.model('books', bookSchema);

export default Books;