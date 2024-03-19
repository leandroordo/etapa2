"use client";

import Image from "next/image";
import Link from "next/link";
import { MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container navbar__container">
          <div className="navbar__body">
            <a className="navbar__logo">
              <Image src="/logo.png" alt="Logo" width={100} height={95} />
            </a>
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
                {/* <svg width="18" height="18">
                  <use xlinkHref="#search"></use>
                </svg> */}
                <MdSearch />
                <input type="text" placeholder="Buscar..." />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
