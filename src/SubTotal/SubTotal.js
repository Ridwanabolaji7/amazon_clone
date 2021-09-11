import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

export default function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getCartTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            Subtotal({basket.length} item) : <strong>{`${value}`}</strong>
          </p>
        )}
        decimalScale={2}
        value={getCartTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="checkoutButton">Proceed to Checkout</button>
    </div>
  );
}
