import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import ProductProvider from "./context/productContext.jsx";
import BasketProvider from "./context/basketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BasketProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BasketProvider>
    <ToastContainer newestOnTop={true} autoClose={1500} position="top-left" />
  </StrictMode>
);
