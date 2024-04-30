import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/connectionDb";
import Hadith from "@/app/models/hadiths";
import Books from "@/app/models/books";
import Chapters from "@/app/models/chapters";

export const GET = async () => {
  try {
    await connectDB();

    const hadith = await Hadith.aggregate([{ $sample: { size: 1 } }]);
    if (hadith) {
      console.log(hadith[0]);
    
        //console.log(doc);
        const book = hadith[0].book_ref.book_id;
        const foundBook = await Books.findById(book);
        const foundBook_name = foundBook ? foundBook.name : "Unknown Book";
        //console.log(foundBook_name);

        const chapter = hadith[0].chapter_ref.chapter_id;
        const foundChapter = await Chapters.findById(chapter);
        const foundChapter_name = foundChapter
          ? foundChapter.title
          : "Unknown Chapter";
        const foundChapter_number = foundChapter
          ? foundChapter.chapter_number
          : "Unknown Chapter Number";
        //console.log(foundChapter_name);

        const resolvedHadith = {
          ...hadith[0],
          foundBook_name,
          foundChapter_name,
          foundChapter_number,
        };
        //console.log(resolvedHadith);
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
