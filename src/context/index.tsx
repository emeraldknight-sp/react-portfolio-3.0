import { AppContextProps } from "../vite-env";
import { MenuContextProvider } from "./MenuContext";
import { TechnologiesContextProvider } from "./TechnologiesContext";

export const AppContextProvider = ({ children }: AppContextProps) => {
  return (
    <MenuContextProvider>
      <TechnologiesContextProvider>{children}</TechnologiesContextProvider>
    </MenuContextProvider>
  );
};
