import { connectDB } from "@/app/lib/connectionDb";
import { Issues } from "@/app/models/issues";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { id, book_name, book_hadith_number, email, problem } =
      await req.json();
    await connectDB();

    const resolved_id = await id;
    await Issues.create({
      hadith_id: resolved_id,
      book_name: book_name,
      book_hadith_number: book_hadith_number,
      email: email,
      problem: problem,
    });
    return NextResponse.json(
      { message: "Issue created by", email },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
};
