import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { connectDB } from "./lib/connectionDb";
import saveBookToDB from "../../Books/40_Shah_Waliullah_Dehlawi/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IslamifyPlus",
  description: "Generated by create next app",
};

export default function  RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex">
          <div className=" w-fit lg:w-1/5 z-10 absolute left-0">
            <Navbar />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
