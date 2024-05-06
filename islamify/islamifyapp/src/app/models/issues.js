import { Schema, models } from "mongoose";
import mongoose from "mongoose";

const issueModal = new Schema(
  {
    hadith_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    book_name: {
      type: String,
      required: true,
    },
    book_hadith_number: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Issues = models.issues || mongoose.model("issues", issueModal);
