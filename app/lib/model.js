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
    desciption: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    photo: {
      src: {
        type: String,
      },
      alt: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export default productsSchema;
export const Products =
  mongoose.models.productos || mongoose.model("productos", productsSchema);
