// import { NextResponse } from "next/server";
// import Chapters from "@/app/models/chapters";
// import Books from "@/app/models/books";
// import Hadith from "@/app/models/hadiths";
// import { connectDB } from "@/app/lib/connectionDb";
// import mongoose from "mongoose";
// import book1 from "../../../../Books/40_Shah_Waliullah_Dehlawi/eng-40ShahDehlawi.json";
// import book2 from "../../../../Books/40_an_Nawawi/eng-40Nawai.json";
// import book3 from "../../../../Books/40_Hadith_Qudsi/eng-qudsi.json";
// import book4 from "../../../../Books/Jami_At_Tirmidhi/eng-tirmidi.json";
// import book5 from "../../../../Books/Muwatta_Malik/eng-malik.json";
// import book6 from "../../../../Books/Sahih_al_Bukhari/eng-bukhari.json";
// import book7 from "../../../../Books/Sahih_Muslim/eng-sMuslim.json";
// import book8 from "../../../../Books/Sunan_Abu_Dawud/eng-abuDawood.json";
// import book9 from "../../../../Books/Sunan_an_Nasai/eng-nasai.json";
// import book10 from "../../../../Books/Sunan_Ibn_Majah/eng-ibnMaja.json";
// import book11 from "../../../../Books/40_Shah_Waliullah_Dehlawi/ara-40ShahDehlawi.json";
// import book12 from "../../../../Books/40_an_Nawawi/ara-40Nawai.json";
// import book13 from "../../../../Books/40_Hadith_Qudsi/ara-qudsi.json";
// import book14 from "../../../../Books/Muwatta_Malik/ara-malik.json";
// import book15 from "../../../../Books/Sahih_al_Bukhari/ara-bukhari.json";
// import book16 from "../../../../Books/Sahih_Muslim/ara-sMuslim.json";
// import book17 from "../../../../Books/Sunan_Abu_Dawud/ara-abuDawood.json";
// import book18 from "../../../../Books/Sunan_an_Nasai/ara-nasai.json";
// import book19 from "../../../../Books/Sunan_Ibn_Majah/ara-ibnMaja.json";
// import book20 from "../../../../Books/Jami_At_Tirmidhi/ara-tirmidi.json";
// import book21 from "../../../../Books/Jami_At_Tirmidhi/urdu-tirmidi.json";
// import book22 from "../../../../Books/Muwatta_Malik/urdu-malik.json";
// import book23 from "../../../../Books/Sahih_al_Bukhari/urdu-bukhari.json";
// import book24 from "../../../../Books/Sahih_Muslim/urdu-sMuslim.json";
// import book25 from "../../../../Books/Sunan_Abu_Dawud/urdu-abuDawood.json";
// import book26 from "../../../../Books/Sunan_an_Nasai/urdu-nasai.json";
// import book27 from "../../../../Books/Sunan_Ibn_Majah/urdu-ibnMaja.json";

// export const GET = async () => {
//   const engBooks = [
//     book1,
//     book2,
//     book3,
//     book4,
//     book5,
//     book6,
//     book7,
//     book8,
//     book9,
//     book10,
//   ];
//   const arabBooks = [
//     book11,
//     book12,
//     book13,
//     book14,
//     book15,
//     book16,
//     book17,
//     book18,
//     book19,
//     book20,
//   ];

//   const urduBooks = [book21, book22, book23, book24, book25, book26, book27];
//   try {
//     await connectDB();
//     for (let allBook of engBooks) {
//       await saveBookToDB(allBook);
//     }
//     for (let allBook of arabBooks) {
//       await updateTextLangDB(allBook);
//     }
//     for (let allBook of urduBooks) {
//       await updateTextLangUrduDB(allBook);
//     }

//     return NextResponse.json("Hello");
//   } catch (error) {}
// };

// async function saveBookToDB(allBook) {
//   try {
//     const { name, description, sections, section_details } = allBook.metadata;
//     const hadiths = allBook.hadiths;

//     const book_id = await createBook(name, description);
//     //console.log("New Book Created - ", book_id);

//     for (const [key, value] of Object.entries(sections)) {
//       //console.log(`Key: ${key}, Value: ${value}`);
//       const section_detail = section_details[key];
//       const { hadithnumber_first, hadithnumber_last } = section_detail;
//       const chapterId = await createChapter(
//         book_id,
//         key,
//         value,
//         hadithnumber_first,
//         hadithnumber_last
//       );

//       await prepareHadithCreation(chapterId, key, book_id, hadiths);
//     }
//   } catch (error) {
//     console.error("Error saving book to DB:", error);
//   }
// }

// async function createBook(name, description) {
//   try {
//     //console.log("Creating Book - ", name);
//     const existingBook = await Books.findOne({ name: name });
//     if (existingBook) {
//       return existingBook.id;
//     }
//     const newBook = await Books.create({
//       name: name,
//       description: description,
//     });
//     //console.log("New Book Created - ", newBook.id);
//     return newBook.id;
//   } catch (error) {
//     console.error("Error creating book:", error);
//     throw error; // Re-throw the error to propagate it up the call stack
//   }
// }

