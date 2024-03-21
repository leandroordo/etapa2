import { Cart } from "@/api/types";
import { useCart } from "@/app/store/store";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function CartPopup({
  clearCartAction,
  show
}: {
  clearCartAction: () => Promise<Cart>,
  show: boolean,
}) {
  const dispatch = useDispatch();
  const cart = useCart();

  return (
    <div className={show ? "cart__container active" : "cart__container"}>
      {cart.products.length === 0 && (
        <p>No hay nada en su carrito de compras.</p>
      )}
      {cart.products.length > 0 && (
        <ul className="cart__itemlist">
          {cart.products.map((product, index) => (
            <li key={index} className="cart__item">
              <div className="cart__itemimage">
                IMAGEN
                {/* <Image></Image> */}
              </div>
              <div className="cart__itemproductdetail">
                <p className="cart__itemproductname">{product.name}</p>
                <p className="cart__itemproductcantidad">
                  Cant: {product.quantity}
                </p>
                <p className="cart__itemproductprice">
                  {(product.price * product.quantity).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
              <div>
                <button className="button button-delete">
                  <MdDeleteOutline />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart__totalcontainer">
        <p>Total:
          <span className="cart__totalvalue">$16.17</span>
        </p>
      </div>
    </div>
  );
}
