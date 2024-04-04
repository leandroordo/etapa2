"use client";
import FormControl from "@/components/formControl/formControl";
import Toast from "@/components/toast/toast";
import { useFormState } from "react-dom";
import { Bounce, toast } from "react-toastify";
import { addContactMessage } from "../lib/actions";

const initialState = {
  message: "",
};

function ContactPage() {
  const [state, formAction] = useFormState(addContactMessage, initialState);

  function handleSubmit(formData: FormData) {
    try {
      formAction(formData);

      toast("📩 Gracias por escribirnos", {
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
      <section className="parallax__container3">
        <div className="paralax__caption">
          <h1>Juguetería Cósmica</h1>
          <h2>Contacto</h2>
        </div>
      </section>

      <div className="parallax__buffer">
        <h3>Comuníquese con nosotros</h3>
        <div className="container__main">
          <div className="container__row">
            <div className="container__item-left">
              <h2>Juguetería Cósmica</h2>
              <p>Avenida De Las Estrellas 1234</p>
              <p>Tel (303) 456-789-000</p>
              <p>
                <a
                  href="mailto:info@jugueteriacosmica.com"
                  className="text-primary fw-medium"
                >
                  info@jugueteriacosmica.com
                </a>
              </p>
            </div>
            <div className="container__item-right">
              <form action={handleSubmit}>
                <div className="form__row-single">
                  <div>
                    <FormControl
                      inputType="text"
                      name="name"
                      placeHolder="Escriba su nombre"
                      pattern="^.{3,100}$"
                      required={true}
                    ></FormControl>
                    <small data-formerror>{state?.errors?.name}</small>
                  </div>
                </div>
                <div className="form__row-double" data-formgroup>
                  <div>
                    <FormControl
                      inputType="email"
                      name="email"
                      placeHolder="Escriba su e-mail"
                      required={true}
                      maxLength={255}
                    ></FormControl>
                    <small data-formerror>{state?.errors?.name}</small>
                  </div>
                  <FormControl
                    inputType="text"
                    name="telephone"
                    placeHolder="Número de teléfono"
                    maxLength={100}
                  ></FormControl>
                </div>
                <div className="form__row-single" data-formgroup>
                  <div>
                    <FormControl
                      inputType="textarea"
                      label="Mensaje o consulta"
                      name="message"
                      placeHolder="Escriba su mensaje o consulta"
                      required={true}
                      maxLength={4000}
                    ></FormControl>
                    <small data-formerror>{state?.errors?.name}</small>
                  </div>
                </div>
                <div className="form__row-grid">
                  <button type="submit" name="submit" className="button">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toast />
      </div>
    </>
  );
}

export default ContactPage;
