import { NextResponse } from "next/server";
import Chapters from "@/app/models/chapters";
import Books from "@/app/models/books";
import { connectDB } from "@/app/lib/connectionDb";
import mongoose from "mongoose";
import book1 from "../../../../Books/40_Shah_Waliullah_Dehlawi/eng-40ShahDehlawi.json";
import book2 from "../../../../Books/40_an_Nawawi/eng-40Nawai.json";
import book3 from "../../../../Books/40_Hadith_Qudsi/eng-qudsi.json";
import book4 from "../../../../Books/Jami_At_Tirmidhi/eng-tirmidi.json";
import book5 from "../../../../Books/Muwatta_Malik/eng-malik.json";
import book6 from "../../../../Books/Sahih_al_Bukhari/eng-bukhari.json";
import book7 from "../../../../Books/Sahih_Muslim/eng-sMuslim.json";
import book8 from "../../../../Books/Sunan_Abu_Dawud/eng-abuDawood.json";
import book9 from "../../../../Books/Sunan_an_Nasai/eng-nasai.json";
import book10 from "../../../../Books/Sunan_Ibn_Majah/eng-ibnMaja.json";

export const GET = async () => {
  const allBooks = [
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
    book8,
    book9,
    book10,
  ];
  try {
    await connectDB();
    // for(let book of allBooks){
    //     saveBookToDB(book)
    // }
    return NextResponse.json("Hello");
  } catch (error) {}
};

function saveBookToDB(bookData) {
  const { name, description, sections, section_details } = bookData.metadata;

  const book_id = createBook(name, description);
  console.log("New Book Created - ", book_id);
  for (const [key, value] of Object.entries(sections)) {
    console.log(`Key: ${key}, Value: ${value}`);
    const section_detail = section_details[key];
    const { hadithnumber_first, hadithnumber_last } = section_detail;
    const chapter_title = createChapter(
      book_id,
      key,
      value,
      hadithnumber_first,
      hadithnumber_last
    );
    console.log("Created chapter - ", chapter_title);
  }
}

async function createBook(name, description) {
  console.log("Creating Book - ", name);
  const newBook = await Books.create({
    name: name,
    description: description,
  });

  return newBook.id;
}

async function createChapter(
  book_id,
  chapter_number,
  title,
  hadith_start,
  hadith_end
) {
  console.log(book_id);
  console.log(
    "Creating chapter number - ",
    chapter_number,
    " with title - ",
    title
  );
  const new_book_id = await book_id;
  console.log(new_book_id);
  console.log("Hadees start number = ", hadith_start);
  console.log("Hadees last number= ", hadith_end);
  const newChapter = await Chapters.create({
    book_id: new_book_id,
    chapter_number: chapter_number,
    title: title,
    hadith_start: hadith_start,
    hadith_end: hadith_end,
  });
  return newChapter.title;
}
