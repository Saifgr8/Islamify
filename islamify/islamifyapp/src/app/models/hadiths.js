import { Schema, models } from "mongoose";
import mongoose from "mongoose";

const ChapterRefSchema = new Schema({
  chapter_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  chapter_hadith_number: {
    type: String,
    required: true,
  },
});

const BookRefSchema = new Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  book_hadith_number: {
    type: Number,
    required: true,
  },
});

const hadithSchema = new Schema(
  {
    chapter_ref: {
      type: ChapterRefSchema,
      required: true,
    },
    book_ref: {
      type: BookRefSchema,
      required: true,
    },
    text: {
      type: Object,
      required: true,
    },
    grades: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const Hadith = models.hadiths || mongoose.model("hadiths", hadithSchema);
export default Hadith;
