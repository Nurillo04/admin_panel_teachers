import { useState } from "react";
import { useEffect } from "react";
// import Product from "./Product";
import Form from "react-bootstrap/Form";
import "axios";
import "./Product.scss";
// import Table from "../table/Table";
import { button, redaktiv, strelka } from "../../assets";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  // const [search, setSearch] = useState("");
  // const [searched, setSearched] = useState(" ");
  // const [selectedCatogory, setSelectedCatogory] = useState("all");
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/teachers`);
      const data = await res.data;
      setProducts(data);
    } catch (error) {
      console.log(Error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  // const deleteProducts = async (id) => {
  //   try {
  //     const res = await axios.delete(`http://localhost:3000/products/${id}`);
  //     fetchProducts();
  //     console.log(id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleCategory = (e) => {
  //   setSelectedCatogory(e.target.value);
  // };

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // const filtredProducts =
  //   selectedCatogory === "all"
  //     ? products
  //     : products.filter((product) => product.category === selectedCatogory);

  // const searchedProducts = searched
  //   ? filtredProducts.filtr(
  //       (cn) =>
  //         cn.title.trim().toLowerCase().includes(searched.toLowerCase()) ||
  //         cn.description
  //           .trim()
  //           .toLowerCase()
  //           .includes(searched.toLowerCase()) ||
  //         cn.category.trim().toLowerCase().includes(searched.toLowerCase())
  //     )
  //   : filtredProducts;

  useEffect(() => {
    fetchProducts();
    // searchedProducts();
  }, []);

  const deleteProducts = (id) => {
    if (confirm("Are you sure you want to delete this Products?")) {
      const newProducts = products.filter((cn) => cn.id !== id);
      setProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
    }
  };

  return (
    <div>
      <div className="card">
        <div className="form">
          <Form.Control
            classNam
            type="text"
            className="search-input w-25"
            placeholder="search..."
            // onChange={handleSearch}
          />
          <select
            name="selectedCategory"
            className="form-select w-25 h-25 select"
            type="text"

            // onChange={handleCategory}
            // value={selectedCategory}
          >
            <option value="All">All</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">Home-decoration</option>
            <option value="nokia">Nokia</option>
          </select>
        </div>

        <nav className="nav">
          <ul className="list">
            <li className="item item1">
              <input type="checkbox" id="scales" name="scales" />
            </li>
            <li className="item item2">Id</li>
            <li className="item item3">First Name</li>
            <li className="item">Last name </li>
            <li className="item">Groups</li>
          </ul>
        </nav>
        <div>
          {products.map((product) => (
            <ul key={product.id} className="lists">
              {/* <input type="checkbox" id="scales" name="scales"  */}
              <li className=" items li1">
                <input className="checkbox" type="checkbox" />
              </li>
              <li className="items li2">{product.id}</li>
              <li className="items ">{product.lastName}</li>

              <li className="items li3">{product.firstName}</li>
              <li className="items">{product.groups} </li>

              <li className="items li7">
                <img src={redaktiv} alt="rasm" />
              </li>

              <button onClick={() => deleteProducts(product.id)}>
                <li className="items li7 img">
                  <img src={button} alt="rasn" />
                </li>
              </button>
            </ul>
          ))}
        </div>
        {/* <div className="footer">
          <NavLink to="add-product">
            <button className="footer-btn">.</button>
          </NavLink>
          <img className="aside__img mask" src={strelka} alt="rasm" />
          <p>© Anymarket 2022</p>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
