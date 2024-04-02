"use server";
import { connectToDB } from "./utils";
import { Product } from "./model";

export const fetchProducts = async () => {
  try {
    connectToDB();

    const products = await Product.find();
    return products;
  } catch (err) {
    console.log(err);
    throw new Error("Faild to fech users!");
  }
};
