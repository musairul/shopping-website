import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar numCartItems={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
