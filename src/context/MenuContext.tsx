import { MenuContextProps, MenuContextProviderProps } from "../vite-env";
import { createContext, useEffect, useState } from "react";
import { menu } from "../mock/menu";

export const MenuContext = createContext<MenuContextProps>({
  optionMenu: "Início",
  setOptionMenu: () => {},
});

export const MenuContextProvider = ({ children }: MenuContextProviderProps) => {
  const defaultValue = menu[0].text;
  const [optionMenu, setOptionMenu] = useState(() => {
    return localStorage.getItem("option") || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem("option", optionMenu);
  }, [optionMenu]);

  return (
    <MenuContext.Provider value={{ optionMenu, setOptionMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
