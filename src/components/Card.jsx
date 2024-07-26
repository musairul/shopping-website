import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
import cardStyles from "../styles/card.module.css";

function Card({ product, addToCart }) {
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <div className={cardStyles.card}>
      <img
        src={product.image}
        alt="image of product"
        className={cardStyles.image}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <strong>
        <p>Price: £{product.price}</p>
      </strong>
      <div className={cardStyles.controls}>
        <QuantitySelector
          initialQuantity={1}
          updateQuantity={setProductQuantity}
        />
        <button
          onClick={() => {
            addToCart(product, productQuantity);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
