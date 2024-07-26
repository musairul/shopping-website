import { useEffect, useState } from "react";
import Card from "../components/Card";
import shopStyles from "../styles/shop.module.css";

function Shop({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 className="centreTitle">Loading...</h1>;
  if (error) return <h1 className="centreTitle">Error: {error.message}</h1>;

  function addToCart(product, quantity) {
    setCart(() => {
      const noDuplicateCart = cart.filter((existingProduct) => {
        return existingProduct.id != product.id;
      });

      return [...noDuplicateCart, { ...product, quantity }];
    });
  }

  return (
    <>
      <h1 className="centreTitle">Shop</h1>
      <div className={shopStyles.container}>
        {products.map((product) => {
          return (
            <Card key={product.id} product={product} addToCart={addToCart} />
          );
        })}
      </div>
    </>
  );
}

export default Shop;
