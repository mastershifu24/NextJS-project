import ProjectCard from "@/components/ProjectCard";

/**
 * Projects page: grid of 3 project cards.
 * Two Python projects (AI-project, building-ETL-pipeline) + this portfolio.
 */
const PROJECTS = [
  {
    title: "AI Project",
    description: "Python-based AI application showcasing ML/data workflows and automation.",
    tags: ["Python", "MIT License"],
    href: "https://github.com/mastershifu24/AI-project",
  },
  {
    title: "Building ETL Pipeline",
    description: "End-to-end ETL pipeline for extracting, transforming, and loading data.",
    tags: ["Python", "ETL", "Data Engineering"],
    href: "https://github.com/mastershifu24/building-ETL-pipeline",
  },
  {
    title: "Personal Portfolio",
    description: "This minimal portfolio site built with Next.js 14, TypeScript, and Tailwind.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    href: "https://github.com/mastershifu24/NextJS-project",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">Projects</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        A selection of things I&apos;ve built.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}
