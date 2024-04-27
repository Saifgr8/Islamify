import mongoose from "mongoose";

import { NextResponse } from "next/server";
import Books from "@/app/models/books";

export const POST = async (req) => {
  try {
    const { bookName, bookDesc,  } = await req.json();
    //console.log(bookName, bookDesc);

    const existingBook = await Books.findOne({ BookName: bookName });
    if (existingBook) {
      return NextResponse.json(
        { message: "Book already exist" },
        { status: 400 }
      );
    }
    
    await Books.create({
      BookName: bookName,
      description : bookDesc,
    });
    return NextResponse.json({ message: bookName + "added" }, { status: 201 });
  } catch (error) {
    console.log(error.message);
  }
};
export const GET = async () => {
  try {
    return NextResponse.json("Hello I AM ANAM")
  } catch (error) {
    console.log(error)
  }
}
