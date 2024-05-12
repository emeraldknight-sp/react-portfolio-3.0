import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
