import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/connectionDb";
import Hadith from "@/app/models/hadiths";
import Books from "@/app/models/books";
import Chapters from "@/app/models/chapters";

export const GET = async () => {
  try {
    await connectDB();

    const hadith = await Hadith.find()
      .limit(1000)
      .populate("chapter_ref.chapter_id")
      .populate("book_ref.book_id");
    if (hadith) {
      const updatedHadith = hadith.map(async (doc) => {
        const book = doc.book_ref.book_id;
        const foundBook = await Books.findById(book);
        const foundBook_name = foundBook ? foundBook.name : "Unknown Book";

        const chapter = doc.chapter_ref.chapter_id;
        const foundChapter = await Chapters.findById(chapter);
        const foundChapter_name = foundChapter
          ? foundChapter.title
          : "Unknown Chapter";
        const foundChapter_number = foundChapter
          ? foundChapter.chapter_number
          : "Unknown Chapter Number";

        return {
          ...doc.toObject(),
          foundBook_name,
          foundChapter_name,
          foundChapter_number,
        };
      });
      const resolvedHadith = await Promise.all(updatedHadith);
      return NextResponse.json(resolvedHadith, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "error updating hadith data" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
  }
};
