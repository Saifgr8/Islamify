import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import mongoDB from "@/app/lib/mongodb";

export const GET = async () => {
  try {
    let hadith = await mongoDB
      .collection("hadiths")
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();

    if (hadith) {
      hadith = hadith[0];
      const book = hadith.book_ref.book_id;
      const foundBook = await mongoDB.collection("books").findOne({
        _id: new ObjectId(book),
      });
      const foundBook_name = foundBook ? foundBook.name : "Unknown Book";

      const chapter = hadith.chapter_ref.chapter_id;
      const foundChapter = await mongoDB.collection("chapters").findOne({
        _id: new ObjectId(chapter),
      });
      const foundChapter_name = foundChapter
        ? foundChapter.title
        : "Unknown Chapter";
      const foundChapter_number = foundChapter
        ? foundChapter.chapter_number
        : "Unknown Chapter Number";

      const resolvedHadith = {
        ...hadith,
        foundBook_name,
        foundChapter_name,
        foundChapter_number,
      };
      return NextResponse.json(resolvedHadith, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "error getting hadith data" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "error getting hadith data" },
      { status: 500 }
    );
  }
};
