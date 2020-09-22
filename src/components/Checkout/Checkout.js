import React from "react";
import { useStateValue } from "../../StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checout-ads"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH_B9x6S_i6zcxlPRiFORVdKuTmAJafjJ88A&usqp=CAU"
          alt=""
        />
        <div>
          <h2 className="checout_title">{user?.email} shoping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              title={item.title}
              price={item.price}
              rate={item.rate}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
