import { NextResponse } from "next/server";
import mongoDB from "@/app/lib/mongodb";

export const GET = async () => {
  try {
    const books = await mongoDB.collection("books").find({}).toArray();
    return NextResponse.json(books, { status: 200 });
  } catch (error) {
    console.log("ERROR GETTING BOOK: " + error);
  }
};
