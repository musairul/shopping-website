import { useState } from "react";

function QuantitySelector({ initialQuantity, updateQuantity = null }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const options = [];
  for (let i = 1; i < 10 + 1; i++) {
    options[i] = i;
  }

  return (
    <div className="quantitySelector">
      <label htmlFor="quantity">
        <span>Quantity: </span>
      </label>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          setQuantity(value);
          updateQuantity(value);
        }}
      >
        {options.map((index) => {
          return (
            <option key={index} value={index}>
              {index}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default QuantitySelector;
