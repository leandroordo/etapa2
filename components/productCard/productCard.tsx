import Image from "next/image";
import Link from "next/link";

import AddToCart from "../addToCart/addToCart";
import { addToCart } from "@/api/cart";

export default async function ProductCard({
  id,
  name,
  description,
  price,
  photo,
}: {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: {
    src: string;
    alt: string;
  };
}) {
  const addToCartAction = async () => {
    "use server";
    return await addToCart({
      id,
      name,
      description,
      price,
      photo: { src: photo.src, alt: photo.alt },
    });
  };

  return (
    <div className="product__card">
      <div className="card__image">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={300}
          height={260}
          className="card__image-fluid"
        />
      </div>
      <div className="card__description">
        <h3 className="card__description-title">
          <Link href="#">{name}</Link>
        </h3>
        <div className="card__description-text">{description}</div>
        <div className="card__description-price">$ {price}</div>
        <AddToCart addToCartAction={addToCartAction} />
      </div>
    </div>
  );
}
