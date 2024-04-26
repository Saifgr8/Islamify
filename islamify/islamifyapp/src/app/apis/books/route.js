
import mongoose from "mongoose";
import { connectDB } from "@/app/lib/connectionDb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const {bookName, bookDesc} = await req.json()
        console.log(bookName, bookDesc)
        await connectDB();
        return NextResponse.json({message: "API good"}, {status: 201})
    } catch (error) {
        console.log(error)
    }
} 