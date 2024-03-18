import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner__item">
      <div className="banner__image-container">
        <Image
          src="/banner.jpg"
          alt="La Juguetería"
          className="banner__image"
          width={462}
          height={410}
        />
      </div>
      <div className="banner__text-container">
        <h1 className="banner__text-big">
          Los juguetes
          <span className="banner__text-smaller">que siempre soñaste</span>
        </h1>
        <p>
          ¿Estás buscando un juguete único en el mundo? Nuestra colección de
          juguetes cósmicos tiene los mejores y más raros juguetes que traerán
          felicidad a chicos y grandes.
        </p>
      </div>
    </div>
  );
};

export default Banner;
