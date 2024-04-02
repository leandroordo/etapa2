export interface Cart {
  products: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    photo: string;
  }[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}
