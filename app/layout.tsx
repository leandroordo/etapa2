import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.scss";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Juguetería Cósmica",
  description: "Juguetería Cósmica. Una juguetería única.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
