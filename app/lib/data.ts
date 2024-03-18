"use server";
import { connectToDB } from "./utils";
import { Products } from "./model";

export const fetchProducts = async () => {
  try {
    connectToDB();

    const products = await Products.find();
    return products;
  } catch (err) {
    console.log(err);
    throw new Error("Faild to fech users!");
  }
};
