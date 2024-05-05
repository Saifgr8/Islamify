import { connectDB } from "@/app/lib/connectionDb";
import { NextResponse } from "next/server";
import Books from "@/app/models/books";
import databaseClient from "@/db/client";

export const GET = async () => {
  try {
    await connectDB();
    const client = await databaseClient;
    console.log("Connected to DB: " + client.isConnected());

    const books = await Books.find();
    return NextResponse.json(books, {status: 200});
  } catch (error) {
    console.log("ERROR GETTING BOOK: " + error);
  }
};
