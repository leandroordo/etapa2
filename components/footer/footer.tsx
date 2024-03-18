import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer__background-top">
        <Image
          src="/nubes.png"
          alt="fondo de nubes"
          width={1920}
          height={215}
        />
      </div>
      <div className="footer__container">
        <div className="container__row footer__flex">
          <div className="footer__col">
            <div className="footer__item">
              <h5>Accesos rápidos</h5>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <a href="./index.html">Inicio</a>
                </li>
                <li className="footer__listitem">
                  <a href="./aboutus.html">Nosotros</a>
                </li>
                <li className="footer__listitem">
                  <a href="./contact.html">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__item">
              <h5>Ayuda</h5>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <a href="#">Preguntas frecuentes</a>
                </li>
                <li className="footer__listitem">
                  <a href="#">Privacidad</a>
                </li>
                <li className="footer__listitem">
                  <a href="#">Términos y condiciones</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__item">
              <h5>Redes sociales</h5>
              <ul className="footer__list">
                <li className="footer__listitem">
                  <a href="instagram.com">Instagram</a>
                </li>
                <li className="footer__listitem">
                  <a href="youtube.com">Youtube</a>
                </li>
                <li className="footer__listitem">
                  <a href="facebook.com">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__col">
            <div className="footer__item">
              <h5>Contacto</h5>
              <ul className="footer__list">
                <li className="footer__listitem">
                  Avenida De Las Estrellas 1234
                </li>
                <li className="footer__listitem">Tel (303) 456-789-000</li>
                <li className="footer__listitem">
                  <a href="mailto:info@jugueteriacosmica.com">
                    info@jugueteriacosmica.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
