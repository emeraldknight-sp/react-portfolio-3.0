import { MenuSocialMedia } from "./MenuSocialMedia";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="footer"
      className=" bg-emerald-400 text-gray-900 p-4"
    >
      <div className="flex flex-col md:flex-row justify-center gap-8 container mx-auto">
        <p className="font-bold font-mono text-3xl">
          Estou disponível para trabalho freelancer, você pode me encontrar em
          minhas redes.
        </p>
        <MenuSocialMedia flexible={false} />
        <span className="text-xs text-center">
          &copy; {year} - Designed by Zemez - David Almeida
        </span>
      </div>
    </footer>
  );
}
