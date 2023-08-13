import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import BgVideo from "./components/bgVideo";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TSW First",
  description: "Welcome to Texas Southwest First Jurisdiction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="relative w-screen h-screen">
          <div className="p-5">
            <div className="mx-auto">
              <Nav />
            </div>
          </div>
          <div className="relative z-20 w-full h-full grid grid-cols-1">
            {children}
          </div>
          <BgVideo overlayColor="bg-purple-700" />
        </section>
        <div className="p-5 bg-purple-700">
          <div className="mx-auto">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