// async function createChapter(
//   book_id,
//   chapter_number,
//   title,
//   hadith_start,
//   hadith_end
// ) {
//   try {
//     //console.log("Book ID:", book_id);
//     //console.log("Hadith start number:", hadith_start);
//     //console.log("Hadith last number:", hadith_end);

//     const newChapter = await Chapters.create({
//       book_id: book_id,
//       chapter_number: chapter_number,
//       title: title,
//       hadith_start: hadith_start,
//       hadith_end: hadith_end,
//     });
//     //console.log("New Chapter Created - ", newChapter.id);
//     return newChapter.id;
//   } catch (error) {
//     console.error("Error creating chapter:", error);
//     throw error; // Re-throw the error to propagate it up the call stack
//   }
// }

// const prepareHadithCreation = async (
//   chapter_id,
//   chapter_num,
//   book_id,
//   hadiths
// ) => {
//   const filteredHadiths = hadiths.filter(
//     (h) => h.reference.book.toString() === chapter_num
//   );
//   const resolved_chapter_id = await chapter_id;
//   const resolved_book_id = await book_id;
//   if (filteredHadiths.length > 0) {
//     filteredHadiths.forEach(
//       async (hadith) =>
//         await createHadith(
//           resolved_book_id,
//           hadith.hadithnumber,
//           resolved_chapter_id,
//           hadith.reference.hadith,
//           hadith.text,
//           hadith.grades
//         )
//     );
//   }
//   //console.log(filteredHadiths);
//   console.log(
//     "Number of hadees in chapter num - ",
//     chapter_num,
//     " : ",
//     filteredHadiths.length
//   );
// };

// const createHadith = async (
//   book_id,
//   bookHadeesNumber,
//   chapter_id,
//   chapterHadithnumber,
//   text,
//   grades
// ) => {
//   try {
//     console.log(book_id, bookHadeesNumber, chapter_id, chapterHadithnumber);

//     // const resolved_chapter_id = await chapter_id;
//     // const resolved_book_id = await book_id;

//     const existingHadith = await Hadith.findOne({
//       "chapter_ref.chapter_id": chapter_id,
//       "book_ref.book_id": book_id,
//     });

//     if (existingHadith) {
//       await Chapters.updateOne({
//         "text.arabic": text,
//       });
//     }

//     const addedHadith = await Hadith.create({
//       chapter_ref: {
//         chapter_id: chapter_id,
//         chapter_hadith_number: chapterHadithnumber,
//       },
//       book_ref: {
//         book_id: book_id,
//         book_hadith_number: bookHadeesNumber,
//       },
//       text: {
//         english: text,
//         arabic: "",
//         urdu: "",
//       },
//       grades: grades,
//     });

//     console.log(
//       "Added Hadith Number:",
//       addedHadith.book_ref.book_hadith_number
//     );
//   } catch (error) {
//     console.error("Error creating Hadith:", error);
//     throw error; // Re-throw the error to propagate it up the call stack
//   }
// };

// const updateTextLangDB = async (book) => {
//   try {
//     const { name } = book.metadata;
//     //console.log("book name is: " + name);
//     let foundBook = await Books.findOne({ name: name }); //bookid
//     //console.log(foundBook);
//     const bookId = foundBook.id;
//     //console.log("Book id: " + bookId);

//     const hadiths = book.hadiths;
//     for (let indHadith of hadiths) {
//       const { hadithnumber, reference } = indHadith; //overall hadith
//       //console.log(hadithnumber);
//       const query = {
//         "book_ref.book_id": bookId,
//         "book_ref.book_hadith_number": hadithnumber,
//       };

//       const existingHadith = await Hadith.findOne(query);

//       if (!existingHadith) {
//         console.log("Could not find existing hadith");
//       }
//       //console.log(indHadith?.text);
//       existingHadith.text.arabic = indHadith?.text;
//       existingHadith.markModified("text");
//       const updatedHadith = await existingHadith.save();

//       console.log("Updated text for " + updatedHadith);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updateTextLangUrduDB = async (book) => {
//   try {
//     const { name } = book.metadata;
//     //console.log("book name is: " + name);
//     let foundBook = await Books.findOne({ name: name }); //bookid
//     //console.log(foundBook);
//     const bookId = foundBook.id;
//     //console.log("Book id: " + bookId);

//     const hadiths = book.hadiths;
//     for (let indHadith of hadiths) {
//       const { hadithnumber, reference } = indHadith; //overall hadith
//       //console.log(hadithnumber);
//       const query = {
//         "book_ref.book_id": bookId,
//         "book_ref.book_hadith_number": hadithnumber,
//       };

//       const existingHadith = await Hadith.findOne(query);

//       if (!existingHadith) {
//         console.log("Could not find existing hadith");
//       }
//       console.log(indHadith?.text);
//       existingHadith.text.urdu = indHadith?.text;
//       existingHadith.markModified("text");
//       const updatedHadith = await existingHadith.save();

//       console.log("Updated text for " + updatedHadith);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
