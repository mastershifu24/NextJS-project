import Link from "next/link";

/**
 * Home page: hero with name, title, and one-sentence bio.
 */
export default function HomePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
          Ahmed Shifa
        </h1>
        <p className="mt-3 text-xl text-neutral-600 dark:text-neutral-300 sm:text-2xl">
          Data Engineer
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base text-neutral-500 dark:text-neutral-400 sm:text-lg">
          I build reliable data pipelines and analytics solutions, from ETL to insights, and love turning raw data into production-ready systems.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
