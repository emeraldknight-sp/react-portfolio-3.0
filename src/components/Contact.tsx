import * as Fa from "react-icons/fa6";
import { Inputs } from "../vite-env";
import { MenuContext } from "../context/MenuContext";
import { toast } from "sonner";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { setOptionMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = () => {
    const emailjsConfig = {
      serviceId: import.meta.env.VITE_SERVICE_ID,
      templateId: import.meta.env.VITE_TEMPLATE_ID,
      publicKeyId: import.meta.env.VITE_PUBLIC_KEY,
    };

    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        "#form",
        emailjsConfig.publicKeyId,
      )
      .then(
        (response) => {
          console.log("Sent:", response.status, response.text);
          toast.success("Mensagem enviada com sucesso!");
        },
        (err) => {
          console.error("Error:", err);
          toast.error("Sua mensagem não foi enviada!");
        },
      );
  };

  const redirectTo = (option: string, to: string) => {
    setOptionMenu(option);
    navigate(to);
    window.scroll(0, 0);
  };

  return (
    <form
      id="form"
      className="w-full md:w-2/3 lg:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-4">
        <legend className="text-4xl font-bold font-mono mb-6">
          Envie uma mensagem ou agende uma consultoria agora mesmo. É grátis!
        </legend>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-green-400 text-sm font-bold">
            Nome
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xl text-gray-400">
              <Fa.FaUser />
            </div>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome aqui"
              defaultValue=""
              {...register("name", { required: true })}
              className="pr-3 pl-10 p-2 w-full rounded-md focus-visible:ring-2 focus-visible:ring-green-400 outline-none text-gray-800"
              autoComplete="off"
            />
          </div>
          {errors.name && (
            <span className="text-red-500" role="alert">
              Esse campo é obrigatório.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-green-400 text-sm font-bold">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xl text-gray-400">
              <Fa.FaEnvelope />
            </div>
            <input
              type="email"
              id="email"
              defaultValue=""
              {...register("email", { required: true })}
              placeholder="Digite seu e-mail"
              className="pr-3 pl-10 p-2 w-full rounded-md focus-visible:ring-2 focus-visible:ring-green-400 outline-none text-gray-800"
              autoComplete="off"
            />
          </div>
          {errors.email && (
            <span className="text-red-500" role="alert">
              Esse campo é obrigatório.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-green-400 text-sm font-bold">
            Assunto
          </label>
          <textarea
            id="message"
            rows={8}
            defaultValue=""
            {...register("message", { required: true })}
            placeholder="Informe o assunto que deseja tratar"
            className="p-2 mb-2 rounded-md focus-visible:ring-2 focus-visible:ring-green-400 outline-none text-gray-800 "
          />
          {errors.message && (
            <span className="text-red-500" role="alert">
              Esse campo é obrigatório.
            </span>
          )}
        </div>
      </fieldset>
      <button
        type="submit"
        className="min-w-full bg-emerald-400 rounded text-xl font-bold text-gray-900 text-center p-4 mt-4 outline-none hover:bg-white transition-all duration-300"
        aria-label="Enviar formulário de subscrição"
      >
        Enviar mensagem
      </button>
      <div className="flex flex-row items-center justify-center gap-2 my-4">
        <div className="w-1/2 border"></div>
        <span className="text-md">ou</span>
        <div className="w-1/2 border"></div>
      </div>
      <button
        type="button"
        className="min-w-full bg-gray-200 rounded text-xl font-bold text-gray-900 text-center p-4 outline-none hover:bg-white transition-all duration-300"
        onClick={() => redirectTo("Contato", "/scheduling")}
        aria-label="Agendar consultoria"
      >
        Agendar consultoria
      </button>
    </form>
  );
}
