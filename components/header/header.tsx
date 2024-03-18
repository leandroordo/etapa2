import Image from "next/image";

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
                <a className="navitem__link active" href="./index.html">
                  Inicio
                </a>
              </li>
              <li className="navbar__item">
                <a className="navitem__link" href="./aboutus.html">
                  Nosotros
                </a>
              </li>
              <li className="navbar__item">
                <a className="navitem__link" href="./contact.html">
                  Contacto
                </a>
              </li>
              <li className="navbar__item">
                <a
                  className="navitem__link dropdown__arrow dropdown"
                  href="#"
                  role="button"
                >
                  Admin
                </a>
                <ul className="dropdown__menu">
                  <li>
                    <a href="./alta.html" className="dropdown__item">
                      Dar de alta
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="navbar__search">
              <div className="navbar__search-items">
                <svg width="18" height="18">
                  <use xlinkHref="#search"></use>
                </svg>
                <input
                  type="text"
                  className="form__control textbox"
                  placeholder="Buscar..."
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
