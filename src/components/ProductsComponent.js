import "./styles/ProductsComponent.css";
import IndividualProduct from "./IndividualProduct";
import ECommerceContext from "../contexts/ECommerceContext";
import { useContext } from "react";

function ProductsComponent() {
  const {  displayProducts} = useContext(ECommerceContext);

  return (
    <div className="products-container">
      {displayProducts.map((product) => {
        return(
          <>
          
         <IndividualProduct key={product.id} product={product} />
        </>
        )
      })}
    </div>
  );
}

export default ProductsComponent;
