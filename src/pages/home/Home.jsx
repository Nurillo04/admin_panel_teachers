// import React from "React";

import Asside from "../../components/aside/Asside";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import "./Home.scss";

const Home = ({ name, products }) => {
  return (
    <div>
      <div className="Aps">
        <div>
          <Asside />
        </div>

        <div>
          <Navbar name={name} />
          <Products Products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
