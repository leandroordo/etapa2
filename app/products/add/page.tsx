"use client";

import { addProduct } from "@/app/lib/actions";
import FormControl from "@/components/formControl/formControl";
import Toast from "@/components/toast/toast";
import { useFormState } from "react-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  message: "",
};

const AddProductPage = () => {
  const [state, formAction] = useFormState(addProduct, initialState);

  function handleSubmit(formData: FormData) {
    try {
      formAction(formData);

      toast("✅ Producto guardado correctamente", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="parallax__container4">
        <div className="paralax__caption">
          <h1>Juguetería Cósmica</h1>
          <h2>Alta de producto</h2>
        </div>
      </section>

      <div className="parallax__buffer">
        <div className="container__main">
          <form action={handleSubmit}>
            <div className="container__row">
              <div className="container__item-left">
                <h3>Datos del producto</h3>
                <div className="form__row">
                  <FormControl
                    inputType="text"
                    label="Nombre"
                    name="name"
                    pattern="^.{3,100}$"
                    required={true}
                  ></FormControl>
                  <small data-formerror>{state?.errors?.name}</small>
                </div>
                <div className="form__row-double">
                  <div className="form__controlgroup">
                    <FormControl
                      inputType="text"
                      label="Precio"
                      name="price"
                      pattern="^([1-9]\d{0,5}(\.[0-9]{1,2})?|1000000(\.0{1,2})?)$"
                      required={true}
                    ></FormControl>
                    <small data-formerror>{state?.errors?.price}</small>
                  </div>
                  <div className="form__controlgroup">
                    <FormControl
                      inputType="text"
                      label="Stock"
                      name="stock"
                      pattern="^(0|[1-9]\d{0,3})$"
                      required={true}
                    ></FormControl>
                    <small data-formerror>{state?.errors?.stock}</small>
                  </div>
                </div>
              </div>
              <div className="container__item-right">
                <h3>Más información</h3>
                <div className="form__row">
                  <FormControl
                    inputType="text"
                    label="Marca"
                    name="brand"
                    required={false}
                  ></FormControl>
                  <small data-formerror>{state?.errors?.brand}</small>
                </div>
                <div className="form__row">
                  <label htmlFor="category">Categoría</label>
                  <select
                    className="form__select form__control"
                    id="category"
                    name="category"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="1">Peluches</option>
                    <option value="2">Pociones</option>
                    <option value="3">Accesorios</option>
                    <option value="4">Libros</option>
                    <option value="5">Mágicos</option>
                    <option value="6">Productos de Hadas</option>
                    <option value="7">Voladores</option>
                    <option value="8">Juegos</option>
                    <option value="9">Muñecos</option>
                    <option value="10">Deportivos</option>
                    <option value="11">Disfraces y ropas</option>
                    <option value="99">Otros</option>
                  </select>
                </div>
                <div className="form__row">
                  <FormControl
                    inputType="text"
                    label="Descripción corta"
                    name="description"
                    required={true}
                    minLength={10}
                    maxLength={255}
                  ></FormControl>
                  <small data-formerror>{state?.errors?.description}</small>
                </div>
                <div className="form__row">
                  <FormControl
                    inputType="textarea"
                    label="Descripción larga"
                    name="longDescription"
                    placeHolder="Descripción larga del producto."
                  ></FormControl>
                </div>
                <div className="form__row">
                  <label htmlFor="freeDelivery">
                    <input
                      className="form__check"
                      type="checkbox"
                      id="freeDelivery"
                      name="freeDelivery"
                    />
                    Envío sin cargo
                  </label>
                </div>
                <div className="form__row-double">
                  <div className="form__controlgroup">
                    <FormControl
                      inputType="text"
                      label="Edad desde"
                      name="ageFrom"
                      maxLength={2}
                      minValue={0}
                      maxValue={99}
                    ></FormControl>
                    <small data-formerror>{state?.errors?.ageFrom}</small>
                  </div>
                  <div className="form__controlgroup">
                    <FormControl
                      inputType="text"
                      label="Edad hasta"
                      name="ageTo"
                      maxLength={2}
                      minValue={0}
                      maxValue={99}
                    ></FormControl>
                    <small data-formerror>{state?.errors?.ageTo}</small>
                  </div>
                </div>
                <div className="form__row">
                  <FormControl
                    inputType="text"
                    label="Fotografía"
                    name="photo"
                  ></FormControl>
                </div>
                <div className="form__row-grid">
                  <button type="submit" name="submit" className="button">
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toast />
    </>
  );
};

export default AddProductPage;
