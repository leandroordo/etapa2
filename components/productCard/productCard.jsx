import Image from "next/image";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div className="product__card">
      <div className="card__image">
        <Image
          src={product.photo.src}
          alt={product.photo.alt}
          width={300}
          height={260}
          className="card__image-fluid"
        />
      </div>
      <div className="card__description">
        <h3 className="card__description-title">
          <a href="#">{product.name}</a>
        </h3>
        <div className="card__description-text">{product.desciption}</div>
        <div className="card__description-price">$ {product.price}</div>
        <a href="#" className="button button-rounded">
          Comprar
          <svg className="cart" width="18" height="18">
            {/* <use xlink:href="#cart"></use> */}
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
