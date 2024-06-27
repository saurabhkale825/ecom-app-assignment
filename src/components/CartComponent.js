import React, { useContext } from "react";
import IndividualProduct from "./IndividualProduct";
import ECommerceContext from "../contexts/ECommerceContext";

function CartComponent() {
  const { cart } = useContext(ECommerceContext);
  return (
    <div>
      <h1
        style={{
          marginRight: "2rem",
          textAlign: "right",
          fontWeight: "bold",
        }}
      >
        Total Cart Amount - Rs.{" "}
        {cart.reduce((acc, item) => {
          return item.price + acc;
        }, 0)}
      </h1>
      {cart.length === 0 && <div>Cart is empty</div>}
      {cart.length > 0 && (
        <>
          {cart.map((product) => {
            return <IndividualProduct key={product.id} product={product} />;
          })}
        </>
      )}
    </div>
  );
}

export default CartComponent;
