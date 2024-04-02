"use server";

import { revalidatePath } from "next/cache";
import { Product } from "./model";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre no es válido",
      description: "Nombre del producto",
      required_error: "El nombre del producto es obligatorio",
    })
    .min(3, { message: "El nombre del producto es muy corto" })
    .max(100, { message: "El nombre del producto es muy largo" }),
  price: z.coerce
    .number({
      invalid_type_error: "El precio no es válido",
      description: "Precio del producto",
      required_error: "El precio del producto es obligatorio",
    })
    .gt(0, { message: "El precio del producto debe ser mayor a cero" })
    .lte(1000000, { message: "El precio del producto es muy grande" })
    .positive({ message: "El precio del producto no es correcto" }),
  stock: z.coerce
    .number({
      invalid_type_error: "El stock no es válido",
      description: "Stock del producto",
      required_error: "El stock del producto es obligatorio",
    })
    .gt(0, { message: "El stock del producto debe ser mayor a cero" })
    .lte(1000000, { message: "El stock del producto es muy grande" }),
  brand: z
    .string({
      invalid_type_error: "La marca no es válida",
      description: "Marca del producto",
      required_error: "La marca del producto es obligatorio",
    })
    .min(3, { message: "La marca del producto es muy corta" })
    .max(100, { message: "La marca del producto es muy larga" }),
  description: z
    .string({
      invalid_type_error: "La descripción no es válida",
      description: "Descripción del producto",
      required_error: "La descripción del producto es obligatoria",
    })
    .min(10, { message: "La descripción del producto es muy corta" })
    .max(255, { message: "La descripción del producto es muy larga" }),
  ageFrom: z.coerce
    .number({
      invalid_type_error: "La edad desde no es válida",
      description: "Edad desde del producto",
    })
    .gte(0, { message: "La edad desde debe ser cero o mayor a cero" })
    .lte(99, { message: "La edad desde es muy grande" }),
  ageTo: z.coerce
    .number({
      invalid_type_error: "La edad hasta no es válida",
      description: "Edad hasta del producto",
    })
    .gte(0, { message: "La edad hasta debe ser cero o mayor a cero" })
    .lte(99, { message: "La edad hasta es muy grande" }),
});

export default async function addProduct(prevState: any, formData: FormData) {
  const {
    name,
    price,
    stock,
    brand,
    category,
    description,
    longDescription,
    freeDelivery,
    ageFrom,
    ageTo,
    photo,
  } = Object.fromEntries(formData);

  const validatedFields = schema.safeParse({
    name,
    price,
    stock,
    brand,
    description,
    longDescription,
    ageFrom,
    ageTo,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    connectToDB();
    const newProduct = new Product({
      name,
      price,
      stock,
      brand,
      category,
      description,
      longDescription,
      freeDelivery: freeDelivery === "on",
      ageFrom,
      ageTo,
      photo,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el producto");
  }

  revalidatePath("/");
  //   redirect("/");

  return {
    message: "Se ha guardado el producto",
  };
}
