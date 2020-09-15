import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checout-ads"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH_B9x6S_i6zcxlPRiFORVdKuTmAJafjJ88A&usqp=CAU"
          alt=""
        />
        <div>
          <h2 className="checout_title">Your shoping basket</h2>
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
