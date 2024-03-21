"use client";

import { Cart } from "@/api/types";
import { useCart } from "@/app/store/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineShoppingBag, MdSearch } from "react-icons/md";
import CartPopup from "../cartPopup/cartPopup";

export default function Header({
  clearCartAction,
}: {
  clearCartAction: () => Promise<Cart>;
}) {
  const cart = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <header>
      <nav>
        <div className="container navbar__container">
          <div className="navbar__body">
            <Link className="navbar__logo" href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={95} />
            </Link>
            <ul className="navbar__nav">
              <li className="navbar__item">
                <Link className="navitem__link active" href="./">
                  Inicio
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navitem__link" href="./aboutus.html">
                  Nosotros
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navitem__link" href="./contact.html">
                  Contacto
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  className="navitem__link dropdown__arrow dropdown"
                  href="#"
                  role="button"
                >
                  Admin
                </Link>
                <ul className="dropdown__menu">
                  <li>
                    <Link href="./alta.html" className="dropdown__item">
                      Dar de alta
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navbar__search">
              <div className="navbar__search-items">
                <MdSearch />
                <input type="text" placeholder="Buscar..." />
              </div>
            </div>
            <div className="navbar__shoppingbag">
              <button
                className="button button-small"
                onClick={() => {
                  setShowCart(!showCart);
                }}
              >
                <MdOutlineShoppingBag />
                <span className="navbar__shoppingbag-badge">
                  {cart.products.length}
                </span>
              </button>
              {showCart && <CartPopup clearCartAction={clearCartAction} />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
