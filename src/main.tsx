import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./routes/home.tsx";
import { Login } from "./routes/login.tsx";
import { Layout } from "./routes/private/layout.tsx";
import { Dashboard } from "./routes/private/dashboard/index.tsx";
import { Error404 } from "./routes/errors/404.tsx";

import { Register } from "./routes/register.tsx";
import { ProductId } from "./routes/private/product-id.tsx";
import { Products } from "./routes/private/products.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/redirectexample",
    element: <Navigate to="/" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductId />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
