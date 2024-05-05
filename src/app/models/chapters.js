import mongoose from "mongoose";
import { Schema, models, } from "mongoose";

const chapterSchema = new Schema(
  {
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      
    },
    chapter_number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    hadith_start: {
      type: Number,
      required: false,
    },
    hadith_end: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Chapters = models.chapters || mongoose.model('chapters', chapterSchema)
export default Chapters;
