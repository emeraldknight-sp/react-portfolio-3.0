export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-8 px-4 py-10 container mx-auto">
      {children}
    </main>
  );
}
