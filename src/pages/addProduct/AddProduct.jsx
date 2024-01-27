import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navigate } from "react-router-dom";
import "./AddProduct.scss";
// import { Route, Router, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Asside from "../../components/aside/Asside";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import axios from "axios";

const AddProduct = ({ setposts, posts }) => {
  const handlpost = async () => {
    try {
      const res = await axios.post(`http://localhost:3000/products`, posts);
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className="Aps">
          <div>
            <Asside />
          </div>

          <div>
            <Navbar />
            <NavLink to="/">
              <h3 className="title1">Basic</h3>
            </NavLink>

            <form className="mb-3 forma">
              <div className="mb-3">
                <label className="label">Name</label> <br />
                <input
                  className=" form-control"
                  type="text"
                  name="name"
                  id="name"
                  required
                  onChange={(e) =>
                    setposts({ ...posts, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <div className="mb-3">
                  <label className="label">discountPercentage</label> <br />
                  <input
                    className=" form-control"
                    type="text"
                    name="name"
                    id="name"
                    required
                    onChange={(e) =>
                      setposts({ ...posts, description: e.target.value })
                    }
                  />
                </div>
                <label className="label">Brand </label> <br />
                <input
                  className=" form-control"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) =>
                    setposts({ ...posts, brand: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="label">category</label> <br />
                <input
                  className=" form-control"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) =>
                    setposts({ ...posts, category: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="label">Price</label> <br />
                <input
                  className=" form-control"
                  type="text"
                  name="number"
                  id="number"
                  onChange={(e) =>
                    setposts({ ...posts, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label className="label">Discount price</label> <br />
                <input
                  className=" form-control"
                  type="text"
                  name="number"
                  id="number"
                  onChange={(e) =>
                    setposts({ ...posts, dicountprice: e.target.value })
                  }
                />
              </div>
              <NavLink to="/">
                <button className="btn btn2" onClick={handlpost}>
                  Save
                </button>
              </NavLink>
              <button className="btn btn3">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
