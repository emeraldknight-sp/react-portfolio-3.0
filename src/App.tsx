import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Scheduling } from "./pages/Scheduling";
import { Home } from "./pages/Home";

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
  return <RouterProvider router={router} />;
}
