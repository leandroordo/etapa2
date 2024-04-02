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
        photo: product.photo,
      });
    }
  }
  return cart;
};

export const removeProduct = async (productId: number): Promise<Cart> => {
  if (cart.products) {
    cart.products = cart.products.filter((product) => product.id !== productId);
  }
  return cart;
};

export const incrementProductQuantity = async (
  productId: number,
  amount: number
): Promise<Cart> => {
  if (cart.products) {
    const product = cart.products.find((product) => product.id === productId);
    if (product) {
      console.log("Encontré");
      console.log("Cant actual " + product.quantity);
      product.quantity += amount;
      console.log("Nueva cantidad " + product.quantity);

      if (product.quantity === 0) await removeProduct(productId);
    }
  }
  return cart;
};

export const clearCart = async (): Promise<Cart> => {
  cart.products = [];
  return cart;
};
