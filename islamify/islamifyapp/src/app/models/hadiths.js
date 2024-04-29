import { Schema, models } from "mongoose";
import mongoose from "mongoose";

const hadithSchema = new Schema(
  {
    chapter_ref: {
      type: Object,
      required: true,
    },
    book_ref: {
      type: Object,
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
