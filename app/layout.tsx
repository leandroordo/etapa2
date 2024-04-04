import type { Metadata } from "next";
import "./styles/global.scss";
import Header from "../components/header/header";
import Footer from "@/components/footer/footer";
import StoreProvider from "./store/StoreProvider";
import {
  getCart,
  clearCart,
  removeProduct,
  incrementProductQuantity,
} from "@/api/cart";
import ToastProvider from "@/components/toast/toastProvider";

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

  const removeProductAction = async (productId: number) => {
    "use server";
    return await removeProduct(productId);
  };

  const incrementProductQuantityAction = async (productId: number) => {
    "use server";
    return await incrementProductQuantity(productId, 1);
  };

  const decrementProductQuantityAction = async (productId: number) => {
    "use server";
    return await incrementProductQuantity(productId, -1);
  };

  return (
    <html lang="en">
      <body>
        <StoreProvider cart={cart}>
          <Header
            clearCartAction={clearCartAction}
            removeProductAction={removeProductAction}
            incrementProductQuantityAction={incrementProductQuantityAction}
            decrementProductQuantityAction={decrementProductQuantityAction}
          ></Header>
          <ToastProvider>{children}</ToastProvider>
          <Footer></Footer>
        </StoreProvider>
      </body>
    </html>
  );
}
