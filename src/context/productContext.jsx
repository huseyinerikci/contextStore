import { createContext, useEffect, useState } from "react";
import api from "../api";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  useEffect(() => {
    const url =
      selectCategory === "all"
        ? "/products"
        : `/products/category/${selectCategory}`;
    api.get(url).then((res) => {
      setProducts(res.data);
    });
  }, [selectCategory]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, selectCategory, setSelectCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
