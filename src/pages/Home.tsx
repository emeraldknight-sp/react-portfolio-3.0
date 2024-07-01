import * as Fa from "react-icons/fa6";
import ProfilePhoto from "../assets/viego.jpg";
import { Inputs } from "../vite-env";
import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { MenuSocialMedia } from "../components/MenuSocialMedia";
import { projects } from "../mock/projects";
import { toast } from "sonner";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { LinkButton } from "../components/LinkButton";

export function Home() {
  const navigate = useNavigate();
  const { setOption } = useContext(MenuContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    toast.success("Sua solicitação foi enviada!");
  };

  const handleClick = () => {
    setOption("Contato");
    navigate("/scheduling");
    window.scroll(0, 0);
  };

  return (
    <div>
      <Layout>
        <article
          className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center"
          aria-label="banner"
        >
          <figure className="w-full flex justify-center items-center">
            <img
              src={ProfilePhoto}
              alt="David Almeida's profile photo"
              className="rounded-full w-full md:w-2/3"
              width={288}
              height={288}
            />
          </figure>
          <section
            className="flex flex-col gap-4 md:max-w-[75%]
           lg:max-w-[50%]"
          >
            <h1 className="text-3xl md:text-6xl font-mono">
              Transformando conceitos em experiências digitais memoráveis
            </h1>
            <p className="text-md font-mono mb-10">
              Crie a presença digital que você precisa para o seu negócio.
            </p>
            <LinkButton
              to="/scheduling"
              variant="primary"
              size="lg"
              onClick={handleClick}
              target="_self"
              title="Agende uma reunião"
              aria-label="Entre em contato para agendar uma reunião"
            >
              Entre em contato
            </LinkButton>
          </section>
        </article>
        <MenuSocialMedia flexible />
        <section
          id="about"
          className="flex flex-col lg:flex-row"
          aria-labelledby="about-heading"
        >
          <article className="flex flex-col gap-5 flex-1">
            <h2
              id="about-heading"
              className="text-4xl font-bold font-mono leading-[94px]"
            >
              Sobre mim
            </h2>
            <p className="max-w-[300px] text-lg text-emerald-400 before:content-['<p>'] after:content-['</p>'] before:text-emerald-400">
              <br />
              Tenho formação acadêmica e na prática venho desenvolvendo diversos
              projetos em front-end, back-end e mobile, produzindo sites e
              aplicativos responsivos de alta qualidade e com uma experiência de
              usuário excepcional.
              <br />
            </p>
          </article>
          <article className="flex flex-col gap-5 flex-1">
            <div className="py-11">
              <div
                className="border-t-[6px] border-emerald-400"
                aria-hidden={true}
              ></div>
            </div>
            <p className="text-lg">
              Meu papel como front-end é combinar design e lógica de negócios
              para obter um produto voltado para o usuário. É necessário um
              amplo conjunto de habilidades para produzir uma experiência de
              usuário de qualidade que leve ao cumprimento de suas metas de
              negócios.
            </p>
            <div>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-5">
                  <span className="pt-1">
                    <rect className="block border-2 border-emerald-400 rounded-full w-4 h-4"></rect>
                  </span>
                  <span>
                    <p className="text-lg leading-6">
                      Crie sites responsivos que funcionem em uma ampla
                      variedade de dispositivos
                    </p>
                  </span>
                </li>
                <li className="flex gap-5">
                  <span className="pt-1">
                    <rect className="block border-2 border-emerald-400 rounded-full w-4 h-4"></rect>
                  </span>
                  <span>
                    <p className="text-lg leading-6">
                      Auxiliar na produção de design limpo e funcional
                    </p>
                  </span>
                </li>
                <li className="flex gap-5">
                  <span className="pt-1">
                    <rect className="block border-2 border-emerald-400 rounded-full w-4 h-4"></rect>
                  </span>
                  <span>
                    <p className="text-lg leading-6">
                      Preencher a lacuna de comunicação entre designers e
                      desenvolvedores
                    </p>
                  </span>
                </li>
                <li className="flex gap-5">
                  <span className="pt-1">
                    <rect className="block border-2 border-emerald-400 rounded-full w-4 h-4"></rect>
                  </span>
                  <span>
                    <p className="text-lg leading-6">
                      Integre seu site em um sistema de gerenciamento de
                      conteúdo fácil de usar
                    </p>
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-lg">
              Com meu trabalho posso ajudar seu empreendimento a escalar com
              projetos da mais alta qualidade, dedicado a ser responsivo e
              testado em uma ampla variedade de dispositivos.
            </p>
            <LinkButton
              to="https://www.linkedin.com/in/davidalmeidadev/"
              variant="secondary"
              size="md"
              target="_blank"
              title="Acesse meu perfil no LinkedIn"
              aria-label="Acesse meu perfil no LinkedIn"
            >
              Perfil no LinkedIn
            </LinkButton>
          </article>
        </section>
        <section
          id="projects"
          className="flex flex-col gap-4"
          aria-labelledby="projects-heading"
        >
          <h3 id="projects-heading" className="text-4xl font-bold font-mono">
            Meus projetos
          </h3>
          <p className="text-md">
            Projetos criados em&nbsp;
            <span className="text-emerald-400 font-bold">Kenzie Academy</span>
          </p>
          <ul className="flex flex-col gap-8" role="list">
            {projects.map((project, index) => (
              <li
                key={index}
                className="flex flex-col gap-4 max-w-[350px]"
                role="listitem"
                aria-labelledby={project.name}
              >
                <h4
                  id={project.name}
                  className="text-2xl leading-10 font-bold font-mono"
                >
                  {project.name}
                </h4>
                <div
                  className="flex flex-row flex-wrap gap-2"
                  aria-labelledby="technologies"
                >
                  <span
                    id="techonologies"
                    className="font-medium text-md text-gray-300"
                  >
                    Tecnologias:
                  </span>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-emerald-400 text-xs font-semibold rounded p-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-md text-gray-300 leading-7 ">
                  {project.description}
                </p>
                <ul className="flex justify-start gap-4 md:gap-8" role="list">
                  {project.links.map((link, index) => (
                    <li
                      key={index}
                      className="flex justify-center items-center gap-2 p-2 border-2 border-gray-800 rounded-full"
                      role="listitem"
                    >
                      <button
                        type="button"
                        className="flex justify-center items-center gap-2 outline-none text-xl"
                        onClick={() => {
                          link.url.length > 0
                            ? navigate(link.url)
                            : toast.error("Visualização indisponível!");
                        }}
                        title={link.name}
                        aria-label={`go to ${link.name}`}
                        tabIndex={0}
                      >
                        {index === 0 ? (
                          <Fa.FaGithub />
                        ) : index === 1 ? (
                          <Fa.FaArrowUpRightFromSquare />
                        ) : index === 2 ? (
                          <Fa.FaAppStore />
                        ) : (
                          <Fa.FaGooglePlay />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <section id="contact" className="flex flex-row">
          <form
            className="max-w-[300px] md:max-w-[425px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset className="flex flex-col gap-4">
              <legend className="text-4xl font-bold font-mono mb-6">
                Inscreva-se para ficar por dentro das novidades!
              </legend>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-green-400 text-sm font-bold"
                >
                  Nome completo
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
                {errors.email && (
                  <span className="text-red-500" role="alert">
                    Esse campo é obrigatório.
                  </span>
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
              Fazer subscrição
            </button>
            <div className="flex flex-row items-center justify-center gap-2 my-4">
              <div className="w-1/2 border"></div>
              <span className="text-md">ou</span>
              <div className="w-1/2 border"></div>
            </div>
            <button
              type="button"
              className="min-w-full bg-gray-200 rounded text-xl font-bold text-gray-900 text-center p-4 outline-none hover:bg-white transition-all duration-300"
              onClick={handleClick}
              aria-label="Agendar consultoria"
            >
              Agendar consultoria
            </button>
          </form>
        </section>
      </Layout>
    </div>
  );
}
