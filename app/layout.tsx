import type { Metadata } from "next";
import "./styles/main.scss";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";
import StoreProvider from "./store/StoreProvider";
import { getCart, clearCart } from "@/api/cart";

export const metadata: Metadata = {
  title: "Juguetería Cósmica",
  description: "Juguetería Cósmica. Una juguetería única.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cart = await getCart();

  const clearCartAction = async () => {
    "use server";
    return await clearCart();
  };

  return (
    <html lang="en">
      <body>
        <StoreProvider cart={cart}>
          <Header clearCartAction={clearCartAction}></Header>
          {children}
          <Footer></Footer>
        </StoreProvider>
      </body>
    </html>
  );
}
