import QuantitySelector from "./QuantitySelector";
import ccStyles from "../styles/cartCard.module.css";

function CartCard({ product, removeFromCart, updateQuantity }) {
  return (
    <>
      <div className={ccStyles.card}>
        <img src={product.image} alt={product.title} />
        <div className={ccStyles.information}>
          <h3 className={ccStyles.title}>{product.title}</h3>
          <strong>
            <p className={ccStyles.price}>Price: £{product.price}</p>
          </strong>
          <QuantitySelector
            initialQuantity={product.quantity}
            updateQuantity={(e) => {
              updateQuantity(product.id, e);
            }}
          />
          <button
            className={ccStyles.removeButton}
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default CartCard;
