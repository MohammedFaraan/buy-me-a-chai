import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthSessionWrapper from "@/components/auth/AuthSessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuyMeAChai - Platform to fund developers",
  description:
    "A Platform which allows users to support the developers they love by buying them a chai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "min-h-screen flex flex-col bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        }
      >
        <AuthSessionWrapper>
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </AuthSessionWrapper>
      </body>
    </html>
  );
}
