import React from "react";
import "./ProductCart.css";
import { useStateValue } from "../StateProvider";

export default function ProductCart({ id, image, price, title, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => console.log("productCart", basket);
  //   dispatch({
  //     item: "REMOVE_FROM_CART",
  //     id: id,
  //   });
  return (
    <div className="productCart">
      <img className="productCartImage" src={image} alt="" />
      <div className="productInfo">
        <p className="productCartTitle">{title}</p>
        <p className="productCartTitle">${price}</p>

        <div className="productCartRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>*</span>
            ))}
        </div>
        <button onClick={removeItem}>Remove from the Cart</button>
      </div>
    </div>
  );
}
