import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles/HeaderComponent.css";
import ECommerceContext from "../contexts/ECommerceContext";

function HeaderComponent() {
  const { cart } = useContext(ECommerceContext);

  return (
    <div className="header">
      <Link to="/" className="home-icon">
        Home
      </Link>
      <Link to="/cart" className="cart-icon">
        Cart
        {cart.length > 0 && <div className="cart-count">{cart.length}</div>}
      </Link>
    </div>
  );
}

export default HeaderComponent;
