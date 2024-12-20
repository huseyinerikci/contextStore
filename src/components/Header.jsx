import { Link } from "react-router-dom";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import api from "../api";

const Header = () => {
  const { selectCatgory, setSelectCategory } = useContext(ProductContext);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    api
      .get("/products/categories")
      .then((res) => setCategory(["all", ...res.data]));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-secondary px-4 py-3">
      <div className="container-fluid">
        <Link
          className="navbar-brand fs-3 d-flex align-items-center gap-3 text-warning"
          to="/"
        >
          <PiShoppingBagOpenFill />
          Context Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex me-5 py-3 text-center">
            <li className="nav-item">
              <Link className="nav-link fs-5" aria-current="page" to="/">
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/sepet">
                Sepet
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fs-5"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kategoriler
              </Link>
              <ul className="dropdown-menu">
                {category.map((cate, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectCategory(cate)}
                      className="dropdown-item text-center"
                    >
                      {cate}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
