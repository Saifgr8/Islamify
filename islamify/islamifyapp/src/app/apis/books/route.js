import mongoose from "mongoose";
import { connectDB } from "@/app/lib/connectionDb";
import { NextResponse } from "next/server";
import Books from "@/app/models/books";

export const GET = async () => {
  try {
    await connectDB();
    const books = await Books.find();
    return NextResponse.json(books, {status: 200});
  } catch (error) {
    console.log("ERROR GETTING BOOK: " + error);
  }
};
