import { Cart, Product } from "./types";

const cart: Cart = {
  products: [],
};

export const getCart = async (): Promise<Cart> => {
  return cart;
};

export const addToCart = async (product: Product): Promise<Cart> => {
  if (product) {
    const productInCart = cart.products.find(({ id }) => product.id === id);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.products.push({
        name: product.name,
        id: product.id,
        price: product.price,
        quantity: 1,
      });
    }
  }
  return cart;
};

export const removeProduct = async (productId: Number): Promise<Cart> => {
  if (cart.products) {
    cart.products = cart.products.filter((product) => product.id !== productId);
  }
  return cart;
};

export const clearCart = async (): Promise<Cart> => {
  cart.products = [];
  return cart;
};
