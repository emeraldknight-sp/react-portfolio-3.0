export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main
      id="main"
      role="main"
      aria-label="main content"
      className="flex flex-col gap-8 px-4 py-10 container mx-auto mt-16"
    >
      {children}
    </main>
  );
}
