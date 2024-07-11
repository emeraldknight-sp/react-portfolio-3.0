import { AppContextProvider } from "./context";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Scheduling } from "./pages/Scheduling";
import { Toaster } from "sonner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/scheduling",
    element: <Scheduling />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

export function App() {
  return (
    <AppContextProvider>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}
