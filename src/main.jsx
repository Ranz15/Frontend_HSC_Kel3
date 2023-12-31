import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/loginPage.jsx";
import LandingPage from "./pages/landingPage.jsx";
import Products from "./pages/products.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import DetailProducts from "./pages/detailProducts.jsx";
import CreateAdmin from "./pages/admin-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "products-detail",
    element: <DetailProducts />,
  },
  {
    path: "admin",
    element: <CreateAdmin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
