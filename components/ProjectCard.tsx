import type { ReactNode } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  /** Optional icon or label for the link (e.g. "GitHub") */
  linkLabel?: ReactNode;
}

/**
 * Reusable card for a single project: title, description, tags, and GitHub link.
 */
export default function ProjectCard({ title, description, tags, href, linkLabel = "GitHub" }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:border-neutral-300 hover:shadow dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h2>
      <p className="mt-2 flex-1 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
      >
        {linkLabel}
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </article>
  );
}
