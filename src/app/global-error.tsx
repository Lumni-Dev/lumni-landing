"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html lang="pt-BR">
      <body className="flex min-h-full flex-col items-center justify-center bg-ink-950 text-ink-100">
        <h2>Algo deu errado!</h2>
        <button onClick={() => unstable_retry()}>Tentar novamente</button>
      </body>
    </html>
  );
}
