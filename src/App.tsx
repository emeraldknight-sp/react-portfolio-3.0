import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Scheduling } from "./pages/Scheduling";
import { Toaster } from "sonner";
import { AppContextProvider } from "./context";

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
    <AppContextProvider>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}
