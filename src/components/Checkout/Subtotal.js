import React from "react";
import "./Subtotal.css";
import CurrencyFormate from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { calculateSum } from "../../reducer";
function Subtotal() {
  const [{ basket }] = useStateValue();

  //calculate basket total
 

  return (
    <div className="subtotal">
      <CurrencyFormate
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} items):
              <strong>{value }</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculateSum(basket)} //part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"EGP"}
      />
      <button className="subtotal-button">proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
