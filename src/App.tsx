import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Scheduling } from "./pages/Scheduling";
import { Toaster } from "sonner";
import { MenuContextProvider } from "./context/MenuContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/scheduling",
    element: <Scheduling />,
  },
]);

export function App() {
  return (
    <MenuContextProvider>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </MenuContextProvider>
  );
}
