import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./product.css";
import { useStateValue } from "../../StateProvider";


function Product({ id, name, title, price, rate, image }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket",  basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_Basket",
      item: {
        id,
        name,
        title,
        price,
        rate,
        image,
      },
    });
  };

  return (
    <div className="product ">
      <p className="product_name">{name} </p>
      <p className="product_info">{title}</p>
      <p className="product_info">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="rate_product">
        {Array(rate)
          .fill()
          .map((_, i) => (
            <p>
              <StarBorderIcon />
            </p>
          ))}
      </div>
      <img src={image} alt={name} />
      <button className="product_button" onClick={addToBasket}>
        add to basket
      </button>
    </div>
  );
}

export default Product;
