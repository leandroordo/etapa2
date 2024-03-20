"use client";
import { type Cart } from "@/api/types";
import { setCart } from "@/app/store/store";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function AddToCart({
  addToCartAction,
}: {
  addToCartAction: () => Promise<Cart>;
}) {
  const dispatch = useDispatch();

  return (
    <button
      className="button button-rounded"
      onClick={async () => {
        dispatch(setCart(await addToCartAction()));
      }}
    >
      Comprar
      <MdShoppingCart />
    </button>
  );
}
