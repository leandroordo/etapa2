export interface Cart {
  products: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: {
    src: string;
    alt: string;
  };
}
