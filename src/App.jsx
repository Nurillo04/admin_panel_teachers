// import React, { useState } from "react";
// import Asside from "./components/aside/Asside";
// import Navbar from "./components/navbar/Navbar";
import "./Aps.scss";

import "bootstrap/dist/css/bootstrap.min.css";
// import Products from "./components/products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AddProduct from "./pages/addProduct/AddProduct";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Empty from "./components/empty/Empty";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [posts, setposts] = useState([
    {
      title: "",
      description: "",
      brand: "",
      price: "",
    },
  ]);
  console.log(posts);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home name={name} />} />

          <Route
            path="add-product"
            element={<AddProduct posts={posts} setposts={setposts} />}
          />

          <Route path="empty" element={<Empty />} />
          <Route path="profile" element={<Profile user={user} />} />
          <Route
            path="login"
            element={<Login setUser={setUser} setName={setName} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
