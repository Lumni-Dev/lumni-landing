"use client"; // Error boundaries must be Client Components

// Fora do segmento [locale] não há dicionário: texto bilíngue neutro.
export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html lang="en">
      <body className="flex min-h-full flex-col items-center justify-center bg-ink-950 text-ink-100">
        <h2>Something went wrong / Algo deu errado</h2>
        <button onClick={() => unstable_retry()}>Try again / Tentar novamente</button>
      </body>
    </html>
  );
}
