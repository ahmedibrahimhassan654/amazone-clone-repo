import React from "react";
import "./Subtotal.css";
import CurrencyFormate from "react-currency-format";
import { useStateValue } from "../../StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormate
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} items):<strong>0</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} //part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"EGP"}
      />
      <button className="subtotal-button">proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
