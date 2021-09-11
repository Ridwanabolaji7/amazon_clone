import React from "react";
import "./Checkout.css";
import SubTotal from "../SubTotal/SubTotal";
import { useStateValue } from "../StateProvider";
import Product from "../product/Product";
import ProductCart from "../ProductCart/ProductCart";

export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        {console.log("checkout ", basket)}
        {basket.length === 0 ? (
          <div>
            <h2 className="checkoutTitle">Your shoping cart is empty</h2>
            <p>you have no item in your basket, buy one</p>
          </div>
        ) : (
          <div>
            <h2 className="shopingBasketItem">Items in the Shoping Basket</h2>
            {basket.map((item) => (
              <ProductCart
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkoutRight">
          <SubTotal />
        </div>
      )}
    </div>
  );
}
