"use client";
import ProjectCard from "./ProjectCard";
const projectData = [
  {
    title: "Eterna",
    description: "An AI based life search engine",
    link: "https://devpost.com/software/eterna-tzl81q",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm: px-8 max-w-6xl nx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects!!!</h2>
      <div className="grid grid-cols-1 sm: grid-cols-2 gap-6">
        {projectData.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
