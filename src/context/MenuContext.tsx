import { MenuContextProps, MenuContextProviderProps } from "../vite-env";
import { createContext, useState } from "react";
import { menu } from "../mock/menu";

export const MenuContext = createContext<MenuContextProps>({
  option: "Início",
  setOption: () => {},
});

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const defaultValue = menu[0].text;
  const [option, setOption] = useState(defaultValue);

  return (
    <MenuContext.Provider value={{ option, setOption }}>
      {children}
    </MenuContext.Provider>
  );
};
