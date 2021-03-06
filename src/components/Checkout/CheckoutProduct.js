import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";
function CheckoutProduct({ id, name, title, price, rate, image }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BaSKET",
      id,
    });
  };

  return (
    <div className="checkoutProducr">
      <img src={image} alt={name} />
      <div className="checout_product_info">
        <p className="checkout_product_name">{name}</p>
        <p className="checkout_product_title">{title}</p>
        <p className="checkout_product_price">
          <smal>EGP</smal>
          <strong>{price}</strong>
        </p>
        <div className="checkout_product_rating">
          {Array(rate)
            .fill()
            .map((_, i) => (
              <p>
                <StarBorderIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
