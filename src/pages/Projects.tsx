import { CardProject } from "../components/CardProject";
import { ChangeEvent, useState } from "react";
import { Layout } from "../components/Layout";
import { projects } from "../mock/projects";

export function Projects() {
  const [category, setCategory] = useState("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
  };

  const filteredProjects = projects.filter((project) =>
    project.made.includes(category),
  );

  return (
    <Layout>
      <section
        id="projects"
        className="flex flex-col gap-4"
        aria-labelledby="projects-heading"
      >
        <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:items-center lg:gap-0">
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
        <p className="text-md">
          Projetos criados em&nbsp;
          <select
            name="select"
            id="select-technology"
            className="bg-gray-800 p-2 rounded-md font-bold text-emerald-400 outline-none inline-flex items-center justify-center"
            onChange={handleChange}
          >
            <option value="">todas tecnologias</option>
            <option value="html">HTML</option>
            <option value="react">React</option>
            <option value="next">Next</option>
          </select>
        </p>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProjects.map((project, index) => (
            <CardProject key={index} project={project} />
          ))}
        </article>
      </section>
    </Layout>
  );
}
