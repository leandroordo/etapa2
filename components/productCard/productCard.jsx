"use client";

import Image from "next/image";
import Link from "next/link";
import { MdShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const showToast = () => {
    toast.success("Agregado al carrito", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
          <Link href="#">{product.name}</Link>
        </h3>
        <div className="card__description-text">{product.desciption}</div>
        <div className="card__description-price">$ {product.price}</div>
        <button className="button button-rounded" onClick={showToast}>
          Comprar
          <MdShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
