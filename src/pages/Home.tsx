import * as Fa from "react-icons/fa6";
import ProfilePhoto from "../assets/profile-photo.webp";
import { Layout } from "../components/Layout";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { MenuSocialMedia } from "../components/MenuSocialMedia";

export function Home() {
  const projects: Project[] = [
    {
      name: "Cineverse | Streaming",
      description:
        "Um website desenhado para exibir informações consumidas de uma base de dados de filmes, séries e animações, emula uma plataforma de streaming.",
      tags: ["React", "Emotion", "React-icons"],
      madeIn: "Clone",
      links: [
        {
          url: "https://github.com/emeraldknight-sp/react-project-cineverse",
          icon: <Fa.FaGithub size={20} />,
          name: "GitHub",
        },
        {
          url: "https://react-project-cineverse.vercel.app/",
          icon: <Fa.FaArrowUpRightFromSquare size={20} />,
          name: "Aplicação",
        },
        {
          url: "",
          icon: <Fa.FaAppStore size={20} />,
          name: "iOS",
        },
        {
          url: "",
          icon: <Fa.FaGooglePlay size={20} />,
          name: "Android",
        },
      ],
    },
    {
      name: "The Mandalorian | APIs",
      tags: ["Next", "SASS", "React-icons", "React-lottie"],
      description:
        "Um projeto front-end que faz uso do consumo de API para mostrar dados dinâmicamente ao visitante!",
      madeIn: "Clone",
      links: [
        {
          url: "https://github.com/emeraldknight-sp/react-project-cineverse",
          icon: <Fa.FaGithub size={20} />,
          name: "GitHub",
        },
        {
          url: "https://react-project-cineverse.vercel.app/",
          icon: <Fa.FaArrowUpRightFromSquare size={20} />,
          name: "Aplicação",
        },
        {
          url: "",
          icon: <Fa.FaAppStore size={20} />,
          name: "iOS",
        },
        {
          url: "",
          icon: <Fa.FaGooglePlay size={20} />,
          name: "Android",
        },
      ],
    },
    {
      name: "Metin 2 | SEO",
      tags: ["Next", "Tailwind CSS", "React-icons"],
      description:
        "Um website feito com um poderoso framework de desenvolvimento web voltado para alto desempenho e ranqueamento no SEO.",
      madeIn: "Clone",
      links: [
        {
          url: "https://github.com/emeraldknight-sp/react-project-cineverse",
          icon: <Fa.FaGithub size={20} />,
          name: "GitHub",
        },
        {
          url: "https://react-project-cineverse.vercel.app/",
          icon: <Fa.FaArrowUpRightFromSquare size={20} />,
          name: "Aplicação",
        },
        {
          url: "",
          icon: <Fa.FaAppStore size={20} />,
          name: "iOS",
        },
        {
          url: "",
          icon: <Fa.FaGooglePlay size={20} />,
          name: "Android",
        },
      ],
    },
    {
      name: "One Piece | Reatividade",
      tags: ["React", "Styled-components", "Typescript"],
      description:
        "Um projeto front-end feito para aprensentar informações de acordo com a interação do usuário apresentando informações de forma dinâmica e instantânea!",
      madeIn: "Dev em Dobro",
      links: [
        {
          url: "https://github.com/emeraldknight-sp/react-project-cineverse",
          icon: <Fa.FaGithub size={20} />,
          name: "GitHub",
        },
        {
          url: "https://react-project-cineverse.vercel.app/",
          icon: <Fa.FaArrowUpRightFromSquare size={20} />,
          name: "Aplicação",
        },
        {
          url: "",
          icon: <Fa.FaAppStore size={20} />,
          name: "iOS",
        },
        {
          url: "",
          icon: <Fa.FaGooglePlay size={20} />,
          name: "Android",
        },
      ],
    },
    {
      name: "Mundo Invertido | Switch Mode",
      tags: [
        "React",
        "SASS",
        "CSS Modules",
        "React-hot-toast",
        "Firebase Firestore",
      ],
      description:
        "Um website incrível feito com React estilizado pela combincação de SASS com CSS Modules para aprensentar a série Stranger Things e colher leads através de um formulário que envia dados ao Firestore.",
      madeIn: "DIO",
      links: [
        {
          url: "https://github.com/emeraldknight-sp/react-project-cineverse",
          icon: <Fa.FaGithub size={20} />,
          name: "GitHub",
        },
        {
          url: "https://react-project-cineverse.vercel.app/",
          icon: <Fa.FaArrowUpRightFromSquare size={20} />,
          name: "Aplicação",
        },
        {
          url: "",
          icon: <Fa.FaAppStore size={20} />,
          name: "iOS",
        },
        {
          url: "",
          icon: <Fa.FaGooglePlay size={20} />,
          name: "Android",
        },
      ],
    },
    {
      name: "Project Weather | Weather App",
      tags: ["React", "Styled-Components", "Axios", "Typescript"],
      description:
        "Um projeto para trabalhar com a previsão do tempo utilizando React.JS, Styled Components e o consumo de APIs!",
      madeIn: "Autoral",
      links: [
        {
          url: "https://github.com/emeraldknight-sp/react-project-cineverse",
          icon: <Fa.FaGithub size={20} />,
          name: "GitHub",
        },
        {
          url: "https://react-project-cineverse.vercel.app/",
          icon: <Fa.FaArrowUpRightFromSquare size={20} />,
          name: "Aplicação",
        },
        {
          url: "",
          icon: <Fa.FaAppStore size={20} />,
          name: "iOS",
        },
        {
          url: "",
          icon: <Fa.FaGooglePlay size={20} />,
          name: "Android",
        },
      ],
    },
    {
      name: "Project HablaMucho | Learning Language",
      tags: [
        "Next",
        "TailwindCSS",
        "Typescript",
        "Context API",
        "Firebase",
        "Moment.js",
      ],
      description:
        "Um projeto desenvolvido para aprendizado de novos idiomas feito com Next.js, Tailwind CSS e consumo de dados pelo Firebase, um banco de dados NoSQL.",
      madeIn: "Autoral",
      links: [
        {
          url: "https://github.com/emeraldknight-sp/react-project-cineverse",
          icon: <Fa.FaGithub size={20} />,
          name: "GitHub",
        },
        {
          url: "https://react-project-cineverse.vercel.app/",
          icon: <Fa.FaArrowUpRightFromSquare size={20} />,
          name: "Aplicação",
        },
        {
          url: "",
          icon: <Fa.FaAppStore size={20} />,
          name: "iOS",
        },
        {
          url: "",
          icon: <Fa.FaGooglePlay size={20} />,
          name: "Android",
        },
      ],
    },
  ];

  const socialMedias: Link[] = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@davidalmeidadev",
      icon: <Fa.FaTiktok size={20} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/davidalmeidadev/",
      icon: <Fa.FaInstagram size={20} />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/5586988641961",
      icon: <Fa.FaWhatsapp size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/davidalmeidadev/",
      icon: <Fa.FaLinkedin size={20} />,
    },
  ];

  const form = useRef<HTMLFormElement>(null);
  const executeScroll = () =>
    form.current?.scrollIntoView({ behavior: "smooth" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    toast.success("Sua solicitação foi enviada!");
  };

  const navigate = useNavigate();

  return (
    <div>
      <Layout>
        <article className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center">
          <figure className="w-full flex justify-center items-center">
            <img
              src={ProfilePhoto}
              alt="David Almeida profile photo"
              className="rounded-full w-full md:w-2/3"
              width={288}
              height={288}
            />
          </figure>
          <section
            className="flex flex-col gap-2 md:max-w-[75%]
           lg:max-w-[50%]"
          >
            <h1 className="text-3xl font-bold md:text-6xl">
              Transformando conceitos em experiências digitais memoráveis
            </h1>
            <p className="text-md">
              Crie a presença digital que você precisa para o seu negócio
            </p>
            <button
              type="button"
              className="max-w-fit bg-emerald-400 rounded text-xl font-bold text-gray-900 text-center p-4 mt-8 outline-none"
              onClick={executeScroll}
            >
              Entre em contato
            </button>
          </section>
        </article>
        <MenuSocialMedia flexible />
        <section className="flex flex-col gap-4">
          <h3 className="text-4xl font-bold">Meus projetos</h3>
          <p className="text-md">
            Projetos criados em&nbsp;
            <span className="text-emerald-400 font-bold">Kenzie Academy</span>
          </p>
          <ul className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <li key={index} className="flex flex-col gap-4 max-w-[950px]">
                <h3 className="text-2xl leading-10 font-bold">
                  {project.name}
                </h3>
                <ul className="flex flex-row flex-wrap gap-2">
                  <span className="font-medium text-md">Tecnologias:</span>
                  {project.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="bg-gray-800 text-emerald-400 text-xs font-semibold rounded p-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="text-md leading-7">{project.description}</p>
                <ul className="flex justify-start gap-4 md:gap-8">
                  {project.links.map((link, index) => (
                    <li
                      key={index}
                      className="flex justify-center items-center gap-2 p-2 md:px-4 md:py-3 border-2 border-gray-800 rounded-full md:rounded-lg"
                    >
                      <a
                        href={link.url}
                        className="flex justify-center items-center gap-2 outline-none"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}{" "}
                        <span className="hidden md:block">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <form
          ref={form}
          className="max-w-[300px] md:max-w-[425px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="flex flex-col gap-4">
            <legend className="text-4xl font-bold mb-6">
              Inscreva-se para receber promoções!
            </legend>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-green-400 text-sm font-bold"
              >
                Nome completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xl text-slate-400">
                  <Fa.FaUser />
                </div>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Digite seu nome aqui"
                  defaultValue=""
                  {...register("name", { required: true })}
                  className="pr-3 pl-10 p-2 w-full rounded-md focus-visible:ring-2 focus-visible:ring-green-400 outline-none text-slate-800"
                  autoComplete="off"
                />
              </div>
              {errors.email && (
                <span className="text-red-500">Esse campo é obrigatório.</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-green-400 text-sm font-bold"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xl text-slate-400">
                  <Fa.FaEnvelope />
                </div>
                <input
                  type="email"
                  id="email"
                  defaultValue=""
                  {...register("email", { required: true })}
                  placeholder="Digite seu e-mail"
                  className="pr-3 pl-10 p-2 w-full rounded-md focus-visible:ring-2 focus-visible:ring-green-400 outline-none text-slate-800"
                  autoComplete="off"
                />
              </div>
              {errors.email && (
                <span className="text-red-500">Esse campo é obrigatório.</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-green-400 text-sm font-bold"
              >
                Assunto
              </label>
              <textarea
                id="message"
                rows={8}
                defaultValue=""
                {...register("message", { required: true })}
                placeholder="Informe o assunto que deseja tratar"
                className="p-2 mb-2 rounded-md focus-visible:ring-2 focus-visible:ring-green-400 outline-none text-slate-800 "
              />
              {errors.message && (
                <span className="text-red-500">Esse campo é obrigatório.</span>
              )}
            </div>
          </fieldset>
          <button
            type="submit"
            className="min-w-full bg-emerald-400 rounded text-xl font-bold text-gray-900 text-center p-4 mt-4 outline-none"
          >
            Fazer subscrição
          </button>
          <div className="flex flex-row items-center justify-center gap-2 my-4">
            <div className="w-1/2 border"></div>
            <span className="text-md">ou</span>
            <div className="w-1/2 border"></div>
          </div>
          <button
            type="button"
            className="min-w-full bg-slate-200 rounded text-xl font-bold text-gray-900 text-center p-4 outline-none"
            onClick={() => navigate("/scheduling")}
          >
            Agendar consultoria
          </button>
        </form>
      </Layout>
    </div>
  );
}
