import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 200,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    brand: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: false,
    },
    freeDelivery: {
      type: Boolean,
      required: false,
    },
    ageFrom: {
      type: Number,
      required: false,
      min: 0,
      max: 1000,
    },
    ageTo: {
      type: Number,
      required: false,
      min: 0,
      max: 1000,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default productsSchema;
export const Product =
  mongoose.models.productos || mongoose.model("productos", productsSchema);
