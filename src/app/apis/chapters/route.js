import { NextResponse } from "next/server";
import Chapters from "@/app/models/chapters";
import { connectDB } from "@/app/lib/connectionDb";
import mongoose from "mongoose";

export const POST = async (res) => {
  try {
    const { book_id, chapter_number, title, hadith_start, hadith_end } =
      await res.json();
    await connectDB();

    const existingBook = await Chapters.findOne({ title: title });
    if (existingBook) {
      return NextResponse.json(
        { message: "Dupliate book/chapters" },
        { status: 400 }
      );
    }
    const objectId = new mongoose.Types.ObjectId(book_id);
    //console.log(id);
    await Chapters.create({
      book_id: objectId,
      chapter_number: chapter_number,
      title: title,
      hadith_start: hadith_start,
      hadith_end: hadith_end,
    });
    return NextResponse.json(
      { message: "Created chapter for" + title },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
};
