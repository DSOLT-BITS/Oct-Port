import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-svh items-center">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <p className="mb-4 font-mono text-sm tracking-widest text-signal uppercase">
          404 / Not found
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Signal lost.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          That page doesn&apos;t exist. Head back to the portfolio.
        </p>
        <Link
          href="/"
          className="focus-ring press mt-10 inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-[transform,opacity] duration-150 hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
