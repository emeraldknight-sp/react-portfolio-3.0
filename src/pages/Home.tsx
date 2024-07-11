import ProfilePhoto from "../assets/profile-photo.webp";
import { Contact } from "../components/Contact";
import { Layout } from "../components/Layout";
import { LinkButton } from "../components/LinkButton";
import { MenuSocialMedia } from "../components/MenuSocialMedia";
import { SlickCaroussel } from "../components/SlickCarousel";
import { SliderCarousel } from "../components/SliderCarousel";
import { MenuContext } from "../context/MenuContext";
import { TechnologiesContext } from "../context/TechnologiesContext";
import { projects } from "../mock/projects";
import { services } from "../mock/services";
import { useContext } from "react";

export function Home() {
  const technologies = useContext(TechnologiesContext);
  const { setOption } = useContext(MenuContext);

  return (
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
            target="_self"
            title="Agende uma reunião"
            aria-label="Entre em contato para agendar uma reunião"
            onClick={() => setOption("Contato")}
          >
            Entre em contato
          </LinkButton>
        </section>
      </article>
      <MenuSocialMedia flexible />
      <SliderCarousel slides={technologies} />
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
            Tenho experiência prática com programação e venho desenvolvendo
            diversos projetos em front-end, back-end e mobile, produzindo sites
            e apps responsivos de alta qualidade e com uma experiência de
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
            Meu papel como front-end é combinar design e lógica de negócios para
            obter um produto voltado para o usuário. É necessário um amplo
            conjunto de habilidades para produzir uma experiência de usuário de
            qualidade que leve ao cumprimento de suas metas de negócios. O que
            eu ofereço:
          </p>
          <div>
            <ul className="flex flex-col gap-2" role="list">
              {services.map((service, index) => (
                <li key={index} className="flex gap-5" role="listitem">
                  <span className="pt-1">
                    <span className="block border-2 border-emerald-400 rounded-full w-4 h-4"></span>
                  </span>
                  <span>
                    <p className="text-lg leading-6">{service}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg">
            Com meu trabalho posso contribuir para que seu empreendimento
            consiga escalar com projetos da mais alta qualidade, dedicado a ser
            responsivo e testado em uma ampla variedade de dispositivos.
          </p>
          <LinkButton
            to="https://www.linkedin.com/in/davidalmeidadev/"
            variant="secondary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
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
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-center lg:gap-0">
          <div className="flex-1">
            <h3 id="projects-heading" className="text-4xl font-bold font-mono">
              Meus projetos
            </h3>
          </div>
          <div className="flex-1">
            <div
              className="border-t-[6px] border-emerald-400"
              aria-hidden={true}
            ></div>
          </div>
        </div>
        <SlickCaroussel slides={projects} />
        <LinkButton
          variant="primary"
          size="md"
          to="/projects"
          target="_self"
          title="Ver todos projetos"
          aria-label="Ver todos projetos"
          onClick={() => setOption("Projetos")}
        >
          Ver todos projetos
        </LinkButton>
      </section>
      <section id="contact" className="flex flex-row">
        <Contact />
      </section>
    </Layout>
  );
}
