import { Cart, Product } from "./types";

const cart: Cart = {
  products: [],
};

export const getCart = async (): Promise<Cart> => {
  return cart;
};

export const addToCart = async (product: Product): Promise<Cart> => {
  if (product) {
    cart.products.push({
      name: product.name,
      id: product.id,
      price: product.price,
      quantity: 1,
    });
  }
  return cart;
};

export const clearCart = async (): Promise<Cart> => {
  cart.products = [];
  return cart;
};
