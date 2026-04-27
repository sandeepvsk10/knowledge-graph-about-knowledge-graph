import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import HomePage from "@/pages/Home/HomePage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
