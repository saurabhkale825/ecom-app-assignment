import React, { useContext } from "react";
import "./styles/IndividualProduct.css";
import ECommerceContext from "../contexts/ECommerceContext";

function IndividualProduct({ product }) {
  const { cart, setCart } = useContext(ECommerceContext);

  return (
    <div className="product">
      <span>{product.title}</span>
      <br />
      <img
        alt={product.description}
        src={product.thumbnail}
        className="image"
      />
      <br />
      <span>Rs. {Math.floor((product.price)*100)}</span>
      <br />
      <br />
      {cart.includes(product) ? (
        <button
          className="remove-from-cart-button"
          onClick={() => setCart(cart.filter((item) => item.id !== product.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add-to-cart-button"
          onClick={() => setCart([...cart, product])}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}

export default IndividualProduct;
