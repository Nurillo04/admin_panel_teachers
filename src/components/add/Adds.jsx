// const Adds = () => {
//   const [products, setProducts] = useState([]);

//   const fetchAdds = async () => {
//     try {
//       //   setLoading(true);
//       const res = await axios.get("http://localhost:3000/products");
//       const data = await res.data;
//       setProducts(data);
//     } catch (error) {
//       //   setError("Serverdan xatolik!");
//     } finally {
//       //   setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchAdds();
//   }, []);

import React, { useState } from "react";
import { useEffect } from "react";
// import Product from "./Product";
import "./Product.scss";
// import Table from "../table/Table";
import { button, redaktiv, strelka } from "../../assets";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="card">
        <nav className="nav">
          <ul className="list">
            <li className="item item1">
              {""}
              <input type="checkbox" id="scales" name="scales" />
            </li>
            <li className="item item2">Name</li>
            <li className="item item3">description</li>
            <li className="item">Brand </li>
            <li className="item">Price</li>
            <li className="item">Discount price</li>
            <li className="item">category</li>
            {/* <li className="item"></li> */}
          </ul>
        </nav>
        <div>
          {products.map((product) => (
            <ul key={product.id} className="lists">
              {/* <input type="checkbox" id="scales" name="scales"  */}
              <li className=" items li1">
                <input className="checkbox" type="checkbox" />
              </li>
              <li className="items li2">{product.title}</li>
              <li className="items li3">{product.description}</li>
              <li className="items ">{product.brand}</li>
              <li className="items">{product.price} $</li>
              <li className="items">{product.discountPercentage} $</li>
              <li className="items">{product.category}</li>
              <li className="items li7">
                <img src={redaktiv} alt="rasm" />
              </li>
              <li className="items  li7 img">
                <img src={button} alt="rasn" />
              </li>
            </ul>
          ))}
        </div>
        <div className="footer">
          <NavLink to="add-product">
            <button className="footer-btn">Новый товар</button>
          </NavLink>
          <img className="aside__img mask" src={strelka} alt="rasm" />
          <p>© Anymarket 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
