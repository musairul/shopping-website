import { useEffect, useState } from "react";
import CartCard from "../components/CartCard";
import cartStyles from "../styles/cart.module.css";

function Cart({ cart, setCart }) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const calculatedTotal = cart.reduce((total, product) => {
      const totalForItem = Number(product.price) * Number(product.quantity);
      return total + totalForItem;
    }, 0);

    setSubtotal(calculatedTotal);
  }, [cart]);

  function removeFromCart(productId) {
    setCart(
      cart.filter((p) => {
        return p.id != productId;
      })
    );
  }

  function checkout() {
    setCart([]);
    alert("Thanks for shopping!");
  }

  function updateQuantity(productId, newQuantity) {
    setCart(
      cart.map((p) => {
        if (p.id === productId) {
          return { ...p, quantity: newQuantity };
        }
        return p;
      })
    );
  }

  return (
    <>
      <h1 className="centreTitle">Cart</h1>
      <div className={cartStyles.cart}>
        <div className={cartStyles.topbar}>
          <h2>Subtotal £{subtotal}</h2>
          {cart.length > 0 && (
            <>
              <button onClick={checkout}>Checkout</button>
              <br />
            </>
          )}
        </div>
        <div className={cartStyles.container}>
          {
            /*TODO: for product in cart, map into cartcard with product as prop */
            cart.map((product) => {
              return (
                <CartCard
                  key={product.id}
                  product={product}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default Cart;
